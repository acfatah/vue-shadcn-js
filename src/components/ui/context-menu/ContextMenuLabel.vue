<script setup>
import { ContextMenuLabel } from 'radix-vue'

const props = defineProps({
  inset: { type: Boolean, required: false },

  as: { type: null, required: false },
  asChild: { type: Boolean, required: false },
  class: { type: null, required: false },
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ContextMenuLabel
    v-bind="delegatedProps"
    :class="cn(
      'px-2 py-1.5 text-sm font-semibold text-foreground',
      inset && 'pl-8',
      props.class,
    )"
  >
    <slot />
  </ContextMenuLabel>
</template>
