<script setup>
import { ClipboardCheck, ClipboardCopy } from 'lucide-vue-next'

const props = defineProps({
  timeout: { type: Number, required: false, default: 1000 },
  class: { type: String, required: false },
})

const copied = ref(false)

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

function handleClick() {
  copied.value = true

  setTimeout(() => {
    copied.value = false
  }, props.timeout)
}
</script>

<template>
  <component
    v-bind="delegatedProps"
    :is="copied ? ClipboardCheck : ClipboardCopy"
    :class="cn('size-5 cursor-pointer', props.class, { 'cursor-default': copied })"
    @click="handleClick"
  />
</template>
