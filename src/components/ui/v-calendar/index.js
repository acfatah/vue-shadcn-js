export { default as Calendar } from './Calendar.vue'

export function isVCalendarSlot(slotName) {
  const validSlots = [
    'day-content',
    'day-popover',
    'dp-footer',
    'footer',
    'header-title-wrapper',
    'header-title',
    'header-prev-button',
    'header-next-button',
    'nav',
    'nav-prev-button',
    'nav-next-button',
    'page',
    'time-header',
  ]

  return validSlots.includes(slotName)
}
