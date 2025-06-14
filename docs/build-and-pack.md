# Building and Packing @headlessui-vue

This document outlines the steps to build and pack the `@headlessui-vue` package for local use or distribution.

## Prerequisites

- Node.js and npm installed
- The `@headlessui-vue` package cloned and set up in your workspace

## Steps

### 1. Build the Package

Run the build script for `@headlessui-vue`. This will compile the TypeScript files and generate the distribution files in the `dist` directory.

```bash
npm run build --workspace=@headlessui/vue
```

### 2. Pack the Package

Once the build is successful, pack the package into a tarball (`.tgz` file) using npm. This tarball can be used for local testing or distribution.

```bash
npm pack --workspace=@headlessui/vue
```

This command will create a tarball file (e.g., `headlessui-vue-1.7.22.tgz`) in the root of your project.

### 3. Use the Packed Package

You can then use this tarball in another project by installing it locally:

```bash
npm install /path/to/headlessui-vue-1.7.22.tgz
```

Replace `/path/to/` with the actual path to the tarball.

## Summary

- **Build:** `npm run build --workspace=@headlessui/vue`
- **Pack:** `npm pack --workspace=@headlessui/vue`
- **Install locally:** `npm install /path/to/headlessui-vue-1.7.22.tgz` 