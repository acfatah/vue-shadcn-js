<script setup>
defineProps({
  required: { type: Boolean, required: false },
})
</script>

<template>
  <FormLabel>
    <slot />
    <span v-if="required" class="text-destructive"> *</span>
  </FormLabel>
</template>
