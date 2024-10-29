<script setup>
import SidebarMenuButtonChild from './SidebarMenuButtonChild.vue'
import { useSidebar } from './utils'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  tooltip: { type: null, required: false },
  as: { type: null, required: false, default: 'button' },

  /** @type { 'default' | 'outline' } variant */
  variant: { type: String, required: false, default: 'default' },

  /** @type { 'default' | 'sm' | 'lg' } size */
  size: { type: String, required: false, default: 'default' },

  isActive: { type: Boolean, required: false, default: false },
  class: { type: null, required: false },
})

const { isMobile, state } = useSidebar()

const delegatedProps = computed(() => {
  const { tooltip, ...delegated } = props

  return delegated
})
</script>

<template>
  <SidebarMenuButtonChild v-if="!props.tooltip" v-bind="{ ...delegatedProps, ...$attrs }">
    <slot />
  </SidebarMenuButtonChild>

  <TooltipRoot v-else>
    <TooltipTrigger as-child>
      <SidebarMenuButtonChild v-bind="{ ...delegatedProps, ...$attrs }">
        <slot />
      </SidebarMenuButtonChild>
    </TooltipTrigger>
    <TooltipContent
      side="right"
      align="center"
      :hidden="state !== 'collapsed' || isMobile"
    >
      <template v-if="typeof props.tooltip === 'string'">
        {{ props.tooltip }}
      </template>
      <component :is="props.tooltip" v-else />
    </TooltipContent>
  </TooltipRoot>
</template>
