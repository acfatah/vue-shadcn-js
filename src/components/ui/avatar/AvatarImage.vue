<script setup>
import { AvatarImage } from 'radix-vue'

const props = defineProps({
  src: { type: String, required: true },

  as: { type: null, required: false },
  asChild: { type: Boolean, required: false },
})
</script>

<template>
  <AvatarImage v-bind="props" class="size-full object-cover" />
</template>
