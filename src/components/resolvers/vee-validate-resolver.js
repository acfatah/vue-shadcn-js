/**
 * unplugin-vue-components/vite resolver for vee-validate
 */
export default function (componentName) {
  const components = [
    { name: 'ErrorMessage', from: 'vee-validate' },
    { name: 'Field', as: 'FormField', from: 'vee-validate' },
    { name: 'FieldArray', from: 'vee-validate' },
    { name: 'Form', from: 'vee-validate' },
  ]

  return components.find(
    component => component.as === componentName || component.name === componentName,
  )
}
