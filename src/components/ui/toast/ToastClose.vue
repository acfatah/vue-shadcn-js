<script setup>
import { ToastClose } from 'radix-vue'

const props = defineProps({
  altText: { type: String, default: '' },

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
  <ToastClose v-bind="delegatedProps" :class="cn('absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600', props.class)">
    <XIcon class="size-4" />
  </ToastClose>
</template>
