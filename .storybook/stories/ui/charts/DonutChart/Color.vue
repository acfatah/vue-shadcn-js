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
  <DonutChart
    index="name"
    category="total"
    :data="data"
    :colors="['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple']"
    :value-formatter="(tick, _i) => {
      return typeof tick === 'number'
        ? `'$ ${new Intl.NumberFormat('us').format(tick).toString()}`
        : ''
    }"
  />
</template>
