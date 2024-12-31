<script setup>
import { Balancer } from 'vue-wrap-balancer'
import {
  githubUrl,
  mainNav,
  provideHomeViewContext,
  storybookUrl,
} from '.'
import Footer from './Footer.vue'
import Header from './Header.vue'

provideHomeViewContext({
  storybookUrl,
  githubUrl,
  mainNav,
})
</script>

<template>
  <Header />

  <div class="container">
    <main class="mx-auto min-h-min pb-12">
      <section class="mx-auto flex h-[calc(100vh-3.5rem)] max-w-[980px] items-center">
        <div class="flex flex-col items-center">
          <div class="max-w-[980px] text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
            Rapid Application Development using Reusable Vue Components
          </div>
          <Balancer
            class="max-w-[750px] p-4 text-center text-lg font-light text-foreground"
            :prefer-native="false"
          >
            Streamline your workflow, enhance collaboration, and scale effortlessly with our powerful component system.
          </Balancer>

          <div class="flex w-full items-center justify-center space-x-2">
            <a
              :href="storybookUrl"
              :class="buttonVariants()"
            >
              Get Started
            </a>
            <a
              :href="githubUrl"
              :class="buttonVariants({ variant: 'outline' })"
            >
              <Iconify icon="octicon:mark-github-16" class="mr-2 size-4" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      <section>
        <p class="mx-auto max-w-2xl text-center text-gray-400">
          Unlock the full potential of your development process with reusable, library-agnostic components. Spend less time on repetitive tasks and more time on innovation. Our system aligns perfectly with your design tools, ensuring a smooth transition from design to code.
        </p>
      </section>
    </main>

    <Footer />
  </div>
</template>
