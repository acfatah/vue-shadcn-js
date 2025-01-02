<template>
  <div class="flex min-h-screen w-full flex-col bg-muted/40">
    <div id="sidebar" />
    <div class="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <div id="header" class="sticky top-0 z-30 sm:static " />
      <RouterView />
    </div>
    <div id="footer" />
  </div>
</template>
