const { spawn } = require('child_process')
const path = require('path')

const outdir = './dist'
const name = 'eslamdevui'
const input = './src/index.ts'

const sharedOptions = ['--bundle', '--platform=browser', '--target=es2020', '--sourcemap']

const extraArgs = process.argv.slice(2)

const esbuildArgs = [
  input,
  '--format=esm',
  `--outfile=${outdir}/${name}.esm.js`,
  ...sharedOptions,
  ...extraArgs,
  '--watch',
]

const esbuild = spawn('npx', ['esbuild', ...esbuildArgs], { stdio: 'inherit', shell: true })

esbuild.on('close', (code) => {
  process.exit(code)
})
