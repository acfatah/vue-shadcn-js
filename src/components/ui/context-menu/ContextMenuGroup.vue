<script setup>
import { ContextMenuGroup } from 'radix-vue'

const props = defineProps({
  as: { type: null, required: false },
  asChild: { type: Boolean, required: false },
})
</script>

<template>
  <ContextMenuGroup v-bind="props">
    <slot />
  </ContextMenuGroup>
</template>
