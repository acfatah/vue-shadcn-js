<script setup>
import { buttonVariants } from '~/components/ui/button'

const isLoading = ref(false)
async function onSubmit(event) {
  event.preventDefault()
  isLoading.value = true

  setTimeout(() => {
    isLoading.value = false
  }, 3000)
}
</script>

<template>
  <div class="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
    <a
      href="#"
      :class="cn(
        buttonVariants({ variant: 'ghost' }),
        'absolute right-4 top-4 md:right-8 md:top-8',
      )"
    >
      Login
    </a>
    <div class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
      <div class="absolute inset-0 bg-zinc-900" />
      <div class="relative z-20 flex items-center text-lg font-medium">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          class="mr-2 size-6"
        >
          <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
        </svg>
        Acme Inc
      </div>
      <div class="relative z-20 mt-auto">
        <blockquote class="space-y-2">
          <p class="text-lg">
            &ldquo;This library has saved me countless hours of work and
            helped me deliver stunning designs to my clients faster than
            ever before.&rdquo;
          </p>
          <footer class="text-sm">
            Sofia Davis
          </footer>
        </blockquote>
      </div>
    </div>
    <div class="lg:p-8">
      <div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div class="flex flex-col space-y-2 text-center">
          <h1 class="text-2xl font-semibold tracking-tight">
            Create an account
          </h1>
          <p class="text-sm text-muted-foreground">
            Enter your email below to create your account
          </p>
        </div>
        <!-- AuthenticationForm -->
        <div :class="cn('grid gap-6', $attrs.class ?? '')">
          <form @submit="onSubmit">
            <div class="grid gap-2">
              <div class="grid gap-1">
                <Label class="sr-only" for="email">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                  auto-capitalize="none"
                  auto-complete="email"
                  auto-correct="off"
                  :disabled="isLoading"
                />
              </div>
              <Button :disabled="isLoading">
                <LoaderIcon v-if="isLoading" class="mr-2 size-4 animate-spin" />
                Sign In with Email
              </Button>
            </div>
          </form>
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <span class="w-full border-t" />
            </div>
            <div class="relative flex justify-center text-xs uppercase">
              <span class="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <Button variant="outline" type="button" :disabled="isLoading">
            <LoaderIcon v-if="isLoading" class="mr-2 size-4 animate-spin" />
            <SvgIcon v-else name="github" class="mr-2 size-4" />
            GitHub
          </Button>
        </div>
        <!-- AuthenticationForm end -->
        <p class="px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our
          <a
            href="#"
            class="underline underline-offset-4 hover:text-primary"
          >
            Terms of Service
          </a>
          and
          <a
            href="c#"
            class="underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  </div>
</template>
