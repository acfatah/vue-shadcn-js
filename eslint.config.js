import antfu from '@antfu/eslint-config'
import tailwindcss from 'eslint-plugin-tailwindcss'

export default antfu(
  {
    formatters: {
      css: true,
      html: true,
      markdown: 'prettier',
    },
  },
  {
    rules: {
      'eslint-comments/no-unlimited-disable': 'off',
    },
  },
  // @ts-ignore
  ...tailwindcss.configs['flat/recommended'],
)
