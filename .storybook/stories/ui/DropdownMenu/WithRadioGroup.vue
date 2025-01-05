<script setup>
const position = ref('bottom')
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline">
        Open
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start" class="w-56">
      <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuRadioGroup v-model="position">
        <DropdownMenuRadioItem value="top">
          Top
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="bottom">
          Bottom
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="right">
          Right
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
