<script setup>
import { useForwardProps } from 'radix-vue'

const props = defineProps({
  name: { type: String, required: true },
  disabled: { type: Boolean, required: false },
  placeholder: { type: String, required: false },

  accept: {
    type: String,
    required: false,
    default: 'image/png, image/jpeg, image/jpg, image/webp',
  },

  class: { type: null, required: false },
})

const emit = defineEmits(['change'])
const file = ref(null)
const input = ref(null)

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <div class="relative w-full items-center md:w-2/3">
    <Input
      :disabled="props.disabled"
      :class="cn('pr-8', props.class)"
      :value="file?.name"
      type="text"
      :placeholder="props.placeholder"
      aria-hidden="true"
      tabindex="-1"
      role="presentation"
      aria-readonly
    />
    <Input
      ref="input"
      v-bind="forwardedProps"
      type="file"
      :placeholder="props.placeholder"
      class="absolute top-0 opacity-0 disabled:opacity-0"
      :accept="props.accept"
      @change="(event) => {
        file = event.target.files && event.target.files[0]
        emit('change', file)
      }"
    />
    <label
      :for="props.name"
      :disabled="props.disabled"
      class="absolute inset-y-0 end-0 flex items-center justify-center px-2"
      tabindex="0"
      @click="input.$el.click()"
    >
      <slot name="icon">
        <UploadIcon
          class="size-4 cursor-pointer text-muted-foreground"
          :class="{ 'cursor-not-allowed opacity-50': props.disabled }"
        />
      </slot>
    </label>
  </div>
</template>
