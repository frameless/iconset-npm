import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconAfval$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M-31.29 8.5h33.5M36 9H15c0-1.65 1.35-3 3-3h15c1.65 0 3 1.35 3 3Zm-24.5 2c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c0 0 3.5-.04 3.5 0l1.19 18.24c.57-.18 1.17-.27 1.8-.27.42 0 .83.04 1.23.13L18 14.01h15l-3 25h-6.09a6.09 6.09 0 0 1-1.46 3h7.56a2.97 2.97 0 0 0 2.94-2.54l3.06-25.46h2v-3H11.5Zm10.49 26.98c0 2.21-1.8 4-4.01 4s-4-1.8-4-4 1.8-4.01 4-4.01 4.01 1.8 4.01 4.01Zm-3 0c0-.55-.45-1.01-1.01-1.01s-1 .45-1 1.01.45 1 1 1 1.01-.45 1.01-1Z" }))));
  }
}, [1, "opengemeenten-icon-afval"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-afval", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-afval":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconAfval$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconAfval = OpengemeentenIconAfval$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconAfval, defineCustomElement };
