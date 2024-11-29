<script setup>
import { ToggleGroupRoot, useForwardPropsEmits } from 'radix-vue'

const props = defineProps({
  rovingFocus: { type: Boolean, required: false },
  loop: { type: Boolean, required: false },
  type: { type: null, required: false },

  disabled: { type: Boolean, required: false },
  modelValue: { type: null, required: false },
  defaultValue: { type: null, required: false },
  variant: { type: null, required: false },
  size: { type: null, required: false },

  /** @type { 'ltr' | 'rtl' } */
  dir: { type: String, required: false },

  /** @type { 'vertical' | 'horizontal' } */
  orientation: { type: String, required: false },

  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: null, required: false },
})
const emits = defineEmits(['update:modelValue'])

provide('toggleGroup', {
  variant: props.variant,
  size: props.size,
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ToggleGroupRoot
    v-bind="forwarded"
    :class="cn(
      'inline-flex w-min gap-1',
      props.class,
      props.orientation === 'vertical' && 'flex-col',
    )"
  >
    <slot />
  </ToggleGroupRoot>
</template>
