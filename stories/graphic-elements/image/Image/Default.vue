<template>
  <UseImage src="https://placehold.co/320x240">
    <template #loading>
      <div class="dark: flex h-[240px] w-[320px] items-center justify-center bg-neutral-100 dark:bg-neutral-900">
        <LoaderCircleIcon class="animate-spin" />
      </div>
    </template>

    <template #error>
      <Placeholder class="h-[240px] w-[320px] gap-2">
        <TriangleAlertIcon />Error loading image
      </Placeholder>
    </template>
  </UseImage>
</template>
