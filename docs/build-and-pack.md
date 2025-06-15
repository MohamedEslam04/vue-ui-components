# Building and Packing @eslamdevui-vue

This document outlines the steps to build and pack the `@eslamdevui-vue` package for local use or distribution.

## Prerequisites

- Node.js and npm installed
- The `@eslamdevui-vue` package cloned and set up in your workspace

## Steps

### 1. Build the Package

Run the build script for `@eslamdevui-vue`. This will compile the TypeScript files and generate the distribution files in the `dist` directory.

```bash
npm run build --workspace=@eslamdevui/vue
```

### 2. Pack the Package

Once the build is successful, pack the package into a tarball (`.tgz` file) using npm. This tarball can be used for local testing or distribution.

```bash
npm pack --workspace=@eslamdevui/vue
```

This command will create a tarball file (e.g., `eslamdevui-vue-1.7.22.tgz`) in the root of your project.

### 3. Use the Packed Package

You can then use this tarball in another project by installing it locally:

```bash
npm install /path/to/eslamdevui-vue-1.7.22.tgz
```

Replace `/path/to/` with the actual path to the tarball.

## Summary

- **Build:** `npm run build --workspace=@eslamdevui/vue`
- **Pack:** `npm pack --workspace=@eslamdevui/vue`
- **Install locally:** `npm install /path/to/eslamdevui-vue-1.7.22.tgz`
