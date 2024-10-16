import { DonutChart } from '~/components/ui/chart-donut'
import data from './data/area-chart-01.js'

export default {
  title: 'Data Display/Charts/Donut Chart',
  component: DonutChart,
  tags: ['autodocs'],
}

export const Default = {
  args: {
    data,
    'index': 'name',
    'category': 'total',
    'value-formatter': (tick, _i) => {
      return typeof tick === 'number'
        ? `$ ${new Intl.NumberFormat('us').format(tick).toString()}`
        : ''
    },
  },

  parameters: {
    docs: {
      source: {
        code: `
<script setup>
const data = [
  {
    name: 'Jan',
    total: Math.floor(Math.random() * 2000) + 500,
    predicted: Math.floor(Math.random() * 2000) + 500
  },
  // ...
]
</script>

<template>
  <DonutChart
    index="name"
    :category="'total'"
    :data="data"
  />
</template>
`,
      },
    },
  },
}

export const PieChart = {
  args: {
    data,
    'index': 'name',
    'category': 'total',
    'type': 'pie',
    'value-formatter': (tick, _i) => {
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
<DonutChart
  index="name"
  :category="'total'"
  :type="'pie'"
  :data="data"
  :value-formatter="(tick, _i) => {
    return typeof tick === 'number'
          ? ` + '$ ${new Intl.NumberFormat(\'us\').format(tick).toString()}' + `
      : ''
  }"
/>
`,
      /* eslint-enable no-template-curly-in-string */
      },
    },
  },
}

export const Color = {
  args: {
    data,
    'index': 'name',
    'category': 'total',
    'colors': ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'],
    'value-formatter': (tick, _i) => {
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
<DonutChart
  index="name"
  :category="'total'"
  :data="data"
  :colors="['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple']"
  :value-formatter="(tick, _i) => {
    return typeof tick === 'number'
          ? ` + '$ ${new Intl.NumberFormat(\'us\').format(tick).toString()}' + `
      : ''
  }"
/>
`,
      /* eslint-enable no-template-curly-in-string */
      },
    },
  },
}
