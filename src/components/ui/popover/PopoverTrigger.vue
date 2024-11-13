<script setup>
import { PopoverTrigger } from 'radix-vue'

const props = defineProps({
  as: { type: null, required: false },
  asChild: { type: Boolean, required: false },
})
</script>

<template>
  <PopoverTrigger v-bind="props">
    <slot />
  </PopoverTrigger>
</template>
