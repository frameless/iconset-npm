import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconBrandgevaar$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M16 39h16v3H16v-3Zm14.07-26.6c.55 1.39.59 5.32-1.06 6.43-.55-3.06-2.18-10.36-7.39-12.87.23 3.8.79 8.53-5.28 15.01 0-3.22-2.11-5.36-2.11-5.36 0 7.51-7.66 17.07 5.28 20.38-3.29-6.12-.12-7.43 1.25-12.72.82 1.11 1.41 3.09 1.14 4.2 1.92-2.51 1.88-7.45 1.88-9.68 4.11 2.78 7.74 11.24 4.18 18.2 12.67-5.36 7.87-17.75 2.11-23.59Z" }))));
  }
}, [1, "opengemeenten-icon-brandgevaar"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-brandgevaar", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-brandgevaar":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconBrandgevaar$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconBrandgevaar = OpengemeentenIconBrandgevaar$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconBrandgevaar, defineCustomElement };