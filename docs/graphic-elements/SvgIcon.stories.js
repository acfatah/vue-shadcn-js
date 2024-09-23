import { SvgIcon } from '~/components/ui/svg-icon'
import '~/styles/app.css'

/**
 * Load svg icon from `src/assets/icon`. We are using [`vite-svg-loader`](https://github.com/jpkleemans/vite-svg-loader)
 * to load the svg file.
 */
export default {
  title: 'Graphic Elements/SVG Icon',
  component: SvgIcon,
  tags: ['autodocs'],
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

  args: {
    name: 'menu',
  },

  render: args => ({
    components: { SvgIcon },

    setup() {
      return { args }
    },

    template: '<SvgIcon v-bind="args" />',
  }),
}
