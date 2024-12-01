import { cva } from 'class-variance-authority'

export { default as Kbd } from './Kbd.vue'

export const kbdVariants = cva(
  'pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted font-sans font-medium',
  {
    variants: {
      size: {
        xs: 'h-4 min-h-4 px-1 text-[10px]',
        sm: 'h-5 min-h-5 px-1 text-[11px]',
        md: 'h-6 min-h-6 px-1.5 text-[12px]',
        lg: 'h-8 min-h-8 px-2 text-[14px]',
      },
    },

    defaultVariants: {
      size: 'sm',
    },
  },
)
