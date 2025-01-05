<script setup>
import {
  DateFormatter,
  getLocalTimeZone,
  parseDate,
} from '@internationalized/date'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import { toast } from '~/components/ui/toast'

const df = new DateFormatter('en-US', {
  dateStyle: 'long',
})

const formSchema = toTypedSchema(z.object({
  dateRange: z
    .object({
      start: z.string(),
      end: z.string(),
    }),
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
    class="space-y-8"
    :validation-schema="formSchema"
    @submit="onSubmit"
  >
    <FormField v-slot="{ value }" name="dateRange">
      <FormItem class="flex flex-col">
        <FormLabel>Date Range</FormLabel>

        <Popover>
          <PopoverTrigger as-child>
            <Button
              variant="outline"
              :class="cn(
                'w-[312px] justify-start text-left font-normal',
                !value && 'text-muted-foreground',
              )"
            >
              <CalendarIcon class="mr-2 size-4" />
              <template v-if="value.start">
                <template v-if="value.end">
                  {{ df.format(parseDate(value.start).toDate(getLocalTimeZone())) }} - {{ df.format(parseDate(value.end).toDate(getLocalTimeZone())) }}
                </template>

                <template v-else>
                  {{ df.format(parseDate(value.start).toDate(getLocalTimeZone())) }}
                </template>
              </template>
              <template v-else>
                Pick a date
              </template>
            </Button>
          </PopoverTrigger>
          <PopoverContent align="start" class="w-auto p-0">
            <RangeCalendar
              :value="value"
              class="min-h-[346px] p-3"
              initial-focus
              :number-of-months="2"
              @update:model-value="(rangeDate) => {
                setFieldValue('dateRange', {
                  start: rangeDate.start?.toString(),
                  end: rangeDate.end?.toString(),
                })
              }"
            />
          </PopoverContent>
        </Popover>
        <FormDescription>
          The date range.
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>

    <Button type="submit">
      Submit
    </Button>
  </Form>
</template>
