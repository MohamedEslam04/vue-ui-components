import { onUnmounted, shallowRef } from 'vue'
import type { Store } from '../utils/store'

export function useStore<T>(store: Store<T, any>): ReturnType<typeof shallowRef<T>> {
  let state = shallowRef(store.getSnapshot())

  onUnmounted(
    store.subscribe(() => {
      state.value = store.getSnapshot()
    })
  )

  return state
}
