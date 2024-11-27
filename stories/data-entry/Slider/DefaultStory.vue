<script setup lang="ts">
const modelValue = ref([50])
</script>

<template>
  <Slider
    v-model="modelValue"
    :max="100"
    :step="1"
    :class="cn('w-3/5', $attrs.class ?? '')"
  />
</template>
