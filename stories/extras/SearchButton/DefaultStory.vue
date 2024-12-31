<template>
  <Button
    variant="outline"
    class="relative h-8 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
  >
    <span class="inline-flex">Search...</span>
    <Kbd class="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
      <span class="text-xs">⌘</span>K
    </Kbd>
  </Button>
</template>
