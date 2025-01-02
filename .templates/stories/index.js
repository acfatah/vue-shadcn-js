export const storyGenerator = {
  description: 'component story',

  prompts: [
    {
      type: 'input',
      name: 'path',
      message: 'component path, should end with /',
      default: '',
    },
    {
      type: 'input',
      name: 'name',
      message: 'component name in PascalCase',
    },
  ],

  actions: [
    {
      type: 'add',
      path: '../.storybook/stories/{{orValues path name}}/{{name}}.stories.js',
      templateFile: 'stories/files/Name.stories.js.hbs',
    },
    {
      type: 'add',
      path: '../.storybook/stories/{{orValues path name}}/DefaultStory.vue',
      templateFile: 'stories/files/DefaultStory.vue.hbs',
    },
  ],
}

export default storyGenerator
