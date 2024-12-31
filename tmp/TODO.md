# WIP

# General TODO
  
- [ ] add success, info, warning and change destructive to error variant to components:
  - [ ] alert
  - [ ] badge
  - [ ] button, includes accent
  
- [ ] theme generator
  see
  - https://tinte.railly.dev/shadcn
  - https://customizer.railly.dev/
  - https://www.radix-ui.com/colors
  - https://www.radix-ui.com/colors/custom

- [ ] create build in CI/CD pipeline using github action

- [ ] update Calendar able to select month and year by default
- [ ] refactor datepicker stories to use Form

- [ ] Carousel lazy laod images
- [ ] better Carousel docs

- [x] move tabs under panel
- [ ] create story for tabs that uses router

- [ ] ssr branch: branch for deployment as ssr
- [ ] pwa branch: branch for deplyoment as pwa

- [ ] documentation for directory structure

- [ ] Search input have it own story
  `stories/data-entry/InputText/WithIcon.vue`
  
- [ ] File Input / File Upload
- [ ] Use `text-destructive-foreground` on Input component
  
- [ ] move `df` (the dateformatter) function to utils
  read more about: https://www.radix-vue.com/utilities/use-date-formatter
- [ ] Year select on Datepicker
- [ ] refactor Daterangepicker story to use Form component

- [ ] template generator using plop: https://plopjs.com/documentation

- [x] unpluggin the `Form` and `Field as FormField` from `vee-validate`
- [x] unpluggin common methods like `ref`, `onMounted`.
  check whether https://github.com/unplugin/unplugin-auto-import is needed since
  we already have `unpluggin-vue-components`
  
- ~~[ ] Datetime picker unable to set year~~ shadcn-vue updated this
  see https://www.shadcn-svelte.com/docs/components/calendar how they implement it
  
- [x] VCalendar story
- [x] Sonner
- [x] Add `buttonVariant` function to helpers
- [x] BUG: drawer story, trigger button not showing on mobile
- [x] refactor: `unplugin-vue-components` should be dev dependencies

- [x] vue-router
- [x] pinia store
- [x] upluggin-vue-components
- [x] vite-svg-loader
- [x] lucide-vue-next
- [x] storybook

- [x] drawer error
- [x] carousel error regarding vaul-vue
- [x] toast error
    
- [x] Underline Tabs bottom border transition animation

- Component Groups
  - Foundation
  - Graphic Elements
  - Navigation
    - [ ] Steps
    - [ ] Tour
  - Overlays
  - Feedback
  - [ ] Form
    - [ ] Password
    - [ ] Rating
    - [ ] Slider
    - [ ] Switch
    - [ ] TimePicker
  - Data Entry
    - [ ] Transfer
    - [ ] File Upload
  - Data Display
    - [ ] Tree Structure
    - [ ] Timeline
  - Common
  - [ ] Misc (idea from ant design)
    - [ ] Comment
    - [ ] Statistic (or Card)
  - [ ] Pages (idea from ant design)
    - [ ] Success
    - [ ] Info
    - [ ] Warning
    - [ ] 402 (Submission Failed)
    - [ ] 403 Not Authorized
    - [ ] 404 Page not found
    - [ ] 500 (static page)
  
- TBD shadcn-ui components
  - [x] Separator
  - [x] Stepper
  - [x] Switch
  - [x] Textarea
  - [x] Toggle
  - [x] Toggle Group
  - [x] Resizable
  - [x] Scroll Area
  
- [x] Installation step
  - `tiged acfatah/vue-shadcn-spa target`
  - `git add -f .vscode` forcibly add vscode configurations
  - `rm -rf .git/hooks && npx simple-git-hooks`
  - `npm install`
- [ ] Tab using `overflow-scroll`, see https://github.com/shadcn-ui/ui/issues/2740

## Storybook

- [x] How to make Colors.mdx dynamically change based on style/app.css
- [x] SVG icon Story seems to have problem when changing width or height
- [x] Design Token Story seems to be broken if it is not css color value
- [x] Implement subcomponents
  https://storybook.js.org/docs/writing-stories/stories-for-multiple-components
- [x] BUG: shadcn sidebar01, dropdown blinking after clicked

Table of Content

- Readme
- Getting Started
  - [ ] Design Principles
  - [ ] Aim and Goals

## Layouts

- [x] slot error when using dynamic component with vue-router
  see https://stackoverflow.com/a/66941080/1866528

- [ ] SidebarLayout
- [ ] DualSidebarLayout
- [x] toggleable sidebar
- [ ] add transition to RouterView 
- [ ] refactor RouterLink, regarding active link. also replace a tag usage
- [ ] refactor: SheetMenu is repeated. Create import menus.json data


## Components / Blocks

- [ ] Dark Theme switcher component that includes system preference
- [x] BUG: autoform radio, with incorrect tick icon

### Alert

- [ ] add variant for success, info, warning

### Button

- [x] Icon button
- [x] Button with loading

## Components Checklist

Foundation (Priority: High)
  - [x] Border Radii
  - [x] Colors (includes text, background, border and ring)
    - foreground
    - background
    - primary
    - secondary
    - accent
    - muted
    - success
    - info
    - warning
  - [x] Fonts
    - Font Families
    - Font Weights
    - Font Sizes
  - [ ] Shadows
  - [ ] Spacing
    - Margin
    - Padding
  - [x] Typography
    - Headers (h1-h6)
    - Body Text
    - Lead Text
    - Caption
  - [ ] Emoji  (Optional for Later Iterations)
  
Common Elements  (Priority: High)
  - [x] Alert
    - [ ] Variants: Success, Warning, Error, Info
  - [x] Badge
    - [ ] Variants: Success, Warning, Error, Info
  - [x] Button
    - [x] Button Group
    - [ ] Floating Button
    - [ ] Variants: Primary, Secondary, Accent, Disabled, Loading
  - [x] Card
    - [ ] Variants: Default, With Image, Stats
  - [ ] Chip
  - [x] Collapsible
  - [ ] Progress Bar
    - [ ] Radial
    - [x] Bar
  - [ ] Rating Display
  - [ ] Search Box
  - [x] Tags Input

Graphic Elements (Priority: Medium)
  - [x] Aspect Ratio
  - [x] Avatar
  - [ ] Avatar Group
  - [x] Carousel
  - [ ] Galleria
  - [x] Lucide Icon
  - [x] Image
  - [x] Lazy Loading
  - [ ] Parallax
  - [x] SVG Icon
  - [x] Iconify icon

Page Structure (Priority: Medium)
  - [ ] Header
  - [x] Sidenav
  - [ ] Toolbar
  - [x] Drawer

Layout (Priority: Medium)
  - Inline Bordered Items
  
Menu (Priority: Medium)
  - [x] Breadcrumb
  - [x] ContextMenu**
  - [x] DropdownMenu**
  - [ ] **Menu
  - [x] Menubar
  - [ ] SidebarMenu
  - [ ] ~~MegaMenu~~ Similar to NavigationMenu
  - [ ] PanelMenu
  - [ ] Tieredmenu

Navigation (Priority: Medium)
  - [x] Accordion
  - [ ] ~~Link~~ Use RouterLink
  - [x] Tabs

Forms (Priority: Medium)
  - [x] Button
  - [x] Checkbox
  - [x] Combobox
  - [x] Command
  - [ ] Color Picker <<!-- low priority --Default>
  - [x] DatePicker
  - [ ] DateRangePicker
  - [ ] Dropdown
  - [x] Field <!-- Includes label, hint and validationMessage -->
  - [ ] Grouped Button Control
  - [ ] Image Crop
  - [ ] Image Upload Preview
  - [x] Radio
  - [x] Radio Group
  - [ ] Rating
  - [x] Select
  - [ ] Slide Toggle
  - [ ] Slider
  - [x] Tag Input
  - [x] Text Input
  - [x] Text Area
  - [ ] TimePicker
  - [x] File Input

Misc (Priority: Medium)
  - [x] Loading / Spinner
  - [x] Placeholder
  - [x] Skeleton
  - [x] Divider

Charts (Priority: Low)
  - [x] Area Chart
  - [x] Bar Chart
  - [x] Donut Chart
  - [x] Line Chart

Overlays (Priority: Medium)
  - [x] ContextMenu
  - [x] Dialog
  - [x] Dropdown Menu
  - [x] Modal
  - [ ] Message Bar  
  - [x] Popover
  - [x] Tooltip
  - [x] Toast
  
Data Grid (Priority: Medium)
  - [x] Table
  - [x] Datatable
	- [x] Reusable
    - [x] Advanced Pagination
	  - https://tanstack.com/table/latest/docs/framework/react/examples/editable-data

Features (Priority: Low)
  - [x] Calendar
  - [x] Chart
  - [ ] Chat Bubble
  - [ ] Countdown
  - [ ] Persona <!-- Refer to Fluent Design -->
  - [ ] Teaching Popover
  - [ ] Tree
  
Libraries
 - [ ] [vee-validate]
 - [ ] [@internationalized/date](https://github.com/adobe/react-spectrum/tree/main/packages/@internationalized/date)
 - [ ] [radix-vue](https://https://www.radix-vue.com)
 - [ ] [embla-carousel-vue](https://github.com/davidjerleke/embla-carousel)
 - [x] ~~[flatpickr](https://github.com/flatpickr/flatpickr)~~ Using default shadcn datepicker
 - [x] ~~[ag-grid](https://ag-grid.com)~~ Replaced with https://tanstack.com/table/latest
 
Packages 
 - [ ] list down all used libraries- list down all used libraries

Motion

Pages


Guides

- [ ] https://www.radix-vue.com/guides/dates

## Readme

- This repository,
  - is NOT a components library
  - is NOT a design library
  - is NOT a front-end framework
  - does NOT tied to ShadCN/ui design
  - does NOT tied to any spedific UX design framework
- But instead,
  - a collection of reusable Vue components
  - uses Tailwindcss
  - leverage headless component libraries
  - uses ShadCN/ui as the base design but can be modified to suit any design
  - provides a design system adaptable to any UX design framework
- It,
  - promotes accessibility and adherence to web standards
  - focuses on component-driven development for consistency and maintainability
  - supports rapid prototyping with pre-built, ready-made components
  - includes extensive documentation, examples and visual testing using Storybook
  - improve collaboration between design and development teams
  - **is designed to be scalable and future-proof (how?)
  
This repository serve as the foundational front-end layer, crafted with reusable
Vue components, styled with Tailwind CSS that encompasses a design system using 
modern development tools. Adding a REST API would complete the back-end integration, 
transforming it into a full web application.

## Guidelines (New Section)
  - **Color Hierarchy**: Define usage for primary, secondary, accent, and muted colors across UI elements.
  - **Spacing Conventions**: Establish global margin and padding scales.
  - **Typography Rules**: Set rules for text hierarchy (e.g., header sizes, body, captions).
  - **Accessibility**: Ensure components adhere to accessibility standards (e.g., aria labels, keyboard navigation).
  - **Component States**: Define hover, active, focus, disabled, and error states for interactive components (Buttons, Links, Inputs).
  
Who uses
- Digital Designers
  Rely on standardized components to create user-friendly and cohesive experiences.
- Web & Mobile Developers
  Utilize the system to build responsive, accessible, and consistent interfaces.
- Digital Product Owners
  Ensure product development aligns with Brands design principles and standards.  
  
## Inspiration

- https://radix-ui.com

## References

- [Radix Vue](https://radix-vue.com)
- [Shadcn Vue](https://www.shadcn-vue.com/examples/dashboard.html)
- [Ark UI](https://ark-ui.com/vue/docs/components/field)
- [Fluent UI](https://master--628d031b55e942004ac95df1.chromatic.com/)
- [BaseWeb](https://baseweb.design/components/)
- [Emojipedia](https://emojipedia.org/)

