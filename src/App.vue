<template>
  <div class="min-h-screen bg-gray-50 p-8">
    <div class="max-w-4xl mx-auto space-y-8">
      <h1 class="text-3xl font-bold text-gray-900 text-center">Vue Directives Kit Demo</h1>

      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-gray-800">Button Variants</h2>
        <div class="flex flex-wrap gap-4">
          <Button>Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-gray-800">Button Sizes</h2>
        <div class="flex flex-wrap gap-4 items-center">
          <Button size="sm">Small Button</Button>
          <Button size="md">Medium Button</Button>
          <Button size="lg">Large Button</Button>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-gray-800">Disabled State</h2>
        <div class="flex flex-wrap gap-4">
          <Button disabled>Disabled Button</Button>
          <Button variant="secondary" disabled>Disabled Secondary</Button>
        </div>
      </section>

      <section class="space-y-6">
        <h2 class="text-xl font-semibold text-gray-800">Directive Examples</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div class="bg-white p-6 rounded-lg shadow-sm border">
            <h3 class="text-lg font-medium text-gray-900 mb-3">Copy Directive</h3>
            <Button v-copy="'Hello World!'" variant="outline" class="w-full">
              Click to Copy "Hello World!"
            </Button>
            <p class="text-sm text-gray-600 mt-2">Copies text to clipboard when clicked</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-sm border">
            <h3 class="text-lg font-medium text-gray-900 mb-3">Tooltip Directive</h3>
            <Button v-tooltip="'This is a helpful tooltip'" variant="secondary" class="w-full">
              Hover for Tooltip
            </Button>
            <p class="text-sm text-gray-600 mt-2">Shows tooltip on hover</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-sm border">
            <h3 class="text-lg font-medium text-gray-900 mb-3">Ripple Effect</h3>
            <Button v-ripple variant="primary" class="w-full">
              Click for Ripple Effect
            </Button>
            <p class="text-sm text-gray-600 mt-2">Material Design ripple animation</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-sm border">
            <h3 class="text-lg font-medium text-gray-900 mb-3">Focus Directive</h3>
            <input 
              v-focus 
              type="text" 
              placeholder="Auto-focused input" 
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p class="text-sm text-gray-600 mt-2">Automatically focuses on mount</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-sm border">
            <h3 class="text-lg font-medium text-gray-900 mb-3">Uppercase Directive</h3>
            <input 
              v-uppercase 
              type="text" 
              placeholder="Type in lowercase..." 
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p class="text-sm text-gray-600 mt-2">Converts input to uppercase</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-sm border">
            <h3 class="text-lg font-medium text-gray-900 mb-3">Debounce Directive</h3>
            <input 
              v-debounce="handleSearch"
              type="text" 
              placeholder="Search with debounce..." 
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p class="text-sm text-gray-600 mt-2">Debounces input events (300ms)</p>
          </div>

        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from '@/components/Button.vue'
import {
  vCopy,
  vTooltip,
  vRipple,
  vFocus,
  vUppercase,
  vDebounce
} from '@/directives'

const handleSearch = (e: Event) => {
  const target = e.target as HTMLInputElement
  console.log('Searching for:', target.value)
}
</script>