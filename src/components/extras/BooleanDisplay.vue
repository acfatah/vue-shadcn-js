<script setup>
/**
 * Inspired by https://github.com/vueuse/vueuse/blob/main/packages/.vitepress/theme/components/BooleanDisplay.vue
 */

const props = defineProps({
  value: { default: false },
  true: { default: 'true' },
  false: { default: 'false' },
  trueClass: { default: '' },
  falseClass: { default: '' },
})
</script>

<template>
  <span :class="props.value ? props.trueClass : props.falseClass">
    {{ props.value ? props.true : props.false }}
  </span>
</template>
