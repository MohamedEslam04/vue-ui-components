import { useIsoMorphicEffect } from '../use-iso-morphic-effect'
import { useStore } from '../use-store'
import { overflows } from './overflow-store'

export function useDocumentOverflowLockedEffect(
  shouldBeLocked: boolean,
  doc: Document | null,
  meta: (meta: Record<string, any>) => Record<string, any> = () => ({ containers: [] })
) {
  let store = useStore(overflows)
  let entry = doc ? store.get(doc) : undefined
  let locked = entry ? entry.count > 0 : false

  useIsoMorphicEffect(() => {
    if (!doc || !shouldBeLocked) {
      return
    }

    // Prevent the document from scrolling
    overflows.dispatch('PUSH', doc, meta)

    // Allow document to scroll
    return () => overflows.dispatch('POP', doc, meta)
  }, [shouldBeLocked, doc])

  return locked
}
