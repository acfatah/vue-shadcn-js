<script setup>
const data = [
  {
    name: 'Jan',
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500,
  },
  // ...
]
</script>

<template>
  <AreaChart
    :data="data"
    index="name"
    :categories="['total', 'predicted']"
  />
</template>
