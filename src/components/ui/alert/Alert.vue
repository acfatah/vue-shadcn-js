<script setup>
import { alertVariants } from '.'

const props = defineProps({
  variant: { type: null, required: false },
  class: { type: null, required: false },
})
</script>

<template>
  <div :class="cn(alertVariants({ variant }), props.class)" role="alert">
    <slot />
  </div>
</template>
