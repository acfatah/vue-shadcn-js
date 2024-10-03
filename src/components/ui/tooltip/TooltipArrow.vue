<script setup>
import { TooltipArrow } from 'radix-vue'
import { cn } from '~/lib/utils'
</script>

<template>
  <component
    :is="TooltipArrow"
    v-bind="$attrs"
    :class="cn('fill-border', $attrs.class)"
  />
</template>
