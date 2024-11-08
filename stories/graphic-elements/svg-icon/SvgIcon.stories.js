import { SvgIcon } from '~/components/ui/svg-icon'

/**
 * Dynamically load svg icon from `src/assets/icons`.
 * We are using [`vite-svg-loader`](https://github.com/jpkleemans/vite-svg-loader)
 * to load the svg file.
 *
 * It's recommended to use `size-*` utility class to size the icon. The default
 * size is `size-6` or  `24px`. If `width` and `height` are provided, it will
 * take precedence over `size-*` utility.
 */
export default {
  title: 'Graphic Elements/SVG Icon',
  component: SvgIcon,
  tags: ['autodocs'],

  args: {
    name: 'menu',
  },

  argTypes: {
    name: {
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
      description: 'SVG icon file name in the `src/assets/icons` directory',
    },
  },
}

export const Default = {
  parameters: {
    docs: {
      source: {
        code: `
<!-- The icon file is 'src/assets/icons/menu.svg' -->
<SvgIcon name="menu" />`,
      },
    },
  },

  render: args => ({
    components: { SvgIcon },

    setup() {
      return { args }
    },

    template: '<SvgIcon v-bind="args" />',
  }),
}
