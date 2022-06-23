import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconLiefdadigheid$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M23.92 22c4.41 0 8.01-3.59 8.01-8.01s-3.59-8.01-8.01-8.01-8.01 3.59-8.01 8.01S19.5 22 23.92 22Zm-4.75-9.26c.28.03.56.06.84.06 2.23 0 4.25-.86 5.78-2.25.05.06.09.12.15.17.78.78 1.68 1.34 2.64 1.72.16.49.27 1 .27 1.55 0 2.72-2.21 4.93-4.93 4.93s-4.93-2.21-4.93-4.93c0-.43.07-.85.18-1.25Zm9.99 17.39.24-.26c.5-.53.69-1.32.37-1.97-.53-1.07-1.8-1.21-2.54-.44l-.3.32-.3-.32c-.73-.77-2.01-.62-2.54.44-.32.65-.13 1.44.37 1.97l.24.26 2.23 2.35 2.23-2.35Z" }), h("path", { d: "M33.95 27.99c0-2.77-2.15-4.93-4.9-4.99l-10.31.02C16.08 23.17 14 25.29 14 28v11h3v3h3v-6l-3 .03v-8.04C16.99 27 18 26 19 26h9.98c1 0 2.03 1 2.03 1.99L30.98 36l-2.97.03V42l3-.02V39h3l-.05-11.01Z" }))));
  }
}, [1, "opengemeenten-icon-liefdadigheid"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-liefdadigheid", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-liefdadigheid":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconLiefdadigheid$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconLiefdadigheid = OpengemeentenIconLiefdadigheid$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconLiefdadigheid, defineCustomElement };
