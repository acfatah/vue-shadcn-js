# Vite, Vue 3 and shadcn/ui Single Page Application Boilerplate

<p style="display: inline-flex; gap: 0.25rem;">
  <a href="./LICENSE">
  <img alt="GitHub" src="https://img.shields.io/github/license/acfatah/vue-shadcn-spa?style=flat-square"></a>

  <a href="https://github.com/acfatah/vue-shadcn-spa/commits/main">
  <img alt="GitHub last commit (by committer)" src="https://img.shields.io/github/last-commit/acfatah/vue-shadcn-spa?display_timestamp=committer&style=flat-square"></a>
</p>

Streamlining Front-end Development with Modern Tools.

> [!IMPORTANT]
> I'm gradually moving to TypeScript. See [@acfatah/reka-dashboard](https://github.com/acfatah/reka-dashboard) repository to follow the latest updates.

> [!CAUTION]
> Significant updates have been made to `radix-vue` and `tailwindcss`. As a result, some components may become outdated!

## Usage

1. Copy the repository,

```bash
npx tiged acfatah/vue-shadcn-js
```

2. Include VSCode configurations in the repository. By default, the directory
   will be ignored.

```bash
git add -f .vscode
```

3. Initialize `simple-git-hooks`,

```bash
rm -rf .git/hooks && npx simple-git-hooks
```

4. Update and install dependencies

```bash
npm run update-deps
```

## Introduction

This template is built using the [Shadcn UI](https://ui.shadcn.com) design system
and integrates seamlessly with our front-end stack of Vite, Vue, and [TailwindCSS](https://tailwindcss.com)
to build a single page application.

- Designers from the UI/UX team will work with Figma components specifically tailored
  to the shadcn design system. These components are fully convertible to Vue components,
  ensuring design and development are aligned.

- **Component Driven User Interfaces**: An approach that focuses on building UIs
  using reusable components. This methodology promotes consistency, maintainability,
  and scalability by enabling developers to construct user interfaces from well-defined,
  isolated, and interchangeable components. [Learn more](https://www.componentdriven.org)

- The template includes ready-made common components, so front-end developers can focus
  on functionality rather than reinventing UI elements. This allows for faster development
  of front-end applications, improving efficiency and ensuring design consistency.

- Well documented components using [Component Story Format (CSF)](https://github.com/ComponentDriven/csf)

## Key Technologies

The Stacks:

- [Vite](https://vite.dev)
- [Vue](https://vuejs.org)
- [Tailwindcss](https://vuejs.org)
- [Shadcn UI](https://ui.shadcn.com)
- [Storybook](https://storybook.js.org)

Recommended Figma Components Library / File:

- [Tim Ng](https://www.figma.com/community/file/1314057472629730742)
- [hawkup](https://www.figma.com/community/file/1256349428272495041)

## Purpose and Goals

### Efficiency:

- **Reusable Components**: Most components will be created once and reusable, reducing
  repetitive work.
- **Faster Development**: Significantly reduces boilerplate code, allowing developers
  to quickly implement new features and functionalities instead of starting from scratch.
- **Streamlined Collaboration**: The alignment between Figma components and Vue components
  ensures a smooth workflow between design and development teams, reducing the back-and-forth
  between departments.
- **Rapid Prototyping**: With pre-built, ready-made components, developers can focus
  on core functionality, accelerating the development process.

### Maintainability:

- **Component Structure**: It is NOT a component library. It's a collection of reusable
  components that can be copied and pasted to compose more complex components or an application.
- **No Design Library**: The design of the components is separated from their implementation.
  There is no dependencies to any design library.
- **Consistent Updates**: The design system and components are updated and added
  over time, ensuring that the system evolves with the company's needs while maintaining
  consistency.

### Scalability:

- **Library-agnostic Components**: Provides the flexibility to integrate them into
  any project without being tied to a particular
  framework, ensuring greater adaptability.
- **Scalable Architecture**: As new features or components are required, they can
  be easily added or customized, allowing the project to grow without limitations
  imposed by external libraries.
- **Future-Proofing**: As the library of reusable components grows, it becomes easier
  to scale applications without needing to redesign or rebuild from scratch.

### Code Quality and Consistency:

- **Automatic Code Review with ESLint**: The template includes ESLint, which performs
  automatic code review, ensuring that code quality remains high throughout development.
- **Enforces Best Practices**: ESLint helps the team follow consistent coding standards,
  reducing potential errors and improving maintainability.
- **Continuous Improvement**: As the project evolves, ESLint can be configured to
  enforce new rules, ensuring that the codebase stays modern and clean.

## Technical Details

Key Features:

- Leverage the **Headless Component** architecture from [radix-vue](https://www.radix-vue.com)
  to implement essential UI components such as Modal, Dialog, Alert, Toast, and more.
  This allows for greater flexibility and customization.
- Consider the benefits of using **Code Snippets** versus a fully-featured Component
  Library for quick reuse, and libraries for complete, consistent solutions.
- Utilize Vue **unplugin libraries** to automatically import components and helpers,
  significantly reducing boilerplate code and improving development speed.
- Ensure automatic code formatting and linting are in place using **ESLint**, maintaining
  code quality and consistency across your project.
- Implement icons using Iconify, LucideIcon, RadixIcon, and SvgIcon, offering a wide
  range of options for iconography that enhances your application's UI.
- Use the **AutoForm** component for dynamically generated forms, reducing repetitive
  form-building tasks and ensuring consistency.
- Simplify complex data representation with streamlined **DataTable** components,
  making data management and display more efficient.
