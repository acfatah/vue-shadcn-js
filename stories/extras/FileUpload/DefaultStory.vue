<script setup>
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import { toast } from '~/components/ui/toast'
import FileInput from './FileUpload.vue'

// 5MB
const MAX_FILE_SIZE = 5 * 1024 * 1024

const formSchema = toTypedSchema(z.object({
  image: z
    .instanceof(File)
    .refine(file => file.size < MAX_FILE_SIZE, 'File size must be less than 5MB.'),
}))

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
    @submit="onSubmit"
  >
    <FormField v-slot="{ componentField }" name="image">
      <FormItem>
        <FormLabel>Upload File</FormLabel>
        <FormControl>
          <FileInput v-bind="{ ...componentField, ...$attrs }" />
        </FormControl>
        <!-- TODO: image preview -->
        <FormDescription>
          File upload field with preview.
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>

    <Button type="submit">
      Submit
    </Button>
  </Form>
</template>
