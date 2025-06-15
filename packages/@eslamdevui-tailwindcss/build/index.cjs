'use strict'

let plugin =
  process.env.NODE_ENV === 'production'
    ? require('./eslamdevui.prod.cjs')
    : require('./eslamdevui.dev.cjs')

module.exports = (plugin.__esModule ? plugin : { default: plugin }).default
