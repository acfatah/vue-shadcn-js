<script setup>
import { PaginationPrev } from 'radix-vue'

const props = defineProps({
  asChild: { type: Boolean, required: false, default: true },
  as: { type: null, required: false },
  class: { type: null, required: false },
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <PaginationPrev v-bind="delegatedProps">
    <Button :class="cn('w-9 h-9 p-1', props.class)" variant="outline">
      <slot>
        <ChevronLeftIcon class="size-4" />
      </slot>
    </Button>
  </PaginationPrev>
</template>
