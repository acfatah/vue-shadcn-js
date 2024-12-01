import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import tailwind from 'tailwindcss'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'
import {
  componentResolvers,
  deepSearchDirs,
} from './src/components'

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
      dirs: deepSearchDirs,
      resolvers: componentResolvers,
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
