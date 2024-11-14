import { Toaster } from '~/components/ui/sonner'
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import DialogWithToastStory from './DialogWithToast.vue'
import DialogWithToastSource from './DialogWithToast.vue?raw'

/**
 * The Sonner component is provided by [vue-sonner][1], which is a Vue port of Sonner,
 * originally created by [Emil Kowalski][2] for React.
 *
 * ## Usage
 *
 * By default, the component is not added. Replace the default Toaster with the following
 * component.
 *
 * ```
 * <script setup>
 * import { Toaster } from '~/components/ui/sonner'
 * </script>
 *
 * <template>
 *   <Teleport to="body">
 *     <Toaster />
 *   </Teleport>
 *   <!-- other components -->
 * </template>
 * ```
 *
 * [1]: https://vue-sonner.vercel.app
 * [2]: https://twitter.com/emilkowalski_
 */
export default {
  title: 'Misc/Sonner',
  component: DefaultStory,
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

export const DialogWithToast = {
  parameters: {
    docs: {
      source: {
        code: DialogWithToastSource,
      },
    },
  },

  render: args => ({
    components: { DialogWithToastStory, Toaster },

    setup() {
      return { args }
    },

    template: `
      <Teleport to="body">
        <Toaster />
      </Teleport>
      <DialogWithToastStory v-bind="args" />
    `,
  }),
}
