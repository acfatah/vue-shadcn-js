<script setup>
import { RangeCalendarHeadCell, useForwardProps } from 'radix-vue'

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
  <RangeCalendarHeadCell
    :class="cn(
      'w-8 rounded-md text-[0.8rem] font-normal text-muted-foreground',
      props.class,
    )"
    v-bind="forwardedProps"
  >
    <slot />
  </RangeCalendarHeadCell>
</template>
