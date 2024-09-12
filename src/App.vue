<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

import { useTheme } from '~/components/composables/use-theme.js'
import BlankLayout from '~/components/layouts/BlankLayout.vue'

const route = useRoute()

onMounted(() => {
  useTheme()
})
</script>

<template>
  <component :is="route.meta.layout || BlankLayout">
    <router-view />
  </component>
</template>
