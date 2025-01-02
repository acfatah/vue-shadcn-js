<script setup>
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
</template>
