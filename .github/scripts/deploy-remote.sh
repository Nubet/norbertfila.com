set -euo pipefail
export NEXT_TELEMETRY_DISABLED=1

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
git checkout main
git pull --ff-only origin main
echo STEP_GIT_DONE

printf 'NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=%s\n' "$NEXT_PUBLIC_CONTACT_FORM_ENDPOINT" > .env.production
echo STEP_ENV_DONE

bun install --frozen-lockfile >/tmp/nf-bun-install.log 2>&1 || {
  cat /tmp/nf-bun-install.log
  exit 1
}
echo STEP_INSTALL_DONE

bun run build >/tmp/nf-build.log 2>&1 || {
  cat /tmp/nf-build.log
  exit 1
}
echo STEP_BUILD_DONE

if [ ! -f /etc/nginx/sites-available/norbertfila.com ]; then
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

sudo rm -f /etc/nginx/sites-enabled/default
sudo ln -sfn /etc/nginx/sites-available/norbertfila.com /etc/nginx/sites-enabled/norbertfila.com
sudo nginx -t
sudo systemctl reload nginx

if [ ! -d /etc/letsencrypt/live/norbertfila.com ]; then
  if [ -z "${CERTBOT_EMAIL:-}" ]; then
    echo "CERTBOT_EMAIL secret is required for first certificate issuance"
    exit 1
  fi

  sudo certbot --nginx --non-interactive --agree-tos --redirect -m "$CERTBOT_EMAIL" -d norbertfila.com -d www.norbertfila.com
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
