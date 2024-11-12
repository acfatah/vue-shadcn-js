<script setup>
import { ToastRoot, useForwardPropsEmits } from 'radix-vue'
import { toastVariants } from '.'

const props = defineProps({
  variant: { type: String, default: '' },
  onOpenChange: { type: Function, default: () => {} },

  as: { type: null, required: false },
  asChild: { type: Boolean, required: false },
  class: { type: String, default: '' },
})

const emits = defineEmits(['update:open'])

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <ToastRoot
    v-bind="forwarded"
    :class="cn(toastVariants({ variant: props.variant }), props.class)"
    @update:open="onOpenChange"
  >
    <slot />
  </ToastRoot>
</template>
