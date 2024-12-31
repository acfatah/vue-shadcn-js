import { Toaster } from '~/components/ui/toast'
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import FileUpload from './FileUpload.vue'

/**
 * Custom file input with icon and preview.
 */
export default {
  title: 'Extras/File Upload',
  component: FileUpload,
  tags: ['autodocs'],
}

export const Default = {
  parameters: {
    docs: {
      source: {
        code: DefaultSource,
      },

    },
  },

  render: args => ({
    components: { DefaultStory, Toaster },

    setup() {
      return { args }
    },

    template: `
      <Teleport to="body">
        <Toaster />
      </Teleport>
      <DefaultStory v-bind="args" />
    `,
  }),
}
