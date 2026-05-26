# Ebook subscribe API (MailerLite)

Endpoint: `POST /api/ebook-subscribe`

## Produkcja (CI/CD + GitHub Secrets)

Plik `/opt/nf-api/.env` jest generowany automatycznie przez pipeline
`/.github/workflows/deploy.yml` na podstawie GitHub Secrets.

Wymagane sekrety w repozytorium:

- `MAILERLITE_API_KEY`
- `MAILERLITE_GROUP_ID` (u Ciebie: `188568115865454328`)

## Lokalny start

Do uruchamiania lokalnego nadal możesz użyć zmiennych środowiskowych:

```bash
MAILERLITE_API_KEY=xxx MAILERLITE_GROUP_ID=188568115865454328 npm run serve:ebook-api
```

## Nginx reverse proxy

Dodaj do vhosta domeny:

```nginx
location /api/ebook-subscribe {
    proxy_pass http://127.0.0.1:8787/api/ebook-subscribe;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

## systemd (zarządzane przez pipeline)

Serwis `nf-ebook-api.service` jest tworzony/aktualizowany automatycznie
przez workflow deploy.

Docelowy serwis wygląda tak:

```ini
[Unit]
Description=NF Ebook Subscribe API
After=network.target

[Service]
User=ubuntu
WorkingDirectory=/opt/nf-api
EnvironmentFile=/opt/nf-api/.env
ExecStart=/usr/bin/node /opt/nf-api/server.mjs
Restart=always
RestartSec=3

[Install]
WantedBy=multi-user.target
```

Jeśli musisz ręcznie sprawdzić stan usługi na serwerze:

```bash
sudo systemctl status nf-ebook-api
sudo journalctl -u nf-ebook-api -n 100 --no-pager
```
