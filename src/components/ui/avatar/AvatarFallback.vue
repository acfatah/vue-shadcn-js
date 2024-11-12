<script setup>
import { AvatarFallback } from 'radix-vue'

const props = defineProps({
  delayMs: { type: Number, required: false },

  as: { type: null, required: false },
  asChild: { type: Boolean, required: false },
})
</script>

<template>
  <AvatarFallback v-bind="props">
    <slot />
  </AvatarFallback>
</template>
