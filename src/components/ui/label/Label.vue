<script setup>
import { Label, useForwardProps } from 'radix-vue'

const props = defineProps({
  for: { type: String, required: false },

  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: null, required: false },
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <Label
    v-bind="forwardedProps"
    :class="cn(
      'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
      props.class,
    )"
  >
    <slot />
  </Label>
</template>
