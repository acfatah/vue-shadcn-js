<script setup>
import { DrawerClose } from 'vaul-vue'
</script>

<template>
  <DrawerClose v-bind="$attrs">
    <slot />
  </DrawerClose>
</template>
