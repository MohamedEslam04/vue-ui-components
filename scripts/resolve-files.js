#!/usr/bin/env node
const path = require('path')
const fastGlob = require('fast-glob')

let parts = process.argv.slice(2)
let [args, flags] = parts.reduce(
  ([args, flags], part) => {
    if (part.startsWith('--')) {
      const [key, value] = part.slice(2).split('=')
      flags[key] = value
    } else {
      args.push(part)
    }
    return [args, flags]
  },
  [[], {}]
)

flags.ignore = flags.ignore ?? ''
flags.ignore = flags.ignore.split(',').filter(Boolean)

// Ensure paths are properly resolved
const resolvedArgs = args.map((arg) => path.resolve(process.cwd(), arg))

console.log(
  fastGlob
    .sync(resolvedArgs.join(''))
    .filter((file) => {
      for (let ignore of flags.ignore) {
        if (file.includes(ignore)) {
          return false
        }
      }
      return true
    })
    .map((file) => path.normalize(file))
    .join('\n')
)
