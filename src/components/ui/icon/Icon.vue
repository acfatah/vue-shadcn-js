<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <Icon v-bind="$attrs" :class="cn('size-6', $attrs.class)" />
</template>
