<template>
  <Popover>
    <PopoverTrigger as-child>
      <Badge variant="outline" class="border-transparent p-1">
        <span class="sr-only absolute">Info</span>
        <InfoIcon class="size-4 translate-y-0.5" />
      </Badge>
    </PopoverTrigger>
    <PopoverContent align="start" class="w-80">
      <slot />
    </PopoverContent>
  </Popover>
</template>
