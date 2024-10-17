<script setup>
import { TooltipArrow } from 'radix-vue'
</script>

<template>
  <TooltipArrow
    v-bind="$attrs"
    :class="cn('fill-border-primary', $attrs.class)"
  />
</template>
