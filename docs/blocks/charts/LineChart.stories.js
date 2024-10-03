import { LineChart } from '~/components/ui/chart-line'
import data from './data/line-chart-01.json'

export default {
  title: 'Blocks/Charts/Line Chart',
  component: LineChart,
  tags: ['autodocs'],
}

export const Default = {
  args: {
    data,
    'index': 'year',
    'categories': ['Export Growth Rate', 'Import Growth Rate'],
    'y-formatter': (tick, _i) => {
      return typeof tick === 'number'
        ? `$ ${new Intl.NumberFormat('us').format(tick).toString()}`
        : ''
    },
  },

  parameters: {
    docs: {
      source: {
        /* eslint-disable no-template-curly-in-string */
        code: `
<script setup>
const data = [
   {
    'year': 1970,
    'Export Growth Rate': 2.04,
    'Import Growth Rate': 1.53,
  },
  // ...
]
</script>

<template>
  <LineChart
    :data="data"
    index="year"
    :categories="['Export Growth Rate', 'Import Growth Rate']"
    :y-formatter="(tick, _i) => {
      return typeof tick === 'number'
          ? ` + '$ ${new Intl.NumberFormat(\'us\').format(tick).toString()}' + `
        : ''
    }"
  />
</template>
`,
      /* eslint-enable no-template-curly-in-string */
      },
    },
  },
}

export const Sparkline = {
  args: {
    data,
    'class': 'h-[100px] w-[400px]',
    'index': 'year',
    'categories': ['Export Growth Rate'],
    'y-formatter': (tick, _i) => {
      return typeof tick === 'number'
        ? `$ ${new Intl.NumberFormat('us').format(tick).toString()}`
        : ''
    },
    'show-tooltip': false,
    'show-grid-line': false,
    'show-legend': false,
    'show-x-axis': false,
    'show-y-axis': false,
  },

  parameters: {
    docs: {
      source: {
        /* eslint-disable no-template-curly-in-string */
        code: `
<LineChart
  index="year"
  class="h-[100px] w-[400px]"
  :data="data"
  :categories="['Export Growth Rate']"
  :y-formatter="(tick, i) => {
    return typeof tick === 'number'
          ? ` + '$ ${new Intl.NumberFormat(\'us\').format(tick).toString()}' + `
      : ''
  }"
  :show-tooltip="false"
  :show-grid-line="false"
  :show-legend="false"
  :show-x-axis="false"
  :show-y-axis="false"
/>
`,
      /* eslint-enable no-template-curly-in-string */
      },
    },
  },
}
