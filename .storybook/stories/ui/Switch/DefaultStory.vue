<script setup>
import { useForwardProps } from 'radix-vue'

const forwardedProps = useForwardProps(useAttrs())
</script>

<template>
  <div class="flex items-center space-x-2">
    <Switch id="airplane-mode" v-bind="forwardedProps" />
    <Label for="airplane-mode">Airplane Mode</Label>
  </div>
</template>
