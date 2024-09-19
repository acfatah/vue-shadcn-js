<script setup>
import { useTheme } from '~/components/composables/use-theme.js'
import { useCounterStore } from '~/stores/counter'

defineProps({
  msg: String,
})

const counterStore = useCounterStore()
const { colorMode, toggleTheme } = useTheme()
</script>

<template>
  <!-- Dark mode switcher example -->
  <Teleport to="body">
    <button class="fixed right-4 top-4 rounded-full border bg-background p-2" @click="toggleTheme">
      {{ colorMode === 'dark' ? '🌞' : '🌙' }}
    </button>
  </Teleport>
  <div class="container">
    <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {{ msg }}
    </h1>

    <div class="mt-6">
      <Button @click="counterStore.increment()">
        count is {{ counterStore.count }}
      </Button>

      <p class="mt-2">
        Edit
        <code>components/HelloWorld.vue</code> to test HMR
      </p>
    </div>

    <p class="mt-4">
      Check out
      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite starter
    </p>

    <p class="mt-2">
      Learn more about IDE Support for Vue in the
      <a
        href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
        target="_blank"
      >Vue Docs Scaling up Guide</a>.
    </p>
    <p class="text-sm text-muted-foreground">
      Click on the Vite and Vue logos to learn more
    </p>
  </div>
</template>
