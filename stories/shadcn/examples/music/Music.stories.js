import Music from './Music.vue'
import MusicSource from './Music.vue?raw'

export default {
  title: 'shadcn/Examples/Music',
  component: Music,
  tags: ['autodocs'],
}

export const Default = {
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: {
        code: MusicSource,
      },
    },
  },
}
