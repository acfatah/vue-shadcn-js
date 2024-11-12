import { DonutChart } from '~/components/ui/chart-donut'
import data from '../data/montly.js'
import ColorSource from './Color.vue?raw'
import DefaultSource from './DefaultStory.vue?raw'
import PieChartSource from './PieChart.vue?raw'

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
        code: DefaultSource,
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
        code: PieChartSource,
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
        code: ColorSource,
      },
    },
  },
}
