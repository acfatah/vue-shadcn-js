<script setup>
import { useForwardProps } from 'radix-vue'

const props = defineProps({
  disabled: { type: Boolean, required: false },
})
const value = ref([])

function handleComplete(inputs) {
  const pin = inputs.join('')
  toast({
    title: 'You submitted the following values:',
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h(
      'code',
      { class: 'text-white' },
      JSON.stringify(pin, null, 2),
    )),
  })
}

const forwarded = useForwardProps(props)
</script>

<template>
  <div>
    <PinInput
      id="pin-input"
      v-model="value"
      placeholder="○"
      v-bind="forwarded"
      @complete="handleComplete"
    >
      <PinInputGroup>
        <PinInputInput
          v-for="(id, index) in 5"
          :key="id"
          :index="index"
        />
      </PinInputGroup>
    </PinInput>
  </div>
</template>
