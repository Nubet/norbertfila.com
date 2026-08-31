set -euo pipefail
export NEXT_TELEMETRY_DISABLED=1

LOCK_DIR="${TMPDIR:-/tmp}/nf-portfolio-deploy.lock"
LOCK_PID_FILE="$LOCK_DIR/pid"

cleanup_lock() {
  rm -rf "$LOCK_DIR"
}

if mkdir "$LOCK_DIR" 2>/dev/null; then
  printf '%s\n' "$$" > "$LOCK_PID_FILE"
  trap cleanup_lock EXIT INT TERM
else
  existing_pid=""

  if [ -f "$LOCK_PID_FILE" ]; then
    existing_pid=$(cat "$LOCK_PID_FILE" 2>/dev/null || true)
  fi

  if [ -n "$existing_pid" ] && kill -0 "$existing_pid" 2>/dev/null; then
    echo "Another deploy is already running with pid $existing_pid"
    exit 1
  fi

  rm -rf "$LOCK_DIR"

  if ! mkdir "$LOCK_DIR" 2>/dev/null; then
    echo "Could not acquire deploy lock at $LOCK_DIR"
    exit 1
  fi

  printf '%s\n' "$$" > "$LOCK_PID_FILE"
  trap cleanup_lock EXIT INT TERM
fi

if [ -z "${APP_DIR:-}" ]; then
  echo "APP_DIR secret is missing"
  exit 1
fi

export NVM_DIR="$HOME/.nvm"
if [ -s "$NVM_DIR/nvm.sh" ]; then
  . "$NVM_DIR/nvm.sh"
fi

missing_tools=""
for tool in git node bun pm2 nginx certbot; do
  if ! command -v "$tool" >/dev/null 2>&1; then
    missing_tools="$missing_tools $tool"
  fi
done

if [ -n "$missing_tools" ]; then
  echo "Missing required tools on VPS:$missing_tools"
  echo "Install them once on the server, then rerun deploy."
  exit 1
fi

sudo mkdir -p "$APP_DIR"
sudo chown -R "$USER:$USER" "$APP_DIR"
git config --global --add safe.directory "$APP_DIR"

if [ ! -d "$APP_DIR/.git" ]; then
  git clone --depth 1 https://github.com/Nubet/norbertfila.com.git "$APP_DIR"
fi

cd "$APP_DIR"
echo STEP_GIT_START
git reset --hard HEAD
git clean -fd
git checkout main
git pull --ff-only origin main
echo STEP_GIT_DONE

printf 'NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=%s\n' "$NEXT_PUBLIC_CONTACT_FORM_ENDPOINT" > .env.production
echo STEP_ENV_DONE

echo STEP_INSTALL_START
timeout --foreground 10m bun install --frozen-lockfile >/tmp/nf-bun-install.log 2>&1 || {
  cat /tmp/nf-bun-install.log
  exit 1
}
echo STEP_INSTALL_DONE

echo STEP_BUILD_START
timeout --foreground 15m bun run build >/tmp/nf-build.log 2>&1 || {
  cat /tmp/nf-build.log
  exit 1
}
echo STEP_BUILD_DONE

mkdir -p .next/standalone/.next
rm -rf .next/standalone/public .next/standalone/.next/static
cp -R public .next/standalone/public
cp -R .next/static .next/standalone/.next/static
echo STEP_STANDALONE_ASSETS_DONE

write_nginx_config() {
  if sudo test -d /etc/letsencrypt/live/norbertfila.com; then
    sudo tee /etc/nginx/sites-available/norbertfila.com >/dev/null <<'NGINX_CONF'
server {
    listen [::]:443 ssl ipv6only=on;
    listen 443 ssl;
    server_name norbertfila.com www.norbertfila.com;

    if ($host = www.norbertfila.com) {
        return 301 https://norbertfila.com$request_uri;
    }

    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header Permissions-Policy "camera=(), microphone=(), geolocation=()" always;
    add_header Cross-Origin-Resource-Policy "same-origin" always;
    add_header Content-Security-Policy "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; img-src 'self' data: https://cdn.jsdelivr.net https://cdn.norbertfila.com; media-src 'self' https://cdn.norbertfila.com; font-src 'self' https://fonts.gstatic.com data:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.clarity.ms https://scripts.clarity.ms; connect-src 'self' https://formspree.io https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.clarity.ms https://*.clarity.ms; form-action 'self' https://formspree.io; upgrade-insecure-requests" always;

    ssl_certificate /etc/letsencrypt/live/norbertfila.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/norbertfila.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}

server {
    listen 80;
    listen [::]:80;
    server_name norbertfila.com www.norbertfila.com;

    return 301 https://norbertfila.com$request_uri;
}
NGINX_CONF
  else
    sudo tee /etc/nginx/sites-available/norbertfila.com >/dev/null <<'NGINX_CONF'
server {
    listen 80;
    listen [::]:80;
    server_name norbertfila.com www.norbertfila.com;

    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header Permissions-Policy "camera=(), microphone=(), geolocation=()" always;
    add_header Cross-Origin-Resource-Policy "same-origin" always;
    add_header Content-Security-Policy "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; img-src 'self' data: https://cdn.jsdelivr.net https://cdn.norbertfila.com; media-src 'self' https://cdn.norbertfila.com; font-src 'self' https://fonts.gstatic.com data:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.clarity.ms https://scripts.clarity.ms; connect-src 'self' https://formspree.io https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.clarity.ms https://*.clarity.ms; form-action 'self' https://formspree.io; upgrade-insecure-requests" always;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
NGINX_CONF
  fi
}

write_nginx_config

sudo rm -f /etc/nginx/sites-enabled/default
sudo ln -sfn /etc/nginx/sites-available/norbertfila.com /etc/nginx/sites-enabled/norbertfila.com
sudo nginx -t
sudo systemctl reload nginx

if ! sudo test -d /etc/letsencrypt/live/norbertfila.com; then
  if [ -z "${CERTBOT_EMAIL:-}" ]; then
    echo "CERTBOT_EMAIL secret is required for first certificate issuance"
    exit 1
  fi

  sudo certbot --nginx --non-interactive --agree-tos --redirect -m "$CERTBOT_EMAIL" -d norbertfila.com -d www.norbertfila.com
  write_nginx_config
  sudo nginx -t
  sudo systemctl reload nginx
fi

if sudo test -f /etc/systemd/system/nf-portfolio.service; then
  sudo systemctl disable --now nf-portfolio.service >/dev/null 2>&1 || true
  sudo rm -f /etc/systemd/system/nf-portfolio.service
  sudo systemctl daemon-reload
fi

# Old deployments ran the standalone server directly under systemd.
# Kill that legacy process so pm2 can own port 3000.
legacy_pids=$(pgrep -f '/opt/nf-portfolio/server.js' || true)
if [ -n "$legacy_pids" ]; then
  sudo kill $legacy_pids || true
  sleep 2
fi

if pm2 describe nf-portfolio >/dev/null 2>&1; then
  pm2 delete nf-portfolio
fi

PORT=3000 HOSTNAME=127.0.0.1 pm2 start .next/standalone/server.js --name nf-portfolio --cwd "$APP_DIR"

sleep 3

if ! pm2 describe nf-portfolio >/dev/null 2>&1; then
  echo "nf-portfolio process is missing in pm2 after deploy"
  pm2 list || true
  exit 1
fi

echo STEP_PM2_DONE
pm2 save >/dev/null
sudo env PATH="$PATH" pm2 startup systemd -u "$USER" --hp "$HOME" >/tmp/nf-pm2-startup.log 2>&1 || true
