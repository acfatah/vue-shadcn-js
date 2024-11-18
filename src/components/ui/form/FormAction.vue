<script setup>
const props = defineProps({
  justifyEnd: { type: Boolean, required: false },

  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: null, required: false },
})

const delegatedProps = computed(() => {
  const { class: _, justifyEnd, ...delegated } = props

  return { ...delegated }
})
</script>

<template>
  <div
    v-bind="delegatedProps"
    :class="cn(
      'flex gap-2 mt-6',
      [props.justifyEnd && 'flex-row-reverse'],
      props.class,
    )"
  >
    <slot />
  </div>
</template>
