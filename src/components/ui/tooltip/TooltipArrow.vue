<script setup>
import { TooltipArrow } from 'radix-vue'
import { cn } from '~/lib/utils'
</script>

<template>
  <TooltipArrow
    v-bind="$attrs"
    :class="cn('fill-border-primary', $attrs.class)"
  />
</template>
