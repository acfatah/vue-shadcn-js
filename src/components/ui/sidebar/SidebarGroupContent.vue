<script setup>
const props = defineProps({
  class: { type: null, required: false },
})
</script>

<template>
  <div
    data-sidebar="group-content"
    :class="cn('w-full text-sm', props.class)"
  >
    <slot />
  </div>
</template>
