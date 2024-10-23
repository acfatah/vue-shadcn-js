<script setup>
import SidebarNav from '../components/SidebarNav.vue'
import Title from './Title.vue'

const router = useRouter()

onMounted(() => {
  router.push('/profile')
})
</script>

<template>
  <div class="flex min-h-screen w-full flex-col space-y-6 p-4 md:hidden">
    <Title />
    <SidebarNav />
    <RouterView />
  </div>
  <div class="hidden space-y-6 p-10 pb-16 md:block">
    <Title />
    <div class="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
      <aside class="-mx-4 lg:w-1/5">
        <SidebarNav />
      </aside>
      <div class="flex-1 lg:max-w-2xl">
        <div class="space-y-6">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>
