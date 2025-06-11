<template>
  <div class="min-h-screen bg-gray-50 p-8">
    <div class="max-w-4xl mx-auto space-y-8">
      <h1 class="text-3xl font-bold text-gray-900">Vue UI Components</h1>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold text-gray-800">Button Variants</h2>
        <div class="flex flex-wrap gap-4">
          <Button>Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold text-gray-800">Button Sizes</h2>
        <div class="flex flex-wrap gap-4 items-center">
          <Button size="sm">Small Button</Button>
          <Button size="md">Medium Button</Button>
          <Button size="lg">Large Button</Button>
        </div>
      </div>

      <div class="space-y-4">
        <h2 class="text-xl font-semibold text-gray-800">Disabled State</h2>
        <div class="flex flex-wrap gap-4">
          <Button disabled>Disabled Button</Button>
          <Button variant="secondary" disabled>Disabled Secondary</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from '@/components/Button.vue'
</script>

<style>
@import '@/assets/main.css';
</style>