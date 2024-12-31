import { createContext } from 'radix-vue'
import { useTheme } from '~/components/composables'

export const storybookUrl = import.meta.env.VITE_STORYBOOK_URL || 'http://localhost:6006'
export const githubUrl = 'https://github.com/acfatah/vue-shadcn'

const { toggleTheme, colorMode } = useTheme()
const [useHomeView, provideHomeViewContext] = createContext('HomeView')

export const mainNav = [
  {
    title: 'About',
    href: '#about',
  },
  {
    title: 'Features',
    href: '#features',
  },
  {
    title: 'FAQ',
    href: '#faq',
  },
  {
    title: 'Docs',
    href: storybookUrl,
    external: true,
  },
]

export {
  colorMode,
  provideHomeViewContext,
  toggleTheme,
  useHomeView,
  useTheme,
}
