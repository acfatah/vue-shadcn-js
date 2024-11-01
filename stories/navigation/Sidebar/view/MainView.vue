<template>
  <main class="flex flex-1 flex-col gap-4 p-4 pt-0">
    <div class="grid auto-rows-min gap-4 md:grid-cols-4">
      <Placeholder v-for="i in 4" :key="i" class="aspect-video rounded-xl" />
    </div>
    <div class="grid auto-rows-min gap-4 md:grid-cols-3">
      <Placeholder v-for="i in 3" :key="i" class="aspect-video rounded-xl" />
    </div>
    <div class="grid auto-rows-min gap-4 md:grid-cols-2">
      <Placeholder v-for="i in 2" :key="i" class="aspect-video rounded-xl" />
    </div>
    <Placeholder class="aspect-video rounded-xl md:min-h-[200px] " />
  </main>
</template>
