// component.tsx
const { camelCase, kebabCase, upperFirst } = require('lodash');

exports.component = (name, svg) => {
  const ComponentName = upperFirst(camelCase(name));
  const webComponentName = kebabCase(name);

  return `import { Component, h } from '@stencil/core';

@Component({
  tag: '${webComponentName}',
  shadow: true,
})
export class ${ComponentName} {
  render() {
    return (
      <utrecht-icon-container>
        ${svg}
      </utrecht-icon-container>
    );
  }
}
`;
};

// component.stories.tsx
exports.story = (name) => {
  const ComponentName = upperFirst(camelCase(name));
  const webComponentName = kebabCase(name);

  return `export default {
  title: 'Components/${ComponentName}',
};

const Template = () => '<${webComponentName}></${webComponentName}>';

export const Default${ComponentName} = Template.bind({});

Default${ComponentName}.args = {};
`;
};

// component.spec.tsx
exports.test = (name) => {
  const ComponentName = upperFirst(camelCase(name));
  const webComponentName = kebabCase(name);
  return `import { ${ComponentName} } from './${webComponentName}';
describe('${ComponentName}', () => {
  it('builds', () => {
    expect(new ${ComponentName}()).toBeTruthy();
  });
});
`;
};

exports.generateIconsName = (iconsNames) => {
  return `export const iconsInfo = {
  name: ${JSON.stringify(iconsNames)},
  length: ${iconsNames.length},
}`;
};
