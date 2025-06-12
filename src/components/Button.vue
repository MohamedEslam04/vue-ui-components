<template>
  <button 
    :class="buttonClasses" 
    :disabled="disabled" 
    v-bind="$attrs"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false
})

const buttonClasses = computed(() => {
  const baseClasses = 'vue-btn'
  const variantClass = `vue-btn--${props.variant}`
  const sizeClass = `vue-btn--${props.size}`
  const disabledClass = props.disabled ? 'vue-btn--disabled' : ''
  
  return [baseClasses, variantClass, sizeClass, disabledClass].filter(Boolean).join(' ')
})
</script>

<style scoped>
.vue-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  border: 1px solid transparent;
  text-decoration: none;
  outline: none;
  font-family: inherit;
  line-height: 1.5;
}

.vue-btn:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Variants */
.vue-btn--primary {
  background-color: #3b82f6;
  color: white;
  border-color: #3b82f6;
}

.vue-btn--primary:hover:not(.vue-btn--disabled) {
  background-color: #2563eb;
  border-color: #2563eb;
}

.vue-btn--secondary {
  background-color: #f3f4f6;
  color: #1f2937;
  border-color: #f3f4f6;
}

.vue-btn--secondary:hover:not(.vue-btn--disabled) {
  background-color: #e5e7eb;
  border-color: #e5e7eb;
}

.vue-btn--outline {
  background-color: transparent;
  color: #374151;
  border-color: #d1d5db;
}

.vue-btn--outline:hover:not(.vue-btn--disabled) {
  background-color: #f9fafb;
  border-color: #9ca3af;
}

.vue-btn--ghost {
  background-color: transparent;
  color: #374151;
  border-color: transparent;
}

.vue-btn--ghost:hover:not(.vue-btn--disabled) {
  background-color: #f3f4f6;
}

/* Sizes */
.vue-btn--sm {
  padding: 6px 12px;
  font-size: 12px;
}

.vue-btn--md {
  padding: 8px 16px;
  font-size: 14px;
}

.vue-btn--lg {
  padding: 12px 24px;
  font-size: 16px;
}

/* Disabled state */
.vue-btn--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
</style>