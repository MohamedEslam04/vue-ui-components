<template>
  <div class="flex h-full w-screen justify-center bg-gray-50 p-12">
    <div class="mt-64 inline-block text-left">
      <Menu>
        <span class="shadow-xs inline-flex rounded-md">
          <MenuButton
            ref="reference"
            class="focus:shadow-outline-blue focus:outline-hidden inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out hover:text-gray-500 focus:border-blue-300 active:bg-gray-50 active:text-gray-800"
          >
            <span>Options</span>
            <svg class="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </MenuButton>
        </span>

        <teleport to="body">
          <MenuItems
            ref="floating"
            :style="floatingStyles"
            class="outline-hidden absolute right-0 w-56 origin-top-right divide-y divide-gray-100 rounded-md border border-gray-200 bg-white shadow-lg"
          >
            <div class="px-4 py-3">
              <p class="text-sm leading-5">Signed in as</p>
              <p class="truncate text-sm font-medium leading-5 text-gray-900">tom@example.com</p>
            </div>

            <div class="py-1">
              <MenuItem as="a" href="#account-settings" :className="resolveClass">
                Account settings
              </MenuItem>
              <MenuItem v-slot="data">
                <a href="#support" :class="resolveClass(data)">Support</a>
              </MenuItem>
              <MenuItem as="a" disabled href="#new-feature" :className="resolveClass">
                New feature (soon)
              </MenuItem>
              <MenuItem as="a" href="#license" :className="resolveClass">License</MenuItem>
            </div>
            <div class="py-1">
              <MenuItem as="a" href="#sign-out" :className="resolveClass">Sign out</MenuItem>
            </div>
          </MenuItems>
        </teleport>
      </Menu>
    </div>
  </div>
</template>

<script>
import { defineComponent, h, ref, onMounted, watchEffect, watch, computed } from 'vue'
import { Menu, MenuButton, MenuItems, MenuItem } from '@eslamdevui/vue'
import { useFloating, offset } from '@floating-ui/vue'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default {
  components: { Menu, MenuButton, MenuItems, MenuItem },
  setup(props, context) {
    let reference = ref(null)
    let floating = ref(null)

    let { floatingStyles } = useFloating(
      computed(() => reference.value?.el),
      computed(() => floating.value?.el),
      {
        placement: 'bottom-end',
        strategy: 'fixed',
        middleware: [offset(10)],
      }
    )

    function resolveClass({ active, disabled }) {
      return classNames(
        'flex justify-between w-full px-4 py-2 text-sm leading-5 text-left',
        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
        disabled && 'cursor-not-allowed opacity-50'
      )
    }

    return {
      reference,
      floating,
      floatingStyles,
      resolveClass,
    }
  },
}
</script>
