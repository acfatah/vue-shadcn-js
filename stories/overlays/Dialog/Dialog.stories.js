import CustomCloseButtonComponent from './CustomCloseButton.vue'
import CustomCloseButtonSource from './CustomCloseButton.vue?raw'
import DefaultStory from './DefaultStory.vue'
import DefaultSource from './DefaultStory.vue?raw'
import DialogWithContextMenuTriggerComponent from './DialogWithContextMenuTrigger.vue'
import DialogWithContextMenuTriggerSource from './DialogWithContextMenuTrigger.vue?raw'
import FormDialogComponent from './FormDialog.vue'
import FormDialogSource from './FormDialog.vue?raw'
import ScrollBodyComponent from './ScrollBody.vue'
import ScrollBodySource from './ScrollBody.vue?raw'
import ScrollOverlayComponent from './ScrollOverlay.vue'
import ScrollOverlaySource from './ScrollOverlay.vue?raw'

/**
 * A modal dialog that interrupts the user with important content and expects a response.
 */
export default {
  title: 'Overlays/Dialog',
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

export const CustomCloseButton = {
  parameters: {
    docs: {
      source: {
        code: CustomCloseButtonSource,
      },
    },
  },

  render: args => ({
    components: { CustomCloseButtonComponent },

    setup() {
      return { args }
    },

    template: `
      <CustomCloseButtonComponent v-bind="args" />
    `,
  }),
}

export const ScrollBody = {
  parameters: {
    docs: {
      source: {
        code: ScrollBodySource,
      },
    },
  },

  render: args => ({
    components: { ScrollBodyComponent },

    setup() {
      return { args }
    },

    template: `
      <ScrollBodyComponent v-bind="args" />
    `,
  }),
}

export const ScrollOverlay = {
  parameters: {
    docs: {
      source: {
        code: ScrollOverlaySource,
      },
    },
  },

  render: args => ({
    components: { ScrollOverlayComponent },

    setup() {
      return { args }
    },

    template: `
      <ScrollOverlayComponent v-bind="args" />
    `,
  }),
}

export const Form = {
  parameters: {
    docs: {
      source: {
        code: FormDialogSource,
      },
    },
  },

  render: args => ({
    components: { FormDialogComponent },

    setup() {
      return { args }
    },

    template: `
      <FormDialogComponent v-bind="args" />
    `,
  }),
}

/**
 * To activate the Dialog component from within a Context Menu or Dropdown Menu,
 * you must encase the Context Menu or Dropdown Menu component in the Dialog component.
 * For more information, refer to the linked issue [here](https://github.com/radix-ui/primitives/issues/1836).
 */
export const DialogWithContextMenuTrigger = {
  parameters: {
    docs: {
      source: {
        code: DialogWithContextMenuTriggerSource,
      },
    },
  },

  render: args => ({
    components: { DialogWithContextMenuTriggerComponent },

    setup() {
      return { args }
    },

    template: `
      <DialogWithContextMenuTriggerComponent v-bind="args" />
    `,
  }),
}
