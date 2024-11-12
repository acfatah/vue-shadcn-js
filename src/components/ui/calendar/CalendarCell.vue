<script setup>
import { CalendarCell, useForwardProps } from 'radix-vue'

const props = defineProps({
  date: { type: null, required: true },

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
  <CalendarCell
    :class="cn(
      'relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([data-selected])]:rounded-md [&:has([data-selected])]:bg-accent [&:has([data-selected][data-outside-view])]:bg-accent/50',
      props.class,
    )"
    v-bind="forwardedProps"
  >
    <slot />
  </CalendarCell>
</template>
