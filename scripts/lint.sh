#!/usr/bin/env bash
set -e

ROOT_DIR="$(git rev-parse --show-toplevel)"
TARGET_DIR="$(pwd)"
RELATIVE_TARGET_DIR="${TARGET_DIR/$ROOT_DIR/}"

# Debugging output
echo "ROOT_DIR: $ROOT_DIR"
echo "TARGET_DIR: $TARGET_DIR"
echo "RELATIVE_TARGET_DIR: $RELATIVE_TARGET_DIR"
echo "Arguments: $@"

# INFO: This script is always run from the root of the repository.
pushd "$ROOT_DIR" > /dev/null

prettierArgs=()

if ! [ -z "$CI" ]; then
  prettierArgs+=("--check")
else
  prettierArgs+=("--write")
fi

# Add default arguments
prettierArgs+=('--ignore-unknown')

# Passthrough arguments and flags
prettierArgs+=("$@")

# Ensure that a path is passed, otherwise default to the current directory
if [ -z "$*" ]; then
  prettierArgs+=("$RELATIVE_TARGET_DIR")
fi

# Execute
echo "Running: npx prettier ${prettierArgs[*]}"
npx prettier "${prettierArgs[@]}"

popd > /dev/null