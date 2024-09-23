import TypographyProse from './TypographyProse.vue'
import TypographyProseSource from './TypographyProse.vue?raw'

export default {
  component: TypographyProse,
  tags: ['autodocs'],
}

export const Default = {
  parameters: {
    docs: {
      source: {
        code: TypographyProseSource,
      },
    },
  },
}
