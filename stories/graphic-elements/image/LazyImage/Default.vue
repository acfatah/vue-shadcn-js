<script setup>
const props = defineProps({
  src: {
    default: 'https://placehold.co/100x100',
  },
})
const isLoaded = ref(false)
</script>

<template>
  <div class="h-[200px] overflow-y-scroll border-2 border-dashed px-4">
    <p class="mb-[300px] p-2 text-center italic opacity-80">
      Scroll me down!
    </p>
    <div class="mb-[400px] flex h-[150px] items-center justify-center gap-4 border-2 border-dashed p-4">
      <UseLazyImage :src="props.src" @loaded="isLoaded = $event">
        <template #loading>
          <div class="flex size-[100px] items-center justify-center bg-neutral-100 dark:bg-neutral-900">
            <LoaderCircleIcon class="animate-spin" />
          </div>
        </template>

        <template #error>
          <Placeholder class="size-[100px] text-center">
            Image not found
          </Placeholder>
        </template>
      </UseLazyImage>
      <UseLazyImage src="https://image-that-does-not-exists">
        <template #loading>
          <div class="flex size-[100px] items-center justify-center bg-neutral-100 dark:bg-neutral-900">
            <LoaderCircleIcon class="animate-spin" />
          </div>
        </template>

        <template #error>
          <Placeholder class="size-[100px] text-center">
            Image not found
          </Placeholder>
        </template>
      </UseLazyImage>
    </div>
  </div>
  <div class="text-center">
    Image is
    <BooleanDisplay
      :value="isLoaded"
      true="loaded"
      false="not loaded"
      true-class="font-bold"
    />.
  </div>
</template>
