#!/bin/bash

URL="http://localhost"
EXPECTED="Portfolio"

if curl -s "$URL" | grep -q "$EXPECTED"; then
    echo "✅ Website is running correctly"
    exit 0
else
    echo "❌ Website is not responding correctly"
    exit 1
fi