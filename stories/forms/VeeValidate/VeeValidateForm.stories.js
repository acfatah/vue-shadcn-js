import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'

/**
 * Basic form using `Form` component.
 *
 * Read more at: https://www.shadcn-vue.com/docs/components/form.html<br />
 * Primitive API Reference: [https://vee-validate.logaretm.com/v4/guide/overview](https://vee-validate.logaretm.com/v4/guide/overview)<br />
 * Zod API Reference: [https://zod.dev/?id=basic-usage](https://zod.dev/?id=basic-usage)
 */
export default {
  title: 'Forms/VeeValidate Form',
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
    components: { DefaultStory },

    setup() {
      return { args }
    },

    template: `
      <DefaultStory v-bind="args" />
    `,
  }),
}
