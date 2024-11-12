import { Toaster } from '~/components/ui/toast'
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import DestructiveComponent from './Destructive.vue'
import DestructiveSource from './Destructive.vue?raw'
import SimpleComponent from './Simple.vue'
import SimpleSource from './Simple.vue?raw'
import WithActionComponent from './WithAction.vue'
import WithActionSource from './WithAction.vue?raw'
import WithTitleComponent from './WithTitle.vue'
import WithTitleSource from './WithTitle.vue?raw'

/**
 * Toasts are used to display short messages to the user.
 *
 * We are using Radix Toast components.
 * Read more at [https://www.radix-vue.com/components/toast](https://www.radix-vue.com/components/toast)
 */
export default {
  title: 'Overlays/Toast',
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
      <DefaultStory v-bind="args" />
      <Teleport to="body">
        <Toaster />
      </Teleport>
    `,
  }),
}

export const Simple = {
  parameters: {
    docs: {
      source: {
        code: SimpleSource,
      },
    },
  },

  render: args => ({
    components: { SimpleComponent, Toaster },

    setup() {
      return { args }
    },

    template: `
      <SimpleComponent v-bind="args" />
      <Teleport to="body">
        <Toaster />
      </Teleport>
    `,
  }),
}

export const WithTitle = {
  parameters: {
    docs: {
      source: {
        code: WithTitleSource,
      },
    },
  },

  render: args => ({
    components: { WithTitleComponent, Toaster },

    setup() {
      return { args }
    },

    template: `
      <WithTitleComponent v-bind="args" />
      <Teleport to="body">
        <Toaster />
      </Teleport>
    `,
  }),
}

export const WithAction = {
  parameters: {
    docs: {
      source: {
        code: WithActionSource,
      },
    },
  },

  render: args => ({
    components: { WithActionComponent, Toaster },

    setup() {
      return { args }
    },

    template: `
      <WithActionComponent v-bind="args" />
      <Teleport to="body">
        <Toaster />
      </Teleport>
    `,
  }),
}

export const Destructive = {
  parameters: {
    docs: {
      source: {
        code: DestructiveSource,
      },
    },
  },

  render: args => ({
    components: { DestructiveComponent, Toaster },

    setup() {
      return { args }
    },

    template: `
      <DestructiveComponent v-bind="args" />
      <Teleport to="body">
        <Toaster />
      </Teleport>
    `,
  }),
}
