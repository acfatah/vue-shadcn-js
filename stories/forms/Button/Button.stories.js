import { Button } from '~/components/ui/button'

/**
 * Displays a button or a component that looks like a button.
 */
export default {
  title: 'Forms/Button',
  component: Button,
  tags: ['autodocs'],

  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },

    size: {
      control: { type: 'select' },
      options: ['default', 'xs', 'sm', 'lg', 'icon'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },

    as: {
      type: 'string',
      table: {
        type: { summary: ['string | Component'] },
        defaultValue: { summary: 'button' },
      },
      description: '[AsTag](https://github.com/unovue/radix-vue/blob/main/packages/radix-vue/src/Primitive/Primitive.ts#L4)',
    },

    asChild: {
      type: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      description: '[Radix\'s Composition](https://www.radix-vue.com/guides/composition.html)',

    },

    class: {
      type: 'string',
      table: {
        type: { summary: 'string | array | object' },
        defaultValue: { summary: 'null' },
      },
      description: 'HTMLAttributes[\'class\']',
    },
  },
}

export const Default = {
  parameters: {
    docs: {
      source: {
        code: `<Button>Button</Button>`,
      },
    },
  },

  args: {
    text: 'Button',
  },

  render: args => ({
    components: { Button },

    setup() {
      return { args }
    },

    template: `
      <Button v-bind="args">{{ args.text }}</Button>
    `,
  }),
}
export const Secondary = {
  parameters: {
    controls: {
      exclude: ['variant'],
    },

    docs: {
      source: {
        code: `<Button variant="secondary">Button</Button>`,
      },
    },
  },

  args: {
    text: 'Button',
    variant: 'secondary',
  },

  render: args => ({
    components: { Button },

    setup() {
      return { args }
    },

    template: `
      <Button v-bind="args">{{ args.text }}</Button>
    `,
  }),
}

export const Destructive = {
  parameters: {
    controls: {
      exclude: ['variant'],
    },

    docs: {
      source: {
        code: `<Button variant="destructive">Button</Button>`,
      },
    },
  },

  args: {
    text: 'Button',
    variant: 'destructive',
  },

  render: args => ({
    components: { Button },

    setup() {
      return { args }
    },

    template: `
      <Button v-bind="args">{{ args.text }}</Button>
    `,
  }),
}

export const Outline = {
  parameters: {
    controls: {
      exclude: ['variant'],
    },

    docs: {
      source: {
        code: `<Button variant="outline">Button</Button>`,
      },
    },
  },

  args: {
    text: 'Button',
    variant: 'outline',
  },

  render: args => ({
    components: { Button },

    setup() {
      return { args }
    },

    template: `
      <Button v-bind="args">{{ args.text }}</Button>
    `,
  }),
}

export const Ghost = {
  parameters: {
    controls: {
      exclude: ['variant'],
    },

    docs: {
      source: {
        code: `<Button variant="ghost">Button</Button>`,
      },
    },
  },

  args: {
    text: 'Button',
    variant: 'ghost',
  },

  render: args => ({
    components: { Button },

    setup() {
      return { args }
    },

    template: `
      <Button v-bind="args">{{ args.text }}</Button>
    `,
  }),
}
