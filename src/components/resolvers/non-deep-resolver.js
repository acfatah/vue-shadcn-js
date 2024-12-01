import fs from 'node:fs'
import path from 'node:path'
import { searchDirs } from '..'

/**
 * Non-deep components resolver
 */
export default function (componentName) {
  for (const dir of searchDirs) {
    const filePath = path.resolve(`${dir.replace(/\/$/, '')}/${componentName}.vue`)

    if (fs.existsSync(filePath))
      return { name: 'default', from: filePath }
  }
}
