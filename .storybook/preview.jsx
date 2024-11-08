import { withThemeByClassName } from '@storybook/addon-themes'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { setup } from '@storybook/vue3'
import { createPinia } from 'pinia'
import theme from './theme.js'

/* eslint-disable */
import { Controls, Description, Primary, Stories, Subtitle, Title } from '@storybook/blocks'
import React from 'react'
/* eslint-enable */

import '../src/styles/app.css'

const pinia = createPinia()

setup((app) => {
  app.use(pinia)
})

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    backgrounds: { disable: true },

    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    options: {
      storySort: {
        order: [
          'Readme',
          'Foundation',
          ['Design Tokens', 'Colors'],
          'Graphic Elements',
          ['Lucide Icon'],
          'Navigation',
          'Overlays',
          [
            'AlertDialog',
            'Dialog',
            'Tooltip',
            ['Default', 'Primitive'],
          ],
          'Panels',
          'Forms',
          'Data Display',
          'Misc',
          ['Charts'],
          'Blocks',
          'shadcn',
          'Examples',
        ],
        locales: 'en-US',
      },
    },

    themes: {
      target: 'html',
    },

    docs: {
      theme,
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories includePrimary={false} />
        </>
      ),
    },
  },

  decorators: [
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),

    // Decorator to apply bg-color to stories in dark mode
    (_) => {
      const body = document.querySelector('body')
      const stories = document.querySelectorAll('.docs-story')
      const THEME_CLASS = 'bg-background'

      body?.classList.add(THEME_CLASS)
      stories.forEach((element) => {
        element.classList.add(THEME_CLASS)
      })

      return { template: `<story/>` }
    },
  ],
}

export default preview
