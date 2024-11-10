/**
 * `@vueuse/components` renderless components resolver.
 *
 * Read more: https://vueuse.org/guide/components
 */
export default function (componentName) {
  const components = [
    { name: 'UseImage', from: '@vueuse/components' },
  ]

  return components.find(
    component => component.as === componentName || component.name === componentName,
  )
}
