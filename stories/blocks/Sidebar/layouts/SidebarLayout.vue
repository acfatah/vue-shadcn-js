<script setup>
import Header from './Header.vue'
import LeftSidebar from './LeftSidebar.vue'
</script>

<template>
  <SidebarProvider>
    <LeftSidebar />
    <SidebarInset>
      <Header />
      <RouterView />
    </SidebarInset>
  </SidebarProvider>
</template>
