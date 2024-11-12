/**
 * Radix Vue components resolver.
 *
 * Read more: https://www.radix-vue.com/overview/getting-started.html
 */
export default function (componentName) {
  const components = [
    { name: 'Primitive', from: 'radix-vue' },
    { name: 'TagsInputRoot', from: 'radix-vue' },
    { name: 'ComboboxAnchor', from: 'radix-vue' },
    { name: 'ComboboxContent', from: 'radix-vue' },
    { name: 'ComboboxEmpty', from: 'radix-vue' },
    { name: 'ComboboxGroup', from: 'radix-vue' },
    { name: 'ComboboxInput', from: 'radix-vue' },
    { name: 'ComboboxItem', from: 'radix-vue' },
    { name: 'ComboboxItemIndicator', from: 'radix-vue' },
    { name: 'ComboboxLabel', from: 'radix-vue' },
    { name: 'ComboboxPortal', from: 'radix-vue' },
    { name: 'ComboboxRoot', from: 'radix-vue' },
    { name: 'ComboboxTrigger', from: 'radix-vue' },
    { name: 'ComboboxViewport', from: 'radix-vue' },
  ]

  return components.find(
    component => component.as === componentName || component.name === componentName,
  )
}
