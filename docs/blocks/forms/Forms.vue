<script setup>
import FormsLayout from './layouts/FormsLayout.vue'
</script>

<template>
  <FormsLayout />
  <Teleport to="body">
    <Toaster />
  </Teleport>
</template>
