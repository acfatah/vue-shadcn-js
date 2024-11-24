<script setup>
import { MenubarLabel } from 'radix-vue'

const props = defineProps({
  inset: { type: Boolean, required: false },

  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: null, required: false },
})
</script>

<template>
  <MenubarLabel
    :class="cn(
      'px-2 py-1.5 text-sm font-semibold',
      inset && 'pl-8',
      props.class,
    )"
  >
    <slot />
  </MenubarLabel>
</template>
