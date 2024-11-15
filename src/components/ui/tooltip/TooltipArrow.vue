<script setup>
import { TooltipArrow } from 'radix-vue'
</script>

<template>
  <TooltipArrow
    v-bind="$attrs"
    :class="cn('fill-primary', $attrs.class)"
  >
    <slot />
  </TooltipArrow>
</template>
