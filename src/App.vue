<script setup>
import { useTheme } from '~/components/composables/use-theme.js'
import BlankLayout from '~/components/layouts/BlankLayout.vue'

const route = useRoute()

onMounted(() => {
  useTheme()
})
</script>

<template>
  <Teleport to="body">
    <Toaster />
  </Teleport>
  <component :is="route.meta.layout || BlankLayout" />
</template>
