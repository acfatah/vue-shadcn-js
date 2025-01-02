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
    class="h-[100px] w-[400px]"
    index="name"
    :data="data"
    :categories="['total']"
    :show-grid-line="false"
    :show-legend="false"
    :show-x-axis="false"
    :show-y-axis="false"
    :curve-type="CurveType.Linear"
  />
</template>
