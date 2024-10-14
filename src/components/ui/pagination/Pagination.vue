<script setup>
import { PaginationRoot } from 'radix-vue'
</script>

<template>
  <PaginationRoot v-bind="$attrs">
    <slot />
  </PaginationRoot>
</template>
