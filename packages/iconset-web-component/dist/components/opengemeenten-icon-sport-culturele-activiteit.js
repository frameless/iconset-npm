import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconSportCultureleActiviteit$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M32.32 18.47a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1-5 0ZM12.5 10.86c1.36 0 2.46-1.1 2.46-2.46s-1.1-2.46-2.46-2.46-2.46 1.1-2.46 2.46 1.1 2.46 2.46 2.46ZM7.99 24.94c-1.1 0-1.99.89-1.99 1.99s.89 1.99 1.99 1.99 1.99-.89 1.99-1.99-.89-1.99-1.99-1.99Zm28.88 17.03-1.7-8.5h-.2v8.55h-3V27.8l-3.16 3.6c.55.35.9.92.9 1.77 0 .28-.05.54-.13.79-.27.79-.14 1.49.43 2.12.74.83 1.18 2.19.97 3.41-.27 1.51-1.33 2.56-4 2.56s-4-1.02-4-3.41c0-.94.36-1.87.94-2.53.58-.65.77-1.44.51-2.26-.11-.35-.15-.74-.09-1.14.13-.84.72-1.44 1.69-1.65v-8.02h1.94v4.78l3.81-4.34c.53-.56 1.38-1.12 2.31-1.12l3.01-.08c1.89 0 1.89-.71 1.89-1.4v-5.86h3v5.86c0 2.53-1.46 4.07-4.03 4.34 0 .08.02.16.02.24v6.73l1.96 9.77h-3.06Zm-8.72-7.91c0-.64-.52-1.15-1.15-1.15s-1.15.52-1.15 1.15.52 1.15 1.15 1.15 1.15-.52 1.15-1.15ZM13.8 17.37l1.19-1.69 2 3.31-3.92 2.39c-.06.04-.12.08-.18.13-.57.48-.9 1.18-.9 1.93v5.51h3v-5.22l3.51-2.14-.94 2.52c-.18.49-.1 1.04.23 1.46l2.68 3.39h3.83l-3.63-4.59 1.43-3.83c.41-1.09.23-2.29-.47-3.22l-2.42-3.19-.03.02-.07-.12h2.15l2.13 3.31 2.52-1.62-2.57-3.99c-.15-.23-.36-.42-.61-.54-.35-.17-5.79-.17-5.79-.17-.77-.02-2.07-.04-2.86.78-.05.05-2.66 4.2-2.66 4.2H8.03v3h3.56c.93 0 1.78-.91 2.23-1.63Z" }))));
  }
}, [1, "opengemeenten-icon-sport-culturele-activiteit"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-sport-culturele-activiteit", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-sport-culturele-activiteit":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconSportCultureleActiviteit$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconSportCultureleActiviteit = OpengemeentenIconSportCultureleActiviteit$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconSportCultureleActiviteit, defineCustomElement };
