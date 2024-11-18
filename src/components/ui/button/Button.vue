<script setup>
import { Primitive } from 'radix-vue'
import { buttonVariants } from '.'

const props = defineProps({
  /**  @type { 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' } variant */
  variant: { type: null, required: false },

  /** @type { 'default' | 'xs' | 'sm' | 'lg' | 'icon' } size */
  size: { type: null, required: false },

  as: { type: null, required: false, default: 'button' },
  asChild: { type: Boolean, required: false },
  class: { type: null, required: false },
})

const attrs = useAttrs()

const isReset = computed(() => attrs?.type === 'reset')
</script>

<template>
  <Primitive
    :as="props.as"
    :as-child="props.asChild"
    :class="cn(
      buttonVariants({ variant: isReset ? 'secondary' : props.variant, size }),
      props.class,
    )"
  >
    <slot />
  </Primitive>
</template>
