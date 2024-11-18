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
      'tailwindcss/no-custom-classname': [
        'warn',
        {
          whitelist: [
            'success',
            'info',
            'warning',
            'error',
            'destructive',
          ],
        },
      ],
    },
    ignores: [
      'package.json',
      'package-lock.json',
    ],
  },
  // @ts-ignore
  ...tailwindcss.configs['flat/recommended'],
)
