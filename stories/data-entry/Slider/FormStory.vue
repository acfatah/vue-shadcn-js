<script setup>
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import { toast } from '~/components/ui/toast'

const formSchema = toTypedSchema(z.object({
  duration: z.array(
    z.number().min(0).max(60),
  ),
}))

const initialValues = {
  duration: [30],
}

function onSubmit(values) {
  toast({
    title: 'You submitted the following values:',
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
  })
}
</script>

<template>
  <Form
    :validation-schema="formSchema"
    :initial-values="initialValues"
    class="w-2/3 space-y-6"
    @submit="onSubmit"
  >
    <FormField v-slot="{ componentField, value }" name="duration">
      <FormItem>
        <FormLabel>Duration</FormLabel>
        <FormControl>
          <Slider
            v-bind="componentField"
            :default-value="[30]"
            :max="100"
            :min="0"
            :step="5"
          />
          <FormDescription class="flex justify-between">
            <span>How many minutes are you available?</span>
            <span>{{ value?.[0] }} min</span>
          </FormDescription>
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <Button type="submit">
      Submit
    </Button>
  </Form>
</template>
