<script setup>
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import { toast } from '~/components/ui/toast'

const formSchema = toTypedSchema(z.object({
  italic: z.boolean().optional(),
}))

const initialValues = {
  italic: false,
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
    class="w-full space-y-6"
    :validation-schema="formSchema"
    :initial-values="initialValues"
    @submit="onSubmit"
  >
    <Tooltip text="Toggle italic">
      <FormField v-slot="{ value, handleChange }" name="italic">
        <FormItem>
          <FormControl>
            <Toggle aria-label="Toggle italic" :pressed="value" @update:pressed="handleChange">
              <ItalicIcon class="size-4" />
            </Toggle>
          </FormControl>
        </FormItem>
      </FormField>
    </Tooltip>

    <Button type="submit">
      Submit
    </Button>
  </Form>
</template>
