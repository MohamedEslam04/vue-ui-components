<template>
  <div class="flex items-center justify-center space-x-12 p-12">
    <button>Previous</button>

    <PopoverGroup as="nav" ar-label="Mythical University" class="flex space-x-3">
      <Popover as="div" class="relative">
        <transition
          enter-active-class="transition ease-out duration-300 transform"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition ease-in duration-300 transform"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <PopoverOverlay class="fixed inset-0 z-20 bg-gray-500 bg-opacity-75"></PopoverOverlay>
        </transition>

        <PopoverButton
          class="focus:outline-hidden relative z-30 border-2 border-transparent bg-gray-300 px-3 py-2 focus:border-blue-900"
        >
          Normal</PopoverButton
        >
        <PopoverPanel class="absolute z-30 flex w-64 flex-col border-2 border-blue-900 bg-gray-100">
          <button
            v-for="(link, i) of links"
            :key="i"
            :hidden="i === 2"
            class="focus:outline-hidden border-2 border-transparent px-3 py-2 text-left hover:bg-gray-200 focus:border-blue-900 focus:bg-gray-200"
          >
            Normal - {{ link }}
          </button>
        </PopoverPanel>
      </Popover>

      <Popover as="div" class="relative">
        <PopoverButton
          class="focus:outline-hidden border-2 border-transparent bg-gray-300 px-3 py-2 focus:border-blue-900"
          >Focus
        </PopoverButton>
        <PopoverPanel
          focus
          class="absolute flex w-64 flex-col border-2 border-blue-900 bg-gray-100"
        >
          <button
            v-for="(link, i) of links"
            :key="i"
            class="focus:outline-hidden border-2 border-transparent px-3 py-2 text-left hover:bg-gray-200 focus:border-blue-900 focus:bg-gray-200"
          >
            Focus - {{ link }}
          </button>
        </PopoverPanel>
      </Popover>

      <Popover as="div" class="relative">
        <PopoverButton
          ref="trigger1"
          class="focus:outline-hidden border-2 border-transparent bg-gray-300 px-3 py-2 focus:border-blue-900"
          >Portal
        </PopoverButton>
        <Portal>
          <PopoverPanel
            ref="container1"
            class="flex w-64 flex-col border-2 border-blue-900 bg-gray-100"
          >
            <button
              v-for="(link, i) of links"
              :key="i"
              class="focus:outline-hidden border-2 border-transparent px-3 py-2 text-left hover:bg-gray-200 focus:border-blue-900 focus:bg-gray-200"
            >
              Portal - {{ link }}
            </button>
          </PopoverPanel>
        </Portal>
      </Popover>

      <Popover as="div" class="relative">
        <PopoverButton
          ref="trigger2"
          class="focus:outline-hidden border-2 border-transparent bg-gray-300 px-3 py-2 focus:border-blue-900"
          >Focus in portal</PopoverButton
        >
        <Portal>
          <PopoverPanel
            ref="container2"
            focus
            class="flex w-64 flex-col border-2 border-blue-900 bg-gray-100"
          >
            <button
              v-for="(link, i) of links"
              :key="i"
              class="focus:outline-hidden border-2 border-transparent px-3 py-2 text-left hover:bg-gray-200 focus:border-blue-900 focus:bg-gray-200"
            >
              Focus in Portal - {{ link }}
            </button>
          </PopoverPanel>
        </Portal>
      </Popover>
    </PopoverGroup>

    <button>Next</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import {
  Popover,
  PopoverOverlay,
  PopoverPanel,
  PopoverGroup,
  PopoverButton,
  Portal,
} from '@eslamdevui/vue'
import { usePopper } from '../../playground-utils/hooks/use-popper'

function html(templates) {
  return templates.join('')
}

export default {
  components: {
    Popover,
    PopoverPanel,
    PopoverOverlay,
    PopoverGroup,
    PopoverButton,
    Portal,
  },
  setup() {
    let links = ['First', 'Second', 'Third', 'Fourth']

    let [trigger1, container1] = usePopper({
      placement: 'bottom-start',
      strategy: 'fixed',
    })

    let [trigger2, container2] = usePopper({
      placement: 'bottom-start',
      strategy: 'fixed',
    })

    return { links, trigger1, container1, trigger2, container2 }
  },
}
</script>
