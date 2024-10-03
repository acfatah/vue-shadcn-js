import { CurveType } from '@unovis/ts'
import { AreaChart } from '~/components/ui/chart-area'
import data from './data/area-chart-01.js'

export default {
  title: 'Blocks/Charts/Area Chart',
  component: AreaChart,
  tags: ['autodocs'],
}

export const Default = {
  args: {
    data,
    index: 'name',
    categories: ['total', 'predicted'],
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
  <AreaChart
    :data="data"
    index="name"
    :categories="['total', 'predicted']"
  />
</template>
`,

      },
    },
  },
}

export const Sparkline = {
  args: {
    data,
    'class': 'h-[100px] w-[400px]',
    'index': 'name',
    'categories': ['total'],
    'show-grid-line': false,
    'show-legend': false,
    'show-x-axis': false,
    'show-y-axis': false,
    'curve-type': CurveType.Linear,
  },

  parameters: {
    docs: {
      source: {
        code: `
<AreaChart
  class="h-[100px] w-[400px]"
  index="name"
  :data="data"
  :categories="['total']"
  :show-grid-line="false"
  :show-legend="false"
  :show-x-axis="false"
  :show-y-axis="false"
  :curve-type="CurveType.Linear"
/>
`,
      },
    },
  },
}
