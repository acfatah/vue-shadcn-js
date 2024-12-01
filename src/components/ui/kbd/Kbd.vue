<script setup>
import { Primitive } from 'radix-vue'
import { kbdVariants } from '.'

const props = defineProps({
  class: { type: null, required: false },
  size: { type: null, required: false, default: 'sm' },
})

const delegatedProps = computed(() => {
  const { class: _, size, ...delegated } = props

  return delegated
})
</script>

<template>
  <Primitive
    v-bind="delegatedProps"
    :class="cn(
      kbdVariants({
        size: props.size,
      }),
      props.class,
    )"
  >
    <slot />
  </Primitive>
</template>
