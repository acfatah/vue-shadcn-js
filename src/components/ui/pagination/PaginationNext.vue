<script setup>
import { ChevronRight } from 'lucide-vue-next'
import { PaginationNext } from 'radix-vue'
import { computed } from 'vue'
import { Button } from '~/components/ui/button'
import { cn } from '~/lib/utils'

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
  <PaginationNext v-bind="delegatedProps">
    <Button :class="cn('w-10 h-10 p-0', props.class)" variant="outline">
      <slot>
        <ChevronRight class="size-4" />
      </slot>
    </Button>
  </PaginationNext>
</template>
