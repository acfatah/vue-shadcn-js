<script setup>
const props = defineProps({
  side: { type: String, required: false },
})
</script>

<template>
  <TooltipProvider>
    <TooltipRoot>
      <TooltipTrigger as-child>
        <Button variant="outline">
          Hover
        </Button>
      </TooltipTrigger>

      <TooltipContent :side="props.side">
        <p>Add to library</p>
        <TooltipArrow />
      </TooltipContent>
    </TooltipRoot>
  </TooltipProvider>
</template>
