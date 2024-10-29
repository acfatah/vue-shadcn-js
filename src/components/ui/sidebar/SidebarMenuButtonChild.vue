<script setup>
import { Primitive } from 'radix-vue'
import { sidebarMenuButtonVariants } from '.'

const props = defineProps({
  tooltip: { type: null, required: false },
  as: { type: null, required: false, default: 'button' },
  asChild: { type: Boolean, required: false, default: false },

  /** @type { 'default' | 'outline' } variant */
  variant: { type: String, required: false, default: 'default' },

  /** @type { 'default' | 'sm' | 'lg' } size */
  size: { type: String, required: false, default: 'default' },

  isActive: { type: Boolean, required: false, default: false },
  class: { type: null, required: false },
})
</script>

<template>
  <Primitive
    data-sidebar="menu-button"
    :data-size="props.size"
    :data-active="props.isActive"
    :class="cn(sidebarMenuButtonVariants({ variant: props.variant, size: props.size }), props.class)"
    :as="props.as"
    :as-child="props.asChild"
    v-bind="$attrs"
  >
    <slot />
  </Primitive>
</template>
