#!/usr/bin/env bash
set -e

ROOT_DIR="$(git rev-parse --show-toplevel)/"
TARGET_DIR="$(pwd)"
RELATIVE_TARGET_DIR="${TARGET_DIR/$ROOT_DIR/}"

# Always run from repo root
pushd "$ROOT_DIR" > /dev/null

prettierArgs=()

if [ -n "$CI" ]; then
  prettierArgs+=(--check)
else
  prettierArgs+=(--write)
fi

prettierArgs+=(--ignore-unknown)

# Pass along any files/globs exactly as given
prettierArgs+=("$@")

# If no paths were passed, default to the current package
if [ "$#" -eq 0 ]; then
  prettierArgs+=("$RELATIVE_TARGET_DIR")
fi

npx prettier "${prettierArgs[@]}"

popd > /dev/null
