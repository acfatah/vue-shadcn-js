import fs from 'node:fs'
import path from 'node:path'

/**
 * Resolver for single-file Vue components in `src/components`
 */
export default function (componentName) {
  const filePath = path.resolve(__dirname, `src/components/${componentName}.vue`)

  if (fs.existsSync(filePath))
    return { name: 'default', from: filePath }
}
