#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
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

COMPOSE_FILE=${1:-docker-compose.stack.yml}

docker compose -f "$COMPOSE_FILE" up -d clickhouse postgres

docker compose -f "$COMPOSE_FILE" run --rm plausible sh -c "./bin/plausible eval Plausible.Release.migrate"

docker compose -f "$COMPOSE_FILE" run --rm plausible sh -c './bin/plausible eval "if function_exported?(Plausible.Release, :init_clickhouse, 0), do: Plausible.Release.init_clickhouse(), else: if function_exported?(Plausible.Release, :setup_clickhouse, 0), do: Plausible.Release.setup_clickhouse(), else: if function_exported?(Plausible.Release, :migrate_clickhouse, 0), do: Plausible.Release.migrate_clickhouse(), else: IO.puts(\"No ClickHouse init function found.\")"'

docker compose -f "$COMPOSE_FILE" up --build
