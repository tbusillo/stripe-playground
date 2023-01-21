const requireField = (fieldName) => {
  return (value) => {
    if (String(value).length === 0) {
      return fieldName + ' is required';
    }
    return true;
  };
};

export default (plop) => {
  plop.setHelper('lowerCase', (text) => {
    return text.toLowerCase();
  });
  plop.setHelper('capitalizeFirst', (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  });
  plop.setGenerator('component', {
    description: 'Create a reusable component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
        validate: requireField('name')
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/Component/Component.tsx.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'plop-templates/Component/Component.test.tsx.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'plop-templates/Component/index.tsx.hbs'
      },
      {
        type: 'add',
        path: 'src/components/index.tsx',
        templateFile: 'plop-templates/injectable-index.ts.hbs',
        skipIfExists: true
      },
      {
        type: 'append',
        path: 'src/components/index.tsx',
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{pascalCase name}} from './{{pascalCase name}}';`
      },
      {
        type: 'append',
        path: 'src/components/index.tsx',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`
      }
    ]
  });
};
