<script setup>
import { Primitive } from 'radix-vue'

const props = defineProps({
  isActive: { type: Boolean, required: false, default: false },

  /** @type { 'sm' | 'md' } size */
  size: { type: String, required: false, default: 'md' },

  as: { type: null, required: false, default: 'a' },
  asChild: { type: Boolean, required: false, default: false },
  class: { type: null, required: false },
})
</script>

<template>
  <Primitive
    data-sidebar="menu-sub-button"
    :as="props.as"
    :as-child="props.asChild"
    :data-size="props.size"
    :data-active="props.isActive"
    :class="cn(
      'flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground',
      'data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground',
      props.size === 'sm' && 'text-xs',
      props.size === 'md' && 'text-sm',
      'group-data-[collapsible=icon]:hidden',
      props.class,
    )"
  >
    <slot />
  </Primitive>
</template>
