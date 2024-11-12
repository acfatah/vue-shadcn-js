<script setup>
import { ToastViewport } from 'radix-vue'

const props = defineProps({
  hotkey: { type: Array, default: () => ['F8'] },
  label: {
    type: [String, Function],
    default: hotkey => `Notifications (${hotkey})`,
  },

  as: { type: null, required: false },
  asChild: { type: Boolean, required: false },
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ToastViewport v-bind="delegatedProps" :class="cn('fixed top-0 z-[100] gap-1 flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]', props.class)" />
</template>
