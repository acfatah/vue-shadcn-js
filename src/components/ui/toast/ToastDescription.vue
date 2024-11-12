<script setup>
import { ToastDescription } from 'radix-vue'

const props = defineProps({
  as: { type: null, required: false },
  asChild: { type: Boolean, required: false },
  class: { type: String, default: '' },
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ToastDescription :class="cn('text-sm opacity-90', props.class)" v-bind="delegatedProps">
    <slot />
  </ToastDescription>
</template>
