<script setup>
const data = [
  {
    name: 'Jan',
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  // ...
]
</script>

<template>
  <BarChart
    :data="data"
    :categories="['total']"
    index="name"
    :rounded-corners="4"
  />
</template>
