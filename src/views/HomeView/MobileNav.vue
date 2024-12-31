<script setup>
import { useHomeView, useTheme } from '.'

const { mainNav, githubUrl } = useHomeView()
const { toggleTheme, colorMode } = useTheme()

const open = ref(false)
</script>

<template>
  <Sheet v-model:open="open">
    <SheetTrigger as-child>
      <Button
        variant="ghost"
        class="mr-2 h-full shrink-0 px-2 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
      >
        <MenuIcon />
        <span class="sr-only">Toggle Menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left" class="pr-0">
      <Logo @click="open = false" />
      <ScrollArea class="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
        <div class="flex flex-col space-y-3">
          <a
            v-for="item in mainNav"
            :key="item.href"
            :href="item.href"
            @click="open = false"
          >
            {{ item.title }}
          </a>
          <a
            :href="githubUrl"
            @click="open = false"
          >
            Github
          </a>
          <a
            href="#"
            @click="() => {
              toggleTheme()
              open = false
            }"
          >
            {{ colorMode === 'dark' ? 'Use Light Mode' : 'Use Dark Mode' }}
          </a>
        </div>
      </ScrollArea>
    </SheetContent>
  </Sheet>
</template>
