import TypographyProse from './TypographyProse.vue'

/**
 * Style any vanilla HTML elements with Tailwindcss Typography `prose` classes.
 *
 * Read more about Tailwindcss Prose at https://github.com/tailwindlabs/tailwindcss-typography
 */
export default {
  title: 'Foundation/Typography/With Prose',
  component: TypographyProse,
  tags: ['autodocs'],
}

export const Default = {
  parameters: {
    docs: {
      source: {
        code: `
<div class="prose prose-neutral max-w-none dark:prose-invert">
  <!-- vanilla HTML elements. -->
</div>
        `,
      },
    },
  },
}
