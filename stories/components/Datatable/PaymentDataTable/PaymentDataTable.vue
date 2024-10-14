<script setup>
import payments from '../data/payments.json'

// See the `payment-columns.js` file to see how columns are defined.
import columns from './payment-columns.js'

const data = ref([])
const isLoading = ref(false)

async function getData() {
  isLoading.value = true
  // In a real implementation, the data may come from an API request.
  await new Promise(resolve => setTimeout(resolve, 1000))
  isLoading.value = false

  return payments
}

onMounted(async () => {
  data.value = await getData()
})
</script>

<template>
  <DataTable :columns="columns" :data="data" :loading="isLoading" />
</template>
