<script setup>
import { CalendarHeader, useForwardProps } from 'radix-vue'

const props = defineProps({
  as: { type: null, required: false },
  asChild: { type: Boolean, required: false },
  class: { type: null, required: false },
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <CalendarHeader
    :class="cn(
      'relative flex w-full items-center justify-between pt-1',
      props.class,
    )"
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarHeader>
</template>
