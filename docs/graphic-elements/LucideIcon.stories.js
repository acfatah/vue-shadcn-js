import { Menu as IconMenu } from 'lucide-vue-next'

/**
 * Read more about Lucide icon at [https://lucide.dev](https://lucide.dev/guide/packages/lucide-vue-next).
 */
export default {
  title: 'Graphic Elements/Lucide Icon',
  component: IconMenu,
  tags: ['autodocs'],
}

export const Default = {
  component: IconMenu,
  parameters: {

    docs: {
      source: {
        code: `
<script setup>
import { Menu as IconMenu } from 'lucide-vue-next'
</scrpt>

<template>
  <IconMenu />
</template>
`,
      },
    },
  },

  args: {
    size: 24,
    color: 'currentColor',
    strokeWidth: 2,
    absoluteStrokeWidth: false,
    defaultClass: 'lucide-icon',
  },

  render: args => ({
    components: { IconMenu },

    setup() {
      return { args }
    },

    template: '<IconMenu v-bind="args" />',
  }),
}
