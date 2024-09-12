import { useColorMode, usePreferredDark, useStorage } from '@vueuse/core'
import { watchEffect } from 'vue'

export function useTheme() {
  const theme = useStorage('theme', 'light')
  const colorMode = useColorMode()
  const preferredDark = usePreferredDark()

  // Initialize the color mode based on user preference
  watchEffect(() => {
    if (theme.value)
      colorMode.value = theme.value
    else
      colorMode.value = preferredDark.value ? 'dark' : 'light'
  })

  watchEffect(() => {
    if (colorMode.value === 'dark')
      document.documentElement.classList.add('dark')
    else
      document.documentElement.classList.remove('dark')
  })

  function toggleTheme() {
    colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
    theme.value = colorMode.value
  }

  return {
    colorMode,
    toggleTheme,
  }
}
