import Mail from './Mail.vue'
import MailSource from './Mail.vue?raw'

export default {
  title: 'shadcn/Examples/Mail',
  component: Mail,
  tags: ['autodocs'],
}

export const Default = {
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: {
        code: MailSource,
      },
    },
  },
}
