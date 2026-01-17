#!/bin/bash

BACKUP_DIR="./backups"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

mkdir -p "$BACKUP_DIR"

# Backup Docker volumes
docker run --rm -v astro-portfolio_nginx:/volume -v "$BACKUP_DIR":/backup \
  alpine tar czf /backup/nginx_${TIMESTAMP}.tar.gz -C /volume .

# Backup SSL certificates
if [ -d "./ssl" ]; then
    tar czf "$BACKUP_DIR"/ssl_${TIMESTAMP}.tar.gz -C ./ssl .
fi

echo "✅ Backup completed: $BACKUP_DIR"