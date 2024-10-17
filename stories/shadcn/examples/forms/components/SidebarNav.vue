<script setup>
import routes from '../routes.js'
</script>

<template>
  <nav class="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
    <Button
      v-for="item in routes"
      :key="item.name"
      :href="item.path"
      variant="ghost"
      :class="cn(
        'w-full text-left justify-start',
        $route.path === item.path && 'bg-muted hover:bg-muted',
      )"
      @click.stop.prevent="$router.push(item.path)"
    >
      {{ item.name }}
    </Button>
  </nav>
</template>
