// component.tsx
const { camelCase, kebabCase, upperFirst } = require('lodash');

exports.component = (name, title, svgChildren) => {
  const ComponentName = upperFirst(camelCase(name));
  const webComponentName = kebabCase(name);

  return `import { Component, h, Prop } from '@stencil/core';
import { v4 } from 'uuid';

@Component({
  tag: '${webComponentName}',
  shadow: true,
})
export class ${ComponentName} {
  @Prop({ reflect: true }) iconTitle?: string;
  @Prop({ reflect: true }) iconTitleId?: string;

  render() {
    const id = this.iconTitleId || v4();

    return (
      <utrecht-icon-container>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-labelledby={id}>
          {this.iconTitle ? <title id={id}>{this.iconTitle}</title> : <title id={id}>${title}</title>}
        ${svgChildren}
        </svg>
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
exports.test = (name, data) => {
  const ComponentName = upperFirst(camelCase(name));
  const webComponentName = kebabCase(name);
  return `import { newSpecPage } from '@stencil/core/testing';

import { ${ComponentName} } from './${webComponentName}';

describe('${ComponentName}', () => {
  it('builds', () => {
    expect(new ${ComponentName}()).toBeTruthy();
  });
});

it('should has an icon-title-id prop', async () => {
  const page = await newSpecPage({
    components: [${ComponentName}],
    html: '<${webComponentName} icon-title-id="1"></${webComponentName}>',
  });
  let component = page.doc.createElement('app-detail');
  page.root.appendChild(component);
  await page.waitForChanges();
  expect(page.rootInstance.iconTitleId).toBe('1');
});
`;
};

exports.generateIconsName = (iconsNames) => {
  return `export const iconsInfo = {
  name: ${JSON.stringify(iconsNames)},
  length: ${iconsNames.length},
}`;
};
