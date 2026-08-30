set -euo pipefail

if ! pm2 describe nf-portfolio >/dev/null 2>&1; then
  echo "nf-portfolio process is missing in pm2"
  pm2 list || true
  exit 1
fi

pm2_pid=$(pm2 pid nf-portfolio | tail -n 1 | tr -d '[:space:]')
if [ -z "$pm2_pid" ] || [ "$pm2_pid" = "0" ]; then
  echo "nf-portfolio is registered in pm2 but has no running pid"
  pm2 list || true
  pm2 logs nf-portfolio --lines 120 --nostream || true
  exit 1
fi

port_pid=$(ss -ltnp '( sport = :3000 )' 2>/dev/null | sed -n 's/.*pid=\([0-9]\+\).*/\1/p' | head -n 1)
if [ -n "$port_pid" ] && [ "$port_pid" != "$pm2_pid" ]; then
  echo "Port 3000 is owned by pid $port_pid instead of pm2 pid $pm2_pid"
  ps -fp "$port_pid" || true
  pm2 list || true
  pm2 logs nf-portfolio --lines 120 --nostream || true
  exit 1
fi

status_local=$(curl -s -o /dev/null -w "%{http_code}" http://127.0.0.1:3000/)
if [ "$status_local" != "200" ]; then
  echo "Unexpected local status code: $status_local"
  pm2 logs nf-portfolio --lines 120 --nostream || true
  exit 1
fi

status_public=$(curl -s -o /dev/null -w "%{http_code}" https://norbertfila.com/)
if [ "$status_public" != "200" ]; then
  echo "Unexpected public status code: $status_public"
  curl -sS -D - -o /dev/null https://norbertfila.com/ || true
  exit 1
fi

status_sitemap=$(curl -s -o /dev/null -w "%{http_code}" https://norbertfila.com/sitemap.xml)
if [ "$status_sitemap" != "200" ]; then
  echo "Unexpected sitemap.xml status code: $status_sitemap"
  curl -sS -D - -o /dev/null https://norbertfila.com/sitemap.xml || true
  exit 1
fi
