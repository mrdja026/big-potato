# Plausible (local)

Local Plausible stack for testing analytics integration.

## Start
```sh
# One-time setup + start
bash setup.sh

# Or run manually:
cp .env.example .env
# Generate a 32+ byte secret for Plausible
# openssl rand -base64 48

# Optional: force the env file explicitly
# docker compose --env-file .env up
# Or from repo root:
# docker compose -f astro_rewrite/infra/plausible/docker-compose.yml --env-file astro_rewrite/infra/plausible/.env up

docker compose up
```

## Access
- Plausible UI: http://localhost:8000
- Mailpit UI: http://localhost:8025

## App integration (local)
Add these to `astro_rewrite/.env` for local tracking:
- `PUBLIC_PLAUSIBLE_ENABLED=true`
- `PUBLIC_PLAUSIBLE_DOMAIN=mrdjan.net`
- `PUBLIC_PLAUSIBLE_SCRIPT_URL=http://localhost:8000/js/script.js`

### WSL access from Windows (Linux Docker daemon)
If Docker is running inside WSL, Windows may not reach `localhost:8000`.
Use a port proxy:
```sh
# In WSL, get the VM IP
ip -4 addr show eth0 | grep -oP '(?<=inet\s)\d+(\.\d+){3}'

# In Windows PowerShell (Admin)
netsh interface portproxy add v4tov4 listenaddress=127.0.0.1 listenport=8000 connectaddress=<WSL-IP> connectport=8000
```
Then open `http://localhost:8000` in Windows.

## Init databases (first run)
```sh
# Start backing services
docker compose up -d clickhouse postgres

# Initialize Postgres + ClickHouse schemas
docker compose run --rm plausible sh -c "./bin/plausible eval Plausible.Release.migrate"
# Use setup.sh for ClickHouse init (handles older images)

# Optional manual ClickHouse database creation
# docker compose exec clickhouse clickhouse-client -q "CREATE DATABASE IF NOT EXISTS plausible"
```

## First login
- Email: `ADMIN_USER_EMAIL` from `.env`
- Password: `ADMIN_USER_PASSWORD` from `.env`

## Notes
- Update `BASE_URL` and admin credentials before using beyond local testing.


## while the automation is not properly unfuck
SECRET=$(python3 - <<'PY'
import secrets
print(secrets.token_urlsafe(48))
PY
)
printf "SECRET_KEY_BASE=%s\n" "$SECRET" >> .env
docker compose up
