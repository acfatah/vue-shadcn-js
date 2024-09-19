import postcss from 'postcss'
import css from '~/styles/app.css?raw'

export const tokens = {}

export async function parseCss() {
  try {
    const result = await postcss().process(css)
    const root = result.root

    // Walk through the CSS rules
    root.walkRules((rule) => {
      const theme = rule.selector === '.dark' ? 'dark' : 'default'

      if (!tokens[theme]) {
        tokens[theme] = {}
      }

      rule.walkDecls((decl) => {
        if (decl.prop.startsWith('--')) {
          tokens[theme][decl.prop] = decl.value
        }
      })
    })

    return tokens
  }
  catch (error) {
    console.error('Error parsing CSS:', error)
  }
}

parseCss()
