import { Toaster } from '~/components/ui/toast'
import APIExampleComponent from './ApiExample.vue'
import APIExampleSource from './ApiExample.vue?raw'
import ArraySupportComponent from './ArraySupport.vue'
import ArraySupportSource from './ArraySupport.vue?raw'
import ConfirmPasswordComponent from './ConfirmPassword.vue'
import ConfirmPasswordSource from './ConfirmPassword.vue?raw'
import ControlledComponent from './Controlled.vue'
import ControlledSource from './Controlled.vue?raw'
import DefaultComponent from './Default.vue'
import DefaultSource from './Default.vue?raw'
import DependenciesComponent from './Dependencies.vue'
import DependenciesSource from './Dependencies.vue?raw'
import SubObjectComponent from './SubObject.vue'
import SubObjectSource from './SubObject.vue?raw'

/**
 * Automatically generate a form from Zod schema.
 *
 * Read more at: https://www.shadcn-vue.com/docs/components/auto-form.html<br />
 * Primitive API Reference: https://vee-validate.logaretm.com/v4/guide/overview<br />
 * Zod API Reference: https://zod.dev/?id=basic-usage
 */
export default {
  title: '',
  component: DefaultComponent,
  // tags: ['autodocs'],
}

export const Default = {
  parameters: {
    docs: {
      source: {
        code: DefaultSource,
      },
    },
  },

  render: () => ({
    components: { DefaultComponent, Toaster },

    template: `
      <Teleport defer to="body">
        <Toaster />
      </Teleport>
      <DefaultComponent />
    `,
  }),
}

export const SubObject = {
  parameters: {
    docs: {
      source: {
        code: SubObjectSource,
      },
    },
  },

  render: () => ({
    components: { SubObjectComponent, Toaster },

    template: `
      <Teleport defer to="body">
        <Toaster />
      </Teleport>
      <SubObjectComponent />
    `,
  }),
}

export const Controlled = {
  parameters: {
    docs: {
      source: {
        code: ControlledSource,
      },
    },
  },

  render: () => ({
    components: { ControlledComponent, Toaster },

    template: `
      <Teleport defer to="body">
        <Toaster />
      </Teleport>
      <ControlledComponent v-bind="args" />
    `,
  }),
}

export const ConfirmPassword = {
  parameters: {
    docs: {
      source: {
        code: ConfirmPasswordSource,
      },
    },
  },

  render: () => ({
    components: { ConfirmPasswordComponent, Toaster },

    template: `
      <Teleport defer to="body">
        <Toaster />
      </Teleport>
      <ConfirmPasswordComponent />
    `,
  }),
}

export const APIExample = {
  parameters: {
    docs: {
      source: {
        code: APIExampleSource,
      },
    },
  },

  render: () => ({
    components: { APIExampleComponent, Toaster },

    template: `
      <Teleport defer to="body">
        <Toaster />
      </Teleport>
      <APIExampleComponent />
    `,
  }),
}

export const ArraySupport = {
  parameters: {
    docs: {
      source: {
        code: ArraySupportSource,
      },
    },
  },

  render: () => ({
    components: { ArraySupportComponent, Toaster },

    template: `
      <Teleport defer to="body">
        <Toaster />
      </Teleport>
      <ArraySupportComponent />
    `,
  }),
}

export const Dependencies = {
  parameters: {
    docs: {
      source: {
        code: DependenciesSource,
      },
    },
  },

  render: () => ({
    components: { DependenciesComponent, Toaster },

    template: `
      <Teleport defer to="body">
        <Toaster />
      </Teleport>
      <DependenciesComponent />
    `,
  }),
}
