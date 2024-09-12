<script setup>
import { defineAsyncComponent } from 'vue'

const props = defineProps({
  name: { type: String, required: true },
  width: { type: String, default: '16' },
  height: { type: String, default: '16' },
})

const SvgIcon = defineAsyncComponent(async () =>
  import(`~/assets/icons/${props.name}.svg?component`),
)
</script>

<template>
  <SvgIcon v-if="props.name" :width="props.width" :height="props.height" />
</template>
