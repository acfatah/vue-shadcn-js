<script setup>
import { VCalendar } from '~/components/ui/v-calendar'

const date = ref(new Date())
</script>

<template>
  <VCalendar v-model="date" class="w-fit rounded-md border" />
</template>
