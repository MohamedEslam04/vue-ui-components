'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./eslamdevui.prod.cjs')
} else {
  module.exports = require('./eslamdevui.dev.cjs')
}
