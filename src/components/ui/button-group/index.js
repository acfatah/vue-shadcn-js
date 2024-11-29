import { cva } from 'class-variance-authority'

export { default as ButtonGroup } from './ButtonGroup.vue'
export { default as ButtonGroupItem } from './ButtonGroupItem.vue'

export const buttonGroupVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors first:rounded-l-[--radius] last:rounded-r-[--radius] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[orientation=vertical]:first:rounded-bl-none data-[orientation=vertical]:first:rounded-tr-[--radius] data-[orientation=vertical]:last:rounded-bl-[--radius] data-[orientation=vertical]:last:rounded-tr-none',
  {
    variants: {
      variant: {
        default:
          'bg-secondary text-secondary-foreground shadow hover:bg-secondary/80 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:hover:bg-primary/90',
        outline:
          'bg-background shadow-sm hover:bg-accent hover:text-accent-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:hover:bg-primary/90',
      },

      size: {
        default: 'h-9 px-4 py-2',
        xs: 'h-7 px-2',
        sm: 'h-8 px-3 text-xs',
        lg: 'h-10 px-8',
        icon: 'size-9',
      },
    },

    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)
