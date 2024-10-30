import { create } from '@storybook/theming/create'

/**
 * https://storybook.js.org/docs/configure/user-interface/theming
 */
export default create({
  base: 'dark',

  // Typography
  fontBase: 'Inter, ui-sans-serif, system-ui, sans-serif, "Open Sans"',
  fontCode: 'monospace',

  brandTitle: 'acfatah/vue-shadcn-spa',
  brandUrl: 'https://github.com/acfatah/vue-shadcn-spa',

  colorPrimary: '#10bbd2',
  colorSecondary: '#41B883',

  // Toolbar default and active colors
  barHoverColor: '#10bbd2',
})
