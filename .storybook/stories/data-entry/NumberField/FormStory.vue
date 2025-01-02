<script setup>
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import { toast } from '~/components/ui/toast'

const formSchema = toTypedSchema(z.object({
  payment: z
    .number()
    .min(10, 'Min 10 euros to send payment')
    .max(5000, 'Max 5000 euros to send payment'),
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
    v-slot="{ setFieldValue }"
    class="w-full space-y-6"
    :validation-schema="formSchema"
    :initial-values="{ payment: 10 }"
    @submit="onSubmit"
  >
    <FormField v-slot="{ value }" name="payment">
      <FormItem>
        <FormLabel>Payment</FormLabel>
        <NumberField
          class="w-40 gap-2"
          :min="0"
          :format-options="{
            style: 'currency',
            currency: 'EUR',
            currencyDisplay: 'code',
            currencySign: 'accounting',
          }"
          :model-value="value"
          @update:model-value="(v) => {
            if (v) {
              setFieldValue('payment', v)
            }
            else {
              setFieldValue('payment', undefined)
            }
          }"
        >
          <NumberFieldContent>
            <NumberFieldDecrement />
            <FormControl>
              <NumberFieldInput />
            </FormControl>
            <NumberFieldIncrement />
          </NumberFieldContent>
        </NumberField>
        <FormDescription>
          Enter value between 10 and 5000.
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>

    <Button type="submit">
      Submit
    </Button>
  </Form>
</template>
