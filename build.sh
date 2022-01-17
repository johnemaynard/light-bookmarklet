#!/bin/bash
set -e

uglifyjs light.js > light.min.js
pbcopy < light.min.js

echo "✅ Build successful. Minified code copied to clipboard."
