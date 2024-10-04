<script setup>
const props = defineProps({
  side: { type: String, required: false, default: 'top' },
  text: { type: String, required: false },
})
</script>

<template>
  <TooltipProvider>
    <TooltipRoot>
      <TooltipTrigger as-child>
        <slot />
      </TooltipTrigger>
      <TooltipContent :side="props.side">
        <slot name="content" />
        {{ props.text }}
        <TooltipArrow />
      </TooltipContent>
    </TooltipRoot>
  </TooltipProvider>
</template>
