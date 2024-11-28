import fs from 'node:fs'
import path from 'node:path'

/**
 * Resolver for Vue single-file components in `src/components` directory
 */
export default function (componentName) {
  const filePath = path.resolve(__dirname, `src/components/${componentName}.vue`)

  if (fs.existsSync(filePath))
    return { name: 'default', from: filePath }
}
