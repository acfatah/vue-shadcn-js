import Playground from './Playground.vue'
import PlaygroundSource from './Playground.vue?raw'

export default {
  title: 'shadcn/Examples/Playground',
  component: Playground,
  tags: ['autodocs'],
}

export const Default = {
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: {
        code: PlaygroundSource,
      },
    },
  },
}
