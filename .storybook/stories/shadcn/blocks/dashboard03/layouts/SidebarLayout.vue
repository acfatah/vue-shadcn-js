<template>
  <div class="grid h-screen w-full pl-[53px]">
    <div id="sidebar" class="fixed left-0 z-20 h-full" />
    <div class="flex flex-col">
      <div id="header" class="sticky top-0 z-10 " />
      <RouterView />
    </div>
  </div>
</template>
