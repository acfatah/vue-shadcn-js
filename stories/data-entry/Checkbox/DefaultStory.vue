<script setup>
const props = defineProps({
  disabled: { type: Boolean, required: false },
})
</script>

<template>
  <div class="flex items-center space-x-2">
    <Checkbox id="terms" :disabled="props.disabled" />
    <label
      for="terms"
      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      Accept terms and conditions
    </label>
  </div>
</template>
