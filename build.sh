#!/bin/bash
set -e

uglifyjs vanity.js > vanity.min.js
pbcopy < vanity.min.js

echo "✅ Build successful. Minified code copied to clipboard."
