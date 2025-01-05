<script setup>
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import { toast } from '~/components/ui/toast'

const formSchema = toTypedSchema(z.object({
  selection: z.string().array().optional(),
}))

const initialValues = {
  selection: ['button-1'],
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
    <FormField v-slot="{ value, handleChange }" name="selection">
      <FormItem>
        <FormControl>
          <ButtonGroup
            :model-value="value"
            type="multiple"
            @update:model-value="handleChange"
          >
            <ButtonGroupItem value="button-1" aria-label="Button 1">
              Button 1
            </ButtonGroupItem>
            <ButtonGroupItem value="button-2" aria-label="Button 2">
              Button 2
            </ButtonGroupItem>
            <ButtonGroupItem value="button-3" aria-label="Button 3">
              Button 3
            </ButtonGroupItem>
          </ButtonGroup>
        </FormControl>
      </FormItem>
    </FormField>

    <Button type="submit">
      Submit
    </Button>
  </Form>
</template>
