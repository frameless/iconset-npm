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
  <html lang="nl" class="utrecht-document">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/@opengemeenten/iconset-web-component/dist/esm/icons.js" type="module"></script>
    <link rel="stylesheet" href="https://unpkg.com/@utrecht/component-library-css/dist/index.css"/>
    <title>OpenGemeenten iconenset</title>
    <style>

    :root {
    --root-font-size: 1rem;
    --root-font-family--primary: "MaisonNeue", sans-serif;
    --root-font-family--secondary: "MaisonNeueExtended", sans-serif;
    --root-font-weight--light: 500;
    --root-font-weight--normal: 500;
    --root-font-weight--semi-bold: 600;
    --root-font-weight--bold: 600;

    --root-line-height: 1.6;

    --root-heading-1-color: var(--root-color-text);
    --root-heading-2-color: var(--root-color-text);
    --root-heading-3-color: var(--root-color-text);
    --root-heading-4-color: var(--root-color-text);

    --root-heading-1-color-link: var(--root-color-text-link);
    --root-heading-2-color-link: var(--root-color-text-link);
    --root-heading-3-color-link: var(--root-color-text-link);
    --root-heading-4-color-link: var(--root-color-text-link);

    --root-heading-1-color-link--hover: var(--root-color-text-link--hover);
    --root-heading-2-color-link--hover: var(--root-color-text-link--hover);
    --root-heading-3-color-link--hover: var(--root-color-text-link--hover);
    --root-heading-4-color-link--hover: var(--root-color-text-link--hover);

    --utrecht-document-font-family: var(--root-font-family--primary);
    --utrecht-document-font-size: var(--root-font-size);
    --utrecht-document-line-height: var(--root-line-height);

    --utrecht-link-color: var(--root-color-text-link);
    --utrecht-link-hover-color: var(--root-color-text-link--hover);
    --utrecht-link-text-decoration-offset: var(--text-underline-offset, 0.1rem);

    --root-heading-1-family: var(--root-font-family--secondary);
    --root-heading-2-family: var(--root-font-family--secondary);
    --root-heading-3-family: var(--root-font-family--secondary);
    --root-heading-4-family: var(--root-font-family--secondary);

    --root-heading-1-size: 2.222em;
    --root-heading-2-size: 1.777em;
    --root-heading-3-size: 1.3em;
    --root-heading-4-size: 1em;

    --root-heading-1-style: normal;
    --root-heading-2-style: normal;
    --root-heading-3-style: normal;
    --root-heading-4-style: normal;

    --root-heading-1-weight: var(--root-font-weight--normal);
    --root-heading-2-weight: var(--root-font-weight--normal);
    --root-heading-3-weight: var(--root-font-weight--normal);
    --root-heading-4-weight: var(--root-font-weight--normal);

    --root-heading-1-line-height: 1.25;
    --root-heading-2-line-height: 1.25;
    --root-heading-3-line-height: 1.4;
    --root-heading-4-line-height: var(--root-line-height, 1.6);

    --utrecht-heading-1-font-size: var(--root-heading-1-size);
    --utrecht-heading-1-font-family: var(--root-heading-1-family);
    --utrecht-heading-1-font-weight: var(--root-heading-1-weight);
    --utrecht-heading-1-line-height: var(--root-heading-1-line-height);

    --utrecht-heading-2-font-size: var(--root-heading-2-size);
    --utrecht-heading-2-font-family: var(--root-heading-2-family);
    --utrecht-heading-2-font-weight: var(--root-heading-2-weight);
    --utrecht-heading-2-line-height: var(--root-heading-2-line-height);

    --utrecht-heading-3-font-size: var(--root-heading-3-size);
    --utrecht-heading-3-font-family: var(--root-heading-3-family);
    --utrecht-heading-3-font-weight: var(--root-heading-3-weight);
    --utrecht-heading-3-line-height: var(--root-heading-3-line-height);

    --utrecht-heading-4-font-size: var(--root-heading-4-size);
    --utrecht-heading-4-font-family: var(--root-heading-4-family);
    --utrecht-heading-4-font-weight: var(--root-heading-4-weight);
    --utrecht-heading-4-line-height: var(--root-heading-4-line-height);

    --utrecht-page-max-inline-size: 45.250rem;

    --opengemeenten-icon-color: rgb(15, 73, 189);
    --opengemeenten-icon-size: 48px;
      }

    .utrecht-heading-1 {
      padding-block: 2rem;
    }

    section {
      padding-block: 2rem;
    }

    section::target {
      background-color: silver;
      outline: 1px solid rgb(171, 178, 191);
    }

    .utrecht-heading-4 {
      --opengemeenten-icon-size: 48px;
    }

      pre {
        display: block;
        overflow-x: auto;
        padding: 0.5em;
        color: rgb(171, 178, 191);
        background: rgb(40, 44, 52);
      }
      .grid-container {
        --min: 10ch;
        --gap: 1rem;
        --opengemeenten-icon-size: 96px;

        display: grid;
        grid-gap: var(--gap);
        grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));
      }
      .container {
        max-width: 90%;
        margin-inline: auto;
      }

      .opengemeenten-icon {
        display: inline-block;
        max-block-size: var(--opengemeenten-icon-size);
        max-inline-size: var(--opengemeenten-icon-size);
      }
      .utrecht-header-4 .opengemeenten-icon {
        margin-inline-end: 1em;
      }
    </style>
  </head>

<body class="container">
<div class="utrecht-page">
<main class="utrecht-page-content">
<h1 class="utrecht-heading-1">OpenGemeenten iconenset voor&nbsp;NL&nbsp;Design&nbsp;System</h1>
<p class="utrecht-paragraph">De code open source beschikbaar: <a href="https://github.com/frameless/iconset-npm" class="utrecht-link" rel="external noreferer noopener">frameless/iconset-npm op GitHub</a>.</p>
<p class="utrecht-paragraph">De licentie is: <a href="https://creativecommons.org/publicdomain/zero/1.0/" class="utrecht-link" rel="external noreferer noopener">CC0 1.0 Universal</a>.</p>
<div class="grid-container">
${iconsNames.map((svg) => `<a href="#${svg}" title="${svg}"><${svg}></${svg}></a>`).join('\n')}
</div>
<section>
<h3 class="utrecht-heading-3">Gebruik iconen in HTML</h3>
<p class="utrecht-paragraph">Gebruik de <i lang="en">custom element</i> van de icoon om snel aan de slag te gaan:</p>
<pre>&lt;opengemeenten-icon-aanmelden&gt;&lt;/opengemeenten-icon-aanmelden&gt;</pre>
<p class="utrecht-paragraph">De <i lang="en">custom element</i> voor de icoon werkt pas als je de JavaScript toevoegt, die helpt om alleen de iconen te downloaden die op de pagina worden gebruikt.</p>
<pre>
&lt;script
  src="https://unpkg.com/@opengemeenten/iconset-web-component/dist/esm/icons.js"
  type="module"&gt;
&lt;/script&gt;
</code>
</pre>
</section>

<section>
<h2 class="utrecht-heading-2">Gebruik iconen in front-end frameworks</h2>
<p class="utrecht-paragraph">Installeer de iconenset via npm, het pakketje is: <a href="@opengemeenten/iconset-web-component" class="utrecht-link">@opengemeenten/iconset-web-component</a>.</p>
<pre>npm install --save-dev @opengemeenten/iconset-web-component</pre>
<h3 class="utrecht-heading-3">React (bijvoorbeeld Gatsby.js, Next.js)</h3>
<p class="utrecht-paragraph">Installeer beide pakketjes zodat je de iconen hebt, en het pakketje met React componenten zodat de code weet welke iconen allemaal bestaan.</p>
<pre>
npm install --save-dev @opengemeenten/iconset-web-component
npm install --save-dev @opengemeenten/iconset-react
</pre>
<p class="utrecht-paragraph">Voeg daarna de iconen toe aan je code, bijvoorbeeld zo:</p>
<pre>
import React from "react";
import { OpengemeentenIconActueel } from "@opengemeenten/iconset-react";

export const App = () => {
  return &lt;OpengemeentenIconActueel /&gt;
}
</pre>
</section>

<section>
<h3>Visueel ontwerp instellen: kleur en formaat</h3>
<p class="utrecht-paragraph">Om je ontwerp te kiezen kun je CSS <i lang="en">custom properties</i> gebruiken. Je kunt bijvoorbeeld zelf een class name maken voor een bepaald soort icoon:</p>
<pre>
.my-large-icon {
  --opengemeenten-icon-size: 4.2rem;
  --opengemeenten-icon-color: rgb(15, 73, 189);
}
</pre>
<p class="utrecht-paragraph">Noem je eigen class name in de HTML bij je icoon:</p>
<pre>&lt;opengemeenten-icon-aanmelden class="my-large-icon"&gt;
&lt;/opengemeenten-icon-aanmelden&gt;</pre>
<p class="utrecht-paragraph">Je kunt ook alle iconen binnen een bepaalde context een ontwerp meegeven, bijvoorbeeld iconen in een button:</p>
<pre>
button {
  --opengemeenten-icon-size: 1.5rem;
  --opengemeenten-icon-color: rgb(15, 73, 189);
}
</pre>
<p class="utrecht-paragraph">Alle iconen uit deze iconenset krijgen dan automatisch het goede ontwerp, als ze in een button zijn geplaatst:</p>
<pre>
&lt;button&gt;
  &lt;opengemeenten-icon-gebruikersvraag&gt;
  &lt;/opengemeenten-icon-gebruikersvraag&gt;
  Stel nu een vraag
&lt;/button&gt;
</pre>
</section>

<section>
<h3>Toegankelijkheid</h3>
<p class="utrecht-paragraph">Als je een button maakt die alleen een icoon bevat, en geen zichtbare tekst, dan <strong>moet</strong> je ook een label toevoegen aan de button. Bijvoorbeeld:</p>
<pre>
&lt;button aria-label="Stel nu een vraag"&gt;
  &lt;opengemeenten-icon-gebruikersvraag&gt;
  &lt;/opengemeenten-icon-gebruikersvraag&gt;
&lt;/button&gt;
</pre>
</section>

<section>
    ${iconsNames
      .map(
        (svg) => `<section id="${svg}">
          <h3 class="utrecht-heading-3">${svg}</h4>
          <div><${svg} class="opengemeenten-icon"></${svg}></div>
          <p class="utrecht-paragraph">Kopieer deze code om het in HTML te gebruiken:</p>
          <pre>&lt;${svg}&gt;&lt;/${svg}&gt;</pre>
          <p class="utrecht-paragraph">Kopieer deze code om het in React te gebruiken:</p>
          <pre>
import { ${upperFirst(camelCase(svg))} } from "@opengemeenten/iconset-react";

&lt;${upperFirst(camelCase(svg))} /&gt;</pre>
        </section>`,
      )
      .join('')}
    </section>
  </main>
</div>
</body>
</html>
  `;
};
