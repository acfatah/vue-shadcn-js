<script setup>
const props = defineProps({
  disabled: { type: Boolean, required: false },
  side: { type: String, required: false, default: 'top' },
  text: { type: String, required: false },
  class: { type: null, required: false },
})
</script>

<template>
  <slot v-if="props.disabled" />
  <TooltipProvider v-else>
    <TooltipRoot>
      <TooltipTrigger as-child>
        <slot />
      </TooltipTrigger>
      <TooltipContent
        :side="props.side"
      >
        <slot name="content" />
        {{ props.text }}
        <TooltipArrow />
      </TooltipContent>
    </TooltipRoot>
  </TooltipProvider>
</template>
