<script setup>
import { UseDark } from '@vueuse/components'
</script>

<template>
  <UseDark v-slot="{ isDark, toggleDark }">
    <Button variant="outline" size="icon" @click="toggleDark()">
      <Iconify v-if="isDark" icon="radix-icons:sun" class="size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <Iconify v-else icon="radix-icons:moon" class="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    </Button>
  </UseDark>
</template>
