<script setup>
import { DrawerTrigger } from 'vaul-vue'
</script>

<template>
  <DrawerTrigger v-bind="$attrs">
    <slot />
  </DrawerTrigger>
</template>
