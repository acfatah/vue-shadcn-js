<template>
  <div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
    <div id="sidebar" class="hidden md:block" />
    <div class="flex flex-col">
      <div id="header" />
      <RouterView />
      <div id="footer" />
    </div>
  </div>
</template>
