<script setup>
import { Primitive } from 'radix-vue'

const props = defineProps({
  as: { type: null, required: false, default: 'a' },
  asChild: { type: Boolean, required: false },
  class: { type: null, required: false },
})
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn('transition-colors hover:text-foreground', props.class)"
  >
    <slot />
  </Primitive>
</template>
