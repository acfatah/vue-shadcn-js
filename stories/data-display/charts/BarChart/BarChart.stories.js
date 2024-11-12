import { BarChart } from '~/components/ui/chart-bar'
import { monthlyData, monthlyPredictions } from './data.js'
import BarChartSource from './DefaultStory.vue?raw'
import WithCategoriesSource from './WithCategory.vue?raw'

export default {
  title: 'Data Display/Charts/Bar Chart',
  component: BarChart,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        code: BarChartSource,
      },
    },
  },
}

export const Default = {
  args: {
    data: monthlyData,
    index: 'name',
    categories: ['total'],
  },
}

export const WithCategories = {
  args: {
    'data': monthlyPredictions,
    'index': 'name',
    'categories': ['total', 'predicted'],
    'y-formatter': (tick, _i) => {
      return typeof tick === 'number'
        ? `$ ${new Intl.NumberFormat('us').format(tick).toString()}`
        : ''
    },
  },

  parameters: {
    docs: {
      source: {
        code: WithCategoriesSource,
      },
    },
  },
}
