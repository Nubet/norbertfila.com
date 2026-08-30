set -euo pipefail

if ! pm2 describe nf-portfolio >/dev/null 2>&1; then
  echo "nf-portfolio process is missing in pm2"
  pm2 list || true
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
