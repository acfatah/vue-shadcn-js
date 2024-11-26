<script setup>
import { Primitive, useForwardProps } from 'radix-vue'

const props = defineProps({
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
})
const forwardedProps = useForwardProps(props)
</script>

<template>
  <Primitive v-bind="forwardedProps">
    <slot>
      <MinusIcon />
    </slot>
  </Primitive>
</template>
