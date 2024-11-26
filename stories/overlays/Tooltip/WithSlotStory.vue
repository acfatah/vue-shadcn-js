<template>
  <Tooltip>
    <template #content>
      <div class="flex items-center">
        <CircleHelpIcon class="mr-1" size="16" />
        <span>Elements from slot</span>
      </div>
    </template>

    <Button variant="outline">
      Hover
    </Button>
  </Tooltip>
</template>
