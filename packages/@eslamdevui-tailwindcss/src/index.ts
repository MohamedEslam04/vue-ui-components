import plugin from 'tailwindcss/plugin.js'

interface Options {
  /**
   * The prefix used for the variants. This defaults to `ui`.
   *
   * Usage example:
   * ```html
   *  <div class="ui-open:underline"></div>
   *  ```
   **/
  prefix?: string
}

export default plugin.withOptions<Options>(({ prefix = 'ui' } = {}) => {
  return ({ addVariant }) => {
    for (let state of ['open', 'checked', 'selected', 'active', 'disabled']) {
      // TODO: Once `:has()` is properly supported, then we can switch to this version:
      // addVariant(`${prefix}-${state}`, [
      //   `&[data-eslamdevui-state~="${state}"]`,
      //   `:where([data-eslamdevui-state~="${state}"]):not(:has([data-eslamdevui-state])) &`,
      // ])

      // But for now, this will do:
      addVariant(`${prefix}-${state}`, [
        `&[data-eslamdevui-state~="${state}"]`,
        `:where([data-eslamdevui-state~="${state}"]) &`,
      ])

      addVariant(`${prefix}-not-${state}`, [
        `&[data-eslamdevui-state]:not([data-eslamdevui-state~="${state}"])`,
        `:where([data-eslamdevui-state]:not([data-eslamdevui-state~="${state}"])) &:not([data-eslamdevui-state])`,
      ])
    }

    addVariant(`${prefix}-focus-visible`, ':where([data-eslamdevui-focus-visible]) &:focus')
    addVariant(
      `${prefix}-not-focus-visible`,
      '&:focus:where(:not([data-eslamdevui-focus-visible] &))'
    )
  }
})
