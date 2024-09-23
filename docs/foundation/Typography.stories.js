import Typography from './Typography.vue'
import TypographySource from './Typography.vue?raw'

export default {
  component: Typography,
  tags: ['autodocs'],
}

export const Default = {
  parameters: {
    docs: {
      source: {
        code: TypographySource,
      },
    },
  },
}
