import {
  Form,
  FormAction,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form'
import ComponentStory from './ComponentStory.vue'
import ComponentSource from './ComponentStory.vue?raw'
import CompositionApiStory from './CompositionApiStory.vue'
import CompositionApiSource from './CompositionApiStory.vue?raw'

/**
 * Form components using `vee-validate` and `zod`.
 *
 * Read more at: https://www.shadcn-vue.com/docs/components/form.html<br />
 * Primitive API Reference: [https://vee-validate.logaretm.com/v4/guide/overview](https://vee-validate.logaretm.com/v4/guide/overview)<br />
 * Zod API Reference: [https://zod.dev/?id=basic-usage](https://zod.dev/?id=basic-usage)
 */
export default {
  title: 'Forms/VeeValidate Form',
  component: Form,
  subcomponents: {
    FormAction,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  },
  tags: ['autodocs'],
}

export const Default = {
  render: args => ({
    setup() {
      return { args }
    },

    template: `
      <pre>Refer to stories below...</pre>
    `,
  }),
}

/**
 * Using Single File Component (SFC).
 */
export const Component = {
  parameters: {
    docs: {
      source: {
        code: ComponentSource,
      },
    },
  },

  render: args => ({
    components: { ComponentStory },

    setup() {
      return { args }
    },

    template: `
      <ComponentStory v-bind="args" />
    `,
  }),
}
Component.storyName = 'Single File Component (SFC)'

/**
 * Using composition API and native HTML `form` element.
 *
 * Read more at: https://vee-validate.logaretm.com/v4/guide/composition-api/getting-started/
 */
export const CompositionApi = {
  parameters: {
    docs: {
      source: {
        code: CompositionApiSource,
      },
    },
  },

  render: args => ({
    components: { CompositionApiStory },

    setup() {
      return { args }
    },

    template: `
      <CompositionApiStory v-bind="args" />
    `,
  }),
}
CompositionApi.storyName = 'Composition API'
