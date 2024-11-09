<script setup>
import { Icon } from '@iconify/vue'

const { class: classAttrs, ...attrs } = useAttrs()
</script>

<template>
  <Icon v-bind="attrs" :class="cn('size-6', classAttrs)" />
</template>
