import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import tailwind from 'tailwindcss'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'

const unpluginsComponents = [
  { name: 'Form', from: 'vee-validate' },
  { name: 'Field', as: 'FormField', from: 'vee-validate' },
  { name: 'FieldArray', from: 'vee-validate' },
]

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  plugins: [
    AutoImport({
      dts: false,
      imports: [
        'vue',
        'vue-router',
        {
          'vee-validate': [
            'useForm',
          ],
        },
      ],
    }),
    Components({
      dts: false,
      resolvers: [
        (componentName) => {
          return unpluginsComponents.find(
            component => component.as === componentName || component.name === componentName,
          )
        },
      ],
    }),
    vue(),
    svgLoader({
      svgoConfig: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                // viewBox is required to resize SVGs with CSS.
                // @see https://github.com/svg/svgo/issues/1128
                removeViewBox: false,
              },
            },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
})
