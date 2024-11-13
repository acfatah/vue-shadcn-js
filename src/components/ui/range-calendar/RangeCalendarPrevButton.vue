<script setup>
import { RangeCalendarPrev, useForwardProps } from 'radix-vue'
import { buttonVariants } from '~/components/ui/button'

const props = defineProps({
  step: { type: String, required: false },
  prevPage: { type: Function, required: false },

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
  <RangeCalendarPrev
    :class="cn(
      buttonVariants({ variant: 'outline' }),
      'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
      props.class,
    )"
    v-bind="forwardedProps"
  >
    <slot>
      <ChevronLeftIcon class="size-4" />
    </slot>
  </RangeCalendarPrev>
</template>
