<script setup>
import { VisDonut, VisSingleContainer } from '@unovis/vue'

const props = defineProps({
  /** @type {number} 0-100 */
  modelValue: {
    type: Number,
    required: true,
    default: 0,
    validator: value => value >= 0 && value <= 100,
  },

  size: {
    type: Number,
    default: 100,
  },

  /** @type {number} Offset angle in radians */
  offset: {
    type: Number,
    default: () => 1.5 * Math.PI,
  },

  cornerRadius: {
    type: Number,
    default: 20,
  },

  arcWidth: {
    type: Number,
    default: 10,
  },

  hideLabel: {
    type: Boolean,
    default: false,
  },
})

const end = computed(() => props.offset + (props.modelValue / 100) * 2 * Math.PI)

const label = computed(() => {
  if (props.hideLabel || props.size < 70)
    return ''

  return `${props.modelValue}%`
})

const subLabel = computed(() => {
  if (props.hideLabel || props.size < 80)
    return ''

  return props.modelValue === 100 ? 'Complete' : 'Loading...'
})
</script>

<template>
  <VisSingleContainer :height="props.size">
    <VisDonut
      :value="(d) => d.value"
      :data="[{ key: 'progress', value: props.modelValue }]"
      :central-label="label"
      :central-sub-label="subLabel"
      :show-empty-segments="true"
      :pad-angle="0"
      :arc-width="props.arcWidth"
      :corner-radius="props.cornerRadius"
      :color="(d, i) => ['--primary', '--background'][i]"
      :angle-range="[props.offset, end]"
      :show-background="true"
      :background-angle-range="[0, 2 * Math.PI]"
    />
  </VisSingleContainer>
</template>
