# Automated Package Publishing

This document explains how to use the automated publishing workflow for `@eslamdevui/vue` and `@eslamdevui/tailwindcss` packages.

## Overview

The repository uses GitHub Actions to automatically publish packages to npm when new versions are released. The workflow is triggered when changes are pushed to the `main` branch that affect either package.

## Prerequisites

Before you can use the automated publishing workflow, you need to:

1. Have write access to the npm registry for the `@eslamdevui` organization
2. Set up an NPM token in your GitHub repository

### Setting up NPM Token

1. Generate an NPM token:

   ```bash
   npm login
   npm token create
   ```

2. Add the token to GitHub:
   - Go to your GitHub repository
   - Navigate to Settings > Secrets and variables > Actions
   - Click "New repository secret"
   - Name: `NPM_TOKEN`
   - Value: Your NPM token
   - Click "Add secret"

## How to Release a New Version

To trigger a new release, follow these steps:

1. Update the version in the package.json files:

   ```bash
   # For patch version (bug fixes)
   npm version patch --workspace=@eslamdevui/vue
   npm version patch --workspace=@eslamdevui/tailwindcss

   # For minor version (new features)
   npm version minor --workspace=@eslamdevui/vue
   npm version minor --workspace=@eslamdevui/tailwindcss

   # For major version (breaking changes)
   npm version major --workspace=@eslamdevui/vue
   npm version major --workspace=@eslamdevui/tailwindcss
   ```

2. Commit the changes with the correct commit message format:

   ```bash
   git commit -am "chore(release): bump version to x.y.z"
   ```

3. Push to the main branch:
   ```bash
   git push origin main
   ```

## Workflow Details

The publishing workflow (`publish-packages.yml`) will:

1. Trigger on pushes to the `main` branch that affect:

   - Files in `packages/@eslamdevui-vue/`
   - Files in `packages/@eslamdevui-tailwindcss/`
   - Package.json files of either package

2. Check if the commit message contains "chore(release):" to determine if a version bump occurred

3. If a version bump is detected:
   - Build both packages
   - Publish them to npm with provenance
   - Use the configured NPM token for authentication

## Troubleshooting

If the workflow fails:

1. Check the GitHub Actions logs for specific error messages
2. Verify that:
   - The NPM token is valid and has the correct permissions
   - The commit message follows the correct format
   - The version numbers in package.json files are correct
   - You have the necessary permissions in the npm organization

## Manual Publishing

If you need to publish manually:

```bash
# For Vue package
cd packages/@eslamdevui-vue
npm run build
npm publish

# For TailwindCSS package
cd packages/@eslamdevui-tailwindcss
npm run build
npm publish
```

## Security

- The workflow uses GitHub's OIDC (OpenID Connect) for secure authentication
- NPM tokens are stored as GitHub secrets and never exposed in logs
- Package provenance is enabled for additional security

## Support

If you encounter any issues with the publishing workflow, please:

1. Check the GitHub Actions logs
2. Review this documentation
3. Open an issue in the repository if the problem persists
