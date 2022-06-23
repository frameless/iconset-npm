import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconOverDeStad$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M27 12V6H12v18H6v18h7.97v-6.59l-3.88-4.68 13.79-11.48 3.16 2.57v-.83h11.97V24l-5.06.04v2.95h5.07v3h-2.26l.87.78-1.8 2.22h3.21l.02 6h-5.07v2.99h8V12h-15Zm-9 12h-3v-3h3v3Zm0-6h-3v-3h3v3Zm0-6h-3V9h3v3Zm6 6h-3v-3h3v3Zm0-6h-3V9h3v3Zm3.02 6L27 15h12v3H27.02Zm5.03 10.39v-4.35h-3v1.91l-5.06-4.11L13 30.99l1.97 2.37 1.1-.96v9.58h15.99v-9.63l.98 1.03 1.94-2.39-2.93-2.61Zm-3.09 10.6h-9.99v-9.07l4.94-4.1 5.04 4.1v9.07Zm-7.98-7.03h6v4.02h-6v-4.02Z" }))));
  }
}, [1, "opengemeenten-icon-over-de-stad"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-over-de-stad", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-over-de-stad":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconOverDeStad$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconOverDeStad = OpengemeentenIconOverDeStad$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconOverDeStad, defineCustomElement };