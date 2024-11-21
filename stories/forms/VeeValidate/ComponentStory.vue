<script setup>
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { toast } from '~/components/ui/toast'

const formSchema = toTypedSchema(z.object({
  username: z.string().min(3),
}))

const initialValues = {
  username: 'shadcn',
}

function onSubmit(values) {
  const output = values
  toast({
    title: 'You submitted the following values:',
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(output, null, 2))),
  })
}

onMounted(() => {
  formSchema.parse(initialValues)
})
</script>

<template>
  <Teleport to="body">
    <Toaster />
  </Teleport>

  <Form
    v-slot="{ meta }"
    :validation-schema="formSchema"
    :initial-values="initialValues"
    @submit="onSubmit"
  >
    <FormField v-slot="{ componentField }" name="username">
      <FormItem>
        <FormLabel>Name</FormLabel>
        <FormControl>
          <Input type="text" v-bind="componentField" />
        </FormControl>
        <FormDescription>
          This is your public display name.
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>

    <!-- Other FormField(s) -->

    <FormAction justify-end>
      <Button
        type="submit"
        :disabled="!(meta.dirty && meta.valid)"
      >
        Submit
      </Button>

      <Button type="reset">
        Clear
      </Button>
    </FormAction>
  </Form>
</template>
