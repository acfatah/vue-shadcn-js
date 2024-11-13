<script setup>
import { getLocalTimeZone, today } from '@internationalized/date'
import { useVModel } from '@vueuse/core'
import {
  CalendarRoot,
  useDateFormatter,
  useForwardPropsEmits,
} from 'radix-vue'
import {
  createDecade,
  createYear,
  toDate,
} from 'radix-vue/date'

const props = defineProps({
  modelValue: { type: Date },
  placeholder: { type: Date, default: () => today(getLocalTimeZone()) },
  weekdayFormat: { type: String, default: 'short' },

  class: { type: String, default: '' },
})

const emits = defineEmits([
  /**
   * Event handler called whenever the model value changes
   * @param {date: DateValue | undefined}
   */
  'update:modelValue',

  /**
   * Event handler called whenever the placeholder value changes
   * @param {date: DateValue}
   */
  'update:placeholder',
])

const delegatedProps = computed(() => {
  const { class: _, placeholder: __, ...delegated } = props

  return delegated
})

const placeholder = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: today(getLocalTimeZone()),
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
const formatter = useDateFormatter('en')
</script>

<template>
  <CalendarRoot
    v-slot="{ date, grid, weekDays }"
    v-model:placeholder="placeholder"
    v-bind="forwarded"
    :class="cn('rounded-md border p-3 w-fit', props.class)"
  >
    <CalendarHeader>
      <CalendarHeading class="flex w-full items-center justify-between gap-2">
        <Select
          :default-value="placeholder.month.toString()"
          @update:model-value="(v) => {
            if (!v || !placeholder) return;
            if (Number(v) === placeholder?.month) return;
            placeholder = placeholder.set({
              month: Number(v),
            })
          }"
        >
          <SelectTrigger aria-label="Select month" class="w-3/5">
            <SelectValue placeholder="Select month" />
          </SelectTrigger>
          <SelectContent class="max-h-[200px]">
            <SelectItem
              v-for="month in createYear({ dateObj: date })"
              :key="month.toString()" :value="month.month.toString()"
            >
              {{ formatter.custom(toDate(month), { month: 'long' }) }}
            </SelectItem>
          </SelectContent>
        </Select>

        <Select
          :default-value="placeholder.year.toString()"
          @update:model-value="(v) => {
            if (!v || !placeholder) return;
            if (Number(v) === placeholder?.year) return;
            placeholder = placeholder.set({
              year: Number(v),
            })
          }"
        >
          <SelectTrigger aria-label="Select year" class="w-2/5">
            <SelectValue placeholder="Select year" />
          </SelectTrigger>
          <SelectContent class="max-h-[200px]">
            <SelectItem
              v-for="yearValue in createDecade({ dateObj: date, startIndex: -10, endIndex: 10 })"
              :key="yearValue.toString()" :value="yearValue.year.toString()"
            >
              {{ yearValue.year }}
            </SelectItem>
          </SelectContent>
        </Select>
      </CalendarHeading>
    </CalendarHeader>

    <div class="flex flex-col space-y-4 pt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0">
      <CalendarGrid v-for="month in grid" :key="month.value.toString()">
        <CalendarGridHead>
          <CalendarGridRow>
            <CalendarHeadCell
              v-for="day in weekDays" :key="day"
            >
              {{ day }}
            </CalendarHeadCell>
          </CalendarGridRow>
        </CalendarGridHead>
        <CalendarGridBody class="grid">
          <CalendarGridRow v-for="(weekDates, index) in month.rows" :key="`weekDate-${index}`" class="mt-2 w-full">
            <CalendarCell
              v-for="weekDate in weekDates"
              :key="weekDate.toString()"
              :date="weekDate"
            >
              <CalendarCellTrigger
                :day="weekDate"
                :month="month.value"
              />
            </CalendarCell>
          </CalendarGridRow>
        </CalendarGridBody>
      </CalendarGrid>
    </div>
  </CalendarRoot>
</template>
