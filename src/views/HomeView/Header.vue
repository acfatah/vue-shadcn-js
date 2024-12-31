<script setup>
import { Moon as MoonIcon, Sun as SunIcon } from 'lucide-vue-next'
import { useHomeView } from '.'
import MobileNav from './MobileNav.vue'

const route = useRoute()
const {
  githubUrl,
  mainNav,
  colorMode,
} = useHomeView()
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-lg">
    <div class="container flex h-14 max-w-screen-2xl">
      <div class="relative mr-4 hidden w-full md:mr-1 md:inline-flex">
        <Logo />

        <nav class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-6 text-sm font-medium max-lg:space-x-4">
          <a
            v-for="item in mainNav"
            :key="item.title"
            :href="item.href"
            :target="item.external ? '_blank' : ''"
            class="text-foreground/60 transition-colors hover:text-foreground/80"
            :class="{
              'font-semibold !text-foreground': route.hash === item.href,
            }"
          >{{ item.title }}</a>
        </nav>

        <div class="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav class="flex items-center gap-2">
            <div class="flex">
              <a
                :href="githubUrl"
                :class="buttonVariants({ variant: 'ghost', size: 'icon' })"
              >
                <Iconify icon="octicon:mark-github-16" class="size-5" />
              </a>

              <Button
                class="size-9"
                aria-label="Toggle dark mode"
                variant="ghost"
                size="icon"
                @click="toggleTheme()"
              >
                <component
                  :is="colorMode === 'dark' ? SunIcon : MoonIcon"
                  class="size-5 text-foreground"
                />
              </Button>
            </div>
          </nav>
        </div>
      </div>

      <MobileNav />
    </div>
  </header>
</template>
