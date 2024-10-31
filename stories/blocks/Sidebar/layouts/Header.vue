<template>
  <header class="sticky top-0 z-10 flex h-16 w-full shrink-0 items-center gap-2 bg-background/100 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
    <div class="flex w-full items-center gap-2 px-4">
      <SidebarTrigger class="-ml-1" />
      <Separator orientation="vertical" class="mr-2 h-4" />
      <Placeholder class="h-6 w-64" />
      <Placeholder class="ml-auto h-6 w-8" />
      <Placeholder class="h-6 w-8" />
    </div>
  </header>
</template>
