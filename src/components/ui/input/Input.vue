<script setup>
import { useMutationObserver, useVModel } from '@vueuse/core'

const props = defineProps({
  defaultValue: { type: [String, Number], required: false },
  modelValue: { type: [String, Number], required: false },
  class: { type: null, required: false },
})

const emits = defineEmits(['update:modelValue'])
const input = ref(null)
const invalid = ref(false)
const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})

useMutationObserver(
  input,
  (mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'aria-invalid') {
        invalid.value = input.value.getAttribute('aria-invalid') === 'true'
      }
    }
  },
  { attributes: true },
)
</script>

<template>
  <input
    ref="input"
    v-model="modelValue"
    :class="cn(
      'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
      props.class,
      { 'border-destructive text-destructive placeholder:text-destructive': invalid },
    )"
  >
</template>
