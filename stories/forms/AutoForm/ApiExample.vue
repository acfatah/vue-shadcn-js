<script setup>
import * as z from 'zod'

const schema = shallowRef(null)

onMounted(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((data) => {
      schema.value = z.object({
        user: z.enum(data.map(user => user.name)),
      })
    })
})

function onSubmit(values) {
  toast({
    title: 'You submitted the following values:',
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
  })
}
</script>

<template>
  <div class="flex w-full">
    <AutoForm
      v-if="schema"
      class="w-2/3 space-y-6"
      :schema="schema"
      @submit="onSubmit"
    >
      <Button type="submit">
        Submit
      </Button>
    </AutoForm>

    <div v-else>
      Loading...
    </div>
  </div>
</template>
