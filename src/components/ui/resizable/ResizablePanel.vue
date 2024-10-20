<script setup>
import { SplitterPanel } from 'radix-vue'
</script>

<template>
  <SplitterPanel v-bind="$attrs">
    <slot />
  </SplitterPanel>
</template>
