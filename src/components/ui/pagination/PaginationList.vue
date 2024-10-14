<script setup>
import { PaginationList } from 'radix-vue'
</script>

<template>
  <PaginationList v-bind="$attrs">
    <slot />
  </PaginationList>
</template>
