<script setup>
import { DrawerPortal } from 'vaul-vue'
</script>

<template>
  <DrawerPortal v-bind="$attrs">
    <slot />
  </DrawerPortal>
</template>
