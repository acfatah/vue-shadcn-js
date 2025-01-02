<script setup>
const progress = ref(0)
const sleep = ms => new Promise(r => setTimeout(r, ms))

function increment() {
  const random = Math.min(Math.floor(Math.random() * 30) + 1, 100 - progress.value)

  progress.value = Math.min(progress.value + random, 100)
}

onMounted(async () => {
  while (progress.value < 100) {
    await sleep(Math.random() * 1000)
    increment()
  }

  progress.value = 100
})
</script>

<template>
  <RadialProgress v-model="progress" />
</template>
