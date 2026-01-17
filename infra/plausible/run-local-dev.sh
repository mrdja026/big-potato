#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
REPO_DIR=$(cd "$SCRIPT_DIR/../.." && pwd)

cd "$SCRIPT_DIR"

if [ ! -f .env ]; then
  cp .env.example .env
  echo "Created .env from .env.example"
fi

SECRET_KEY_LINE=$(grep -E '^SECRET_KEY_BASE=' .env || true)
SECRET_KEY_VALUE=${SECRET_KEY_LINE#SECRET_KEY_BASE=}

if [ -z "$SECRET_KEY_VALUE" ]; then
  if command -v openssl >/dev/null 2>&1; then
    SECRET=$(openssl rand -base64 48)
  else
    SECRET=$(python3 - <<'PY'
import secrets
print(secrets.token_urlsafe(48))
PY
)
  fi

  if grep -q '^SECRET_KEY_BASE=' .env; then
    sed -i "s|^SECRET_KEY_BASE=.*|SECRET_KEY_BASE=$SECRET|" .env
  else
    printf "SECRET_KEY_BASE=%s\n" "$SECRET" >> .env
  fi
  echo "Generated SECRET_KEY_BASE"
fi

docker compose -f docker-compose.local.yml up -d clickhouse postgres

ready=false
for _ in {1..30}; do
  if docker compose -f docker-compose.local.yml exec -T clickhouse clickhouse-client -q "SELECT 1" >/dev/null 2>&1; then
    ready=true
    break
  fi
  sleep 1
done

if [ "$ready" = false ]; then
  echo "ClickHouse did not become ready in time"
  exit 1
fi

docker compose -f docker-compose.local.yml exec -T clickhouse clickhouse-client -q "CREATE DATABASE IF NOT EXISTS plausible"

docker compose -f docker-compose.local.yml run --rm plausible sh -c "./bin/plausible eval Plausible.Release.migrate"

docker compose -f docker-compose.local.yml run --rm plausible sh -c './bin/plausible eval "if function_exported?(Plausible.Release, :init_clickhouse, 0), do: Plausible.Release.init_clickhouse(), else: if function_exported?(Plausible.Release, :setup_clickhouse, 0), do: Plausible.Release.setup_clickhouse(), else: if function_exported?(Plausible.Release, :migrate_clickhouse, 0), do: Plausible.Release.migrate_clickhouse(), else: IO.puts(\"No ClickHouse init function found.\")"'

docker compose -f docker-compose.local.yml up -d

cd "$REPO_DIR"

if [ ! -d node_modules ]; then
  if command -v pnpm >/dev/null 2>&1; then
    pnpm install
  else
    npm install
  fi
fi

if command -v pnpm >/dev/null 2>&1; then
  pnpm dev
else
  npm run dev
fi
