<script setup>
const props = defineProps({
  side: { type: String, required: false },
})
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger as-child>
        <Button variant="outline">
          Hover
        </Button>
      </TooltipTrigger>
      <TooltipContent :side="props.side">
        <p>Add to library</p>
        <TooltipArrow />
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>
