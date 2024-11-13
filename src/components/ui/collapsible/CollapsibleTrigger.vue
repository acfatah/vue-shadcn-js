<script setup>
import { CollapsibleTrigger } from 'radix-vue'

const props = defineProps({
  as: { type: null, required: false },
  asChild: { type: Boolean, required: false },
})
</script>

<template>
  <CollapsibleTrigger v-bind="props">
    <slot />
  </CollapsibleTrigger>
</template>
