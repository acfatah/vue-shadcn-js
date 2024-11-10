<script setup>
import { useIntersectionObserver } from '@vueuse/core'

const props = defineProps({
  src: { type: String, required: true },
})

const emit = defineEmits(['loaded'])
const imageContainer = ref(null)
const isVisible = ref(false)
const { src, ...delegatedAttrs } = useAttrs()

useIntersectionObserver(imageContainer, ([{ isIntersecting }]) => {
  if (!isVisible.value && isIntersecting)
    isVisible.value = true
})

watchEffect(() => {
  emit('loaded', isVisible.value)
})
</script>

<template>
  <div ref="imageContainer" class="min-h-6 min-w-6">
    <UseImage v-if="isVisible" :src="props.src" v-bind="delegatedAttrs">
      <template #loading>
        <slot name="loading" />
      </template>
      <template #error>
        <slot name="error" />
      </template>
    </UseImage>
  </div>
</template>
