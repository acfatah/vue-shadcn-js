<script setup>
import { ToastProvider } from 'radix-vue'

const props = defineProps({
  label: { type: String, default: 'Notification' },
  duration: { type: Number, default: 5000 },
  swipeDirection: { type: String, default: 'right' },
  swipeThreshold: { type: Number, default: 50 },

  as: { type: null, required: false },
  asChild: { type: Boolean, required: false },
})
</script>

<template>
  <ToastProvider v-bind="props">
    <slot />
  </ToastProvider>
</template>
