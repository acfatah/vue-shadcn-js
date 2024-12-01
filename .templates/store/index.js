export const storeGenerator = {
  description: 'Pinia store generator',

  prompts: [{
    type: 'input',
    name: 'name',
    message: 'store name in camelCase',
  }],

  actions: [
    {
      type: 'add',
      path: '../src/stores/{{name}}/actions.js',
      templateFile: 'store/files/actions.js.hbs',
    },
    {
      type: 'add',
      path: '../src/stores/{{name}}/getters.js',
      templateFile: 'store/files/getters.js.hbs',
    },
    {
      type: 'add',
      path: '../src/stores/{{name}}/index.js',
      templateFile: 'store/files/index.js.hbs',
    },
    {
      type: 'add',
      path: '../src/stores/{{name}}/state.js',
      templateFile: 'store/files/state.js.hbs',
    },
  ],
}

export default storeGenerator
