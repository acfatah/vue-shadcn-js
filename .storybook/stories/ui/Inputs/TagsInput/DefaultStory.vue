<script setup>
import { useForwardProps } from 'radix-vue'

const props = defineProps({
  disabled: { type: Boolean, required: false },
})

const modelValue = ref(['Apple', 'Banana'])
const forwardProps = useForwardProps(props)
</script>

<template>
  <TagsInput v-bind="forwardProps">
    <TagsInputItem v-for="item in modelValue" :key="item" :value="item">
      <TagsInputItemText />
      <TagsInputItemDelete />
    </TagsInputItem>

    <TagsInputInput placeholder="Fruits..." />
  </TagsInput>
</template>
