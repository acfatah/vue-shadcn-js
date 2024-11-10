import {
  ListRestart as ListRestartIcon,
  LoaderCircle as LoaderCircleIcon,
  Loader as LoaderIcon,
  LoaderPinwheel as LoaderPinwheelIcon,
  Menu as MenuIcon,
  RefreshCcwDot as RefreshCcwDotIcon,
  RefreshCcw as RefreshCcwIcon,
  RefreshCw as RefreshCwIcon,
  RefreshCwOff as RefreshCwOffIcon,
  RotateCcw as RotateCcwIcon,
  RotateCw as RotateCwIcon,
} from 'lucide-vue-next'
import DefaultComponent from './Default.vue'
import DefaultSource from './Default.vue?raw'

/**
 * Automatically import lucide icon as component by appending `Icon` to lucide icon name.
 *
 * It's recommended to use `size-*` utility class to size the icon. The default
 * size is `size-6` or  `24px`.
 *
 * Browse Lucide icons at https://lucide.dev/icons.<br>
 * Read more about Lucide icons at https://lucide.dev/guide/packages/lucide-vue-next.
 */
export default {
  title: 'Graphic Elements/Lucide Icon',
  component: DefaultComponent,
  tags: ['autodocs'],

  argTypes: {
    size: {
      control: 'number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 24 },
      },
      description: 'Icon size',
    },

    color: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'currentColor' },
      },
      description: 'Icon color',
    },

    strokeWidth: {
      control: 'number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 2 },
      },
      description: 'Icon stroke width',
    },

    absoluteStrokeWidth: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      description: 'Absolute stroke width',
    },

    defaultClass: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'lucide-icon' },
      },
      description: 'Default class',
    },
  },
}

export const Default = {
  component: MenuIcon,
  parameters: {
    docs: {
      source: {
        code: DefaultSource,
      },
    },
  },

  render: args => ({
    components: { DefaultComponent },

    setup() {
      return { args }
    },

    template: '<DefaultComponent v-bind="args" />',
  }),
}

const LoadingIconsTemplate = `
<div class="flex space-x-4">
  <LoaderIcon class="animate-spin" />
  <LoaderCircleIcon class="animate-spin" />
  <LoaderPinwheelIcon class="animate-spin" />
</div>
`

export const LoadingIcon = {
  parameters: {
    docs: {
      source: {
        code: LoadingIconsTemplate,
      },
    },
  },

  render: args => ({
    components: { LoaderIcon, LoaderCircleIcon, LoaderPinwheelIcon },

    setup() {
      return { args }
    },

    template: LoadingIconsTemplate,
  }),
}

const ReloadIconsTemplate = `
<div class="flex space-x-4">
  <ListRestartIcon />
  <RefreshCwOffIcon />
  <RefreshCcwIcon class="animate-spin" />
  <RefreshCcwDotIcon class="animate-spin" />
  <RefreshCwIcon class="animate-spin" />
  <RotateCcwIcon class="animate-spin" />
  <RotateCwIcon class="animate-spin" />
</div>
`

export const ReloadIcon = {
  parameters: {
    docs: {
      source: {
        code: ReloadIconsTemplate,
      },
    },
  },

  render: args => ({
    components: { ListRestartIcon, RefreshCcwIcon, RefreshCcwDotIcon, RefreshCwIcon, RefreshCwOffIcon, RotateCcwIcon, RotateCwIcon },

    setup() {
      return { args }
    },

    template: ReloadIconsTemplate,
  }),
}
