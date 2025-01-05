<script setup>
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import { toast } from '~/components/ui/toast'

const formSchema = toTypedSchema(z.object({
  fruits: z.array(z.string()).min(1).max(3),
}))

const initialValues = {
  fruits: ['Apple', 'Banana'],
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
    class="w-2/3 space-y-6"
    :validation-schema="formSchema"
    :initial-values="initialValues"
    @submit="onSubmit"
  >
    <FormField v-slot="{ value }" name="fruits">
      <FormItem>
        <FormLabel>Fruits</FormLabel>
        <FormControl>
          <TagsInput :model-value="value">
            <TagsInputItem v-for="item in value" :key="item" :value="item">
              <TagsInputItemText />
              <TagsInputItemDelete />
            </TagsInputItem>

            <TagsInputInput placeholder="Fruits..." />
          </TagsInput>
        </FormControl>
        <FormDescription>
          Select your favorite fruits.
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>

    <Button type="submit">
      Submit
    </Button>
  </Form>
</template>
