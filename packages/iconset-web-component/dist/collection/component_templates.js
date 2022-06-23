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
      <opengemeenten-icon-container>
        ${svg}
      </opengemeenten-icon-container>
    );
  }
}
`;
};

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

exports.generateIconsSetPage = (iconsNames) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <script type="module" src="../../dist/esm/icons.js"></script>
    <title>Opengemeenten/iconset</title>

    <style>
    :root {
      --opengemeenten-icon-size: 3rem;
      --opengemeenten-icon-color: tomato;
    }

    h1, p{
      font-family: 'Roboto', sans-serif;
    }

    h1 {
      text-align: center;
      padding-block: 2rem;
    }

    .grid-container {
      --min: 30ch;
      --gap: 1rem;

      display: grid;
      grid-gap: var(--gap);
      grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
    }

    .container {
      max-width: 90%;
      margin-inline: auto;
    }
    </style>
</head>

<body class="container">
<h1>Opengemeenten/iconset</h1>
    <div class="grid-container">${iconsNames
      .map(
        (svg) => `<div> 
         <${svg}></${svg}>
         <p>${svg}</p> 
        </div>`,
      )
      .join('')}
    </div>
</body>
</html>
  `;
};
