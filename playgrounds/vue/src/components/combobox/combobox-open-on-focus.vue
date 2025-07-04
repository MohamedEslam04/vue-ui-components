<script>
import { ref, defineComponent, computed, onMounted, watch } from 'vue'
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxLabel,
  ComboboxOption,
  ComboboxOptions,
} from '@eslamdevui/vue'

let everybody = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
  { id: 7, name: 'Caroline Schultz' },
  { id: 8, name: 'Mason Heaney' },
  { id: 9, name: 'Claudie Smitham' },
  { id: 10, name: 'Emil Schaefer' },
]

export default defineComponent({
  components: {
    Combobox,
    ComboboxButton,
    ComboboxInput,
    ComboboxLabel,
    ComboboxOption,
    ComboboxOptions,
  },
  setup() {
    let query = ref('')
    let activePerson = ref(everybody[2]) // everybody[Math.floor(Math.random() * everybody.length)]
    let filteredPeople = computed(() => {
      return query.value === ''
        ? everybody
        : everybody.filter((person) => {
            return person.name.toLowerCase().includes(query.value.toLowerCase())
          })
    })

    // Choose a random person on mount
    onMounted(() => {
      activePerson.value = everybody[Math.floor(Math.random() * everybody.length)]
    })

    watch(activePerson, () => {
      query.value = ''
    })

    return {
      query,
      activePerson,
      filteredPeople,
    }
  },
})
</script>

<template>
  <div class="flex h-full w-screen justify-center bg-gray-50 p-12">
    <div class="mx-auto w-full max-w-xs">
      <div class="py-8 font-mono text-xs">
        Selected person: {{ activePerson?.name ?? 'Nobody yet' }}
      </div>
      <div class="space-y-1">
        <Combobox v-model="activePerson" as="div" immediate>
          <ComboboxLabel class="block text-sm font-medium leading-5 text-gray-700">
            Assigned to
          </ComboboxLabel>

          <div class="relative">
            <span class="shadow-xs relative inline-flex flex-row overflow-hidden rounded-md border">
              <ComboboxInput
                @change="query = $event.target.value"
                :displayValue="(person) => person?.name ?? ''"
                class="outline-hidden border-none px-3 py-1"
              />
              <ComboboxButton
                class="focus:outline-hidden cursor-default border-l bg-gray-100 px-1 text-indigo-600"
              >
                <span class="pointer-events-none flex items-center px-2">
                  <svg
                    class="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </ComboboxButton>
            </span>

            <div class="absolute mt-1 w-full rounded-md bg-white shadow-lg">
              <ComboboxOptions
                class="shadow-2xs focus:outline-hidden max-h-60 overflow-auto rounded-md py-1 text-base leading-6 sm:text-sm sm:leading-5"
              >
                <ComboboxOption
                  v-for="person in filteredPeople"
                  :key="person.id"
                  :value="person"
                  v-slot="{ active, selected }"
                >
                  <div
                    :class="[
                      'focus:outline-hidden relative cursor-default select-none py-2 pl-3 pr-9',
                      active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                    ]"
                  >
                    <span :class="['block truncate', selected ? 'font-semibold' : 'font-normal']">
                      {{ person.name }}
                    </span>
                    <span
                      v-if="selected"
                      :class="[
                        'absolute inset-y-0 right-0 flex items-center pr-4',
                        active ? 'text-white' : 'text-indigo-600',
                      ]"
                    >
                      <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                </ComboboxOption>
              </ComboboxOptions>
            </div>
          </div>
        </Combobox>
      </div>
    </div>
  </div>
</template>
