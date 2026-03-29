#!/bin/sh
set -xeuo pipefail
node_modules/.bin/knip --no-config-hints
node_modules/.bin/tsc
node_modules/.bin/tsc --project src
