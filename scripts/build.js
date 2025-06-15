const { execSync } = require('child_process')
const path = require('path')
const fs = require('fs')
const glob = require('fast-glob')

const SRC = './src'
const DST = './dist'
const name = 'eslamdevui'
const input = `./${SRC}/index.ts`

// Shared options for esbuild
const sharedOptions = ['--platform=browser', '--target=es2019']

// Find all TypeScript files
const findFiles = async (dir, pattern) => {
  const files = await glob(`${dir}/${pattern}`, {
    ignore: ['**/*.test.*', '**/__mocks__/**'],
    absolute: false,
  })
  return files
}

// Build process
async function build() {
  try {
    // Create dist directory if it doesn't exist
    if (!fs.existsSync(DST)) {
      fs.mkdirSync(DST, { recursive: true })
    }

    // Get all input files
    const inputFiles = await findFiles(SRC, '**/*.{ts,tsx}')

    // ESM builds
    execSync(
      `npx esbuild ${inputFiles.join(
        ' '
      )} --format=esm --outdir=${DST} --outbase=${SRC} --minify --pure:React.createElement --define:process.env.TEST_BYPASS_TRACKED_POINTER="false" --define:__DEV__="false" ${sharedOptions.join(
        ' '
      )}`
    )
    execSync(
      `npx esbuild ${input} --format=esm --outfile=${DST}/${name}.esm.js --outbase=${SRC} --minify --pure:React.createElement --define:process.env.TEST_BYPASS_TRACKED_POINTER="false" --define:__DEV__="false" ${sharedOptions.join(
        ' '
      )}`
    )

    // Common JS builds
    execSync(
      `npx esbuild ${input} --format=cjs --outfile=${DST}/${name}.prod.cjs --minify --bundle --pure:React.createElement --define:process.env.TEST_BYPASS_TRACKED_POINTER="false" --define:__DEV__="false" ${sharedOptions.join(
        ' '
      )} ${process.argv.slice(2).join(' ')}`
    )
    execSync(
      `npx esbuild ${input} --format=cjs --outfile=${DST}/${name}.dev.cjs --bundle --pure:React.createElement --define:process.env.TEST_BYPASS_TRACKED_POINTER="false" --define:__DEV__="true" ${sharedOptions.join(
        ' '
      )} ${process.argv.slice(2).join(' ')}`
    )

    // Generate types
    execSync('tsc --emitDeclarationOnly --outDir dist')

    // Copy CJS types
    fs.copyFileSync(path.join(DST, 'index.d.ts'), path.join(DST, 'index.d.cts'))

    // Copy build files
    if (fs.existsSync('./build')) {
      fs.cpSync('./build', DST, { recursive: true })
    }

    console.log('Build completed successfully!')
  } catch (error) {
    console.error('Build failed:', error)
    process.exit(1)
  }
}

build()
