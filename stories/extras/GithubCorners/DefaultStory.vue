<script setup>
function click() {
  // eslint-disable-next-line no-alert
  alert('should open url prop when clicked')
}
</script>

<template>
  <GithubCorner @click="click" />
</template>
