#!/usr/bin/env bash
set -e

SRC='./src'
DST='./dist'
name="headlessui"
input="./${SRC}/index.ts"

sharedOptions=()
sharedOptions+=("--platform=browser")
sharedOptions+=("--target=es2019")

# Find all source files except test files
INPUT_FILES=$(find "$SRC" -type f \( -name '*.ts' -o -name '*.tsx' \) ! -name '*.test.*' ! -path '*/__mocks__/*')

# Create dist folder if not exist
mkdir -p "$DST"

# ESM builds
NODE_ENV=production  npx esbuild $INPUT_FILES --format=esm --outdir=$DST               --outbase=$SRC --minify --pure:React.createElement --define:process.env.TEST_BYPASS_TRACKED_POINTER="false" --define:__DEV__="false" "${sharedOptions[@]}" &
NODE_ENV=production  npx esbuild $input       --format=esm --outfile=$DST/$name.esm.js --outbase=$SRC --minify --pure:React.createElement --define:process.env.TEST_BYPASS_TRACKED_POINTER="false" --define:__DEV__="false" "${sharedOptions[@]}" &

# CommonJS builds
NODE_ENV=production  npx esbuild $input --format=cjs --outfile=$DST/$name.prod.cjs --minify --bundle --pure:React.createElement --define:process.env.TEST_BYPASS_TRACKED_POINTER="false" --define:__DEV__="false" "${sharedOptions[@]}" "$@" &
NODE_ENV=development npx esbuild $input --format=cjs --outfile=$DST/$name.dev.cjs           --bundle --pure:React.createElement --define:process.env.TEST_BYPASS_TRACKED_POINTER="false" --define:__DEV__="true"  "${sharedOptions[@]}" "$@" &

# Types
tsc --emitDeclarationOnly --outDir $DST &

wait

# Copy index.d.ts to index.d.cts
cp $DST/index.d.ts $DST/index.d.cts

# Copy build files (optional)
if [ -d "./build" ]; then
  cp -rf ./build/* $DST/
fi

# Clean up test-related files
find $DST -name '*.test.*' -delete
find $DST -path '*/__mocks__/*' -delete
find $DST -path '*/test-utils/*' -delete

echo "Build completed successfully!"
