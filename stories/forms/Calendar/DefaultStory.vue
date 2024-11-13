<script setup>
import { getLocalTimeZone, today } from '@internationalized/date'

const value = ref(today(getLocalTimeZone()))
</script>

<template>
  <Calendar v-model="value" weekday-format="short" class="w-fit rounded-md border" />
</template>
