<script setup>
import { toast } from '~/components/ui/toast'

const value = ref([])

function handleComplete(inputs) {
  return toast({
    title: '"complete" event:',
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h(
      'code',
      { class: 'text-white' },
      JSON.stringify(inputs.join(''), null, 2),
    )),
  })
}
</script>

<template>
  <div>
    <PinInput
      id="pin-input"
      v-model="value"
      placeholder="○"
      @complete="handleComplete"
    >
      <PinInputGroup class="gap-1">
        <template v-for="(id, index) in 5" :key="id">
          <PinInputInput
            class="rounded-md border"
            :index="index"
          />
          <template v-if="index !== 4">
            <PinInputSeparator />
          </template>
        </template>
      </PinInputGroup>
    </PinInput>
  </div>
</template>
