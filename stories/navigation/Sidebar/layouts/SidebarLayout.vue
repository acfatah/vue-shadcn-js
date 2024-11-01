<script setup>
import Header from './Header.vue'
import LeftSidebar from './LeftSidebar.vue'
</script>

<template>
  <SidebarProvider>
    <LeftSidebar />
    <SidebarInset class="px-2">
      <Header />
      <RouterView />
    </SidebarInset>
  </SidebarProvider>
</template>
