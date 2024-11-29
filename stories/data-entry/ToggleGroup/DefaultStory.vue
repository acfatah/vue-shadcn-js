<script setup>
const value = ref(['bold'])
</script>

<template>
  <ToggleGroup
    v-model="value"
    type="multiple"
  >
    <ToggleGroupItem value="bold" aria-label="Toggle bold">
      <BoldIcon class="size-4" />
    </ToggleGroupItem>
    <ToggleGroupItem value="italic" aria-label="Toggle italic">
      <ItalicIcon class="size-4" />
    </ToggleGroupItem>
    <ToggleGroupItem value="underline" aria-label="Toggle underline">
      <UnderlineIcon class="size-4" />
    </ToggleGroupItem>
  </ToggleGroup>

  <div class="mt-4 text-center">
    value: {{ value }}
  </div>
</template>
