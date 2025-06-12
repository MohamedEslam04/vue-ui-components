<template>
  <div class="app">
    <div class="container">
      <h1 class="title">Vue Directives Kit Demo</h1>

      <section class="section">
        <h2 class="section-title">Button Variants</h2>
        <div class="button-group">
          <Button>Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
        </div>
      </section>

      <section class="section">
        <h2 class="section-title">Button Sizes</h2>
        <div class="button-group">
          <Button size="sm">Small Button</Button>
          <Button size="md">Medium Button</Button>
          <Button size="lg">Large Button</Button>
        </div>
      </section>

      <section class="section">
        <h2 class="section-title">Disabled State</h2>
        <div class="button-group">
          <Button disabled>Disabled Button</Button>
          <Button variant="secondary" disabled>Disabled Secondary</Button>
        </div>
      </section>

      <section class="section">
        <h2 class="section-title">Directive Examples</h2>
        <div class="directive-examples">
          <div class="example">
            <h3>Copy Directive</h3>
            <Button v-copy="'Hello World!'" variant="outline">
              Click to Copy "Hello World!"
            </Button>
          </div>

          <div class="example">
            <h3>Tooltip Directive</h3>
            <Button v-tooltip="'This is a helpful tooltip'" variant="secondary">
              Hover for Tooltip
            </Button>
          </div>

          <div class="example">
            <h3>Ripple Effect</h3>
            <Button v-ripple variant="primary">
              Click for Ripple Effect
            </Button>
          </div>

          <div class="example">
            <h3>Focus Directive</h3>
            <input v-focus type="text" placeholder="Auto-focused input" class="input" />
          </div>

          <div class="example">
            <h3>Uppercase Directive</h3>
            <input v-uppercase type="text" placeholder="Type in lowercase..." class="input" />
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
  vUppercase
} from '@/directives'
</script>

<style scoped>
.app {
  min-height: 100vh;
  background-color: #f8fafc;
  padding: 32px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.container {
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.title {
  font-size: 32px;
  font-weight: 700;
  color: #1f2937;
  text-align: center;
  margin: 0;
}

.section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.section-title {
  font-size: 20px;
  font-weight: 600;
  color: #374151;
  margin: 0;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
}

.directive-examples {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.example {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.example h3 {
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}

.input {
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  transition: border-color 0.2s ease-in-out;
}

.input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}
</style>
</style>