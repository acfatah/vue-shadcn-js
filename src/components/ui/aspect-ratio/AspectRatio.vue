<script setup>
import { AspectRatio } from 'radix-vue'

const props = defineProps({
  ratio: { type: Number, required: false },

  as: { type: null, required: false },
  asChild: { type: Boolean, required: false },
})
</script>

<template>
  <AspectRatio v-bind="props">
    <slot />
  </AspectRatio>
</template>
