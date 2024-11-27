<script setup>
import { getLocalTimeZone, today } from '@internationalized/date'
import { RangeCalendar } from '~/components/ui/range-calendar'

const start = today(getLocalTimeZone())
const end = start.add({ days: 7 })

const value = ref({
  start,
  end,
})
</script>

<template>
  <RangeCalendar v-model="value" class="w-fit rounded-md border" />
</template>
