import { CurveType } from '@unovis/ts'
import { AreaChart } from '~/components/ui/chart-area'
import data from '../data/montly.js'
import AreaChartSource from './DefaultStory.vue?raw'
import SparklineSource from './SparklineStory.vue?raw'

export default {
  title: 'Data Display/Charts/Area Chart',
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
        code: AreaChartSource,
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
        code: SparklineSource,
      },
    },
  },
}
