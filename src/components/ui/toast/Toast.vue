<script setup>
import { ToastRoot, useForwardPropsEmits } from 'radix-vue'
import { cn } from '~/lib/utils'
import { toastVariants } from '.'

const props = defineProps({
  class: { type: String, default: '' },
  variant: { type: String, default: '' },
  onOpenChange: { type: Function, default: () => {} },
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
