<template>
  <div class="flex min-h-screen w-full flex-col bg-muted/40">
    <div id="sidebar" />
    <div class="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <div id="header" />
      <main class="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <RouterView />
      </main>
    </div>
    <div id="footer" />
  </div>
</template>
