import { LineChart } from '~/components/ui/chart-line'
import data from '../data/growth.json'
import DefaultSource from './DefaultStory.vue?raw'
import SparklineSource from './Sparkline.vue?raw'

export default {
  title: 'Data Display/Charts/Line Chart',
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
        code: DefaultSource,
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
        code: SparklineSource,
      },
    },
  },
}
