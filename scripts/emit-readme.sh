#!/bin/sh
set -xeuo pipefail
export TARGET=git
scripts/eta.js < src/README.md > README.md
