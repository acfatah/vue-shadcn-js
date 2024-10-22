import Cards from './Cards.vue'
import CardsSource from './Cards.vue?raw'

export default {
  title: 'shadcn/Examples/Cards',
  component: Cards,
  tags: ['autodocs'],
}

export const Default = {
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: {
        code: CardsSource,
      },
    },
  },
}
