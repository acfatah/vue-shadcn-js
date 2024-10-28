import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import tailwind from 'tailwindcss'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  plugins: [
    AutoImport({
      vueTemplate: true,
      dirs: [
        'src/components/helpers',
      ],
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
      dirs: [
        'src/components/ui/**',
        'src/components/misc/*',
        'src/components/*',
        'src/layouts/*',
      ],
      resolvers: [
        // vee-validate
        (componentName) => {
          const components = [
            { name: 'Form', from: 'vee-validate' },
            { name: 'Field', as: 'FormField', from: 'vee-validate' },
            { name: 'FieldArray', from: 'vee-validate' },
          ]

          return components.find(
            component => component.as === componentName || component.name === componentName,
          )
        },
        // lucide-vue-next
        (componentName) => {
          const [, name] = componentName.match(/([a-zA-Z0-9]+)Icon/) || []

          if (name)
            return { name, from: 'lucide-vue-next' }
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
