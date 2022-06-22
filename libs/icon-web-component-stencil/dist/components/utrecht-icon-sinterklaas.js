import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';

const UtrechtIconSinterklaas$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("utrecht-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M16.58 9v.01L6.05 26.81l1.72 9.48 7.28-.29v-9h-3v-3h3v-4.5h3V24h2.9v3h-2.9v9h7.46l1.47-9.07-10.4-17.92zM7.45 39H25.4v3H7.45zm33.99-24.2c0-5.07-3.42-8.74-8.13-8.74-4.32 0-7.84 3.17-7.84 7.07 0 3.45 2.33 6.06 5.43 6.06a4.94 4.94 0 0 0 4.81-4.94v-.85h-3v.85a2 2 0 0 1-1.81 1.94c-1.41 0-2.43-1.29-2.43-3.06 0-2.21 2.22-4.07 4.84-4.07 3 0 5.13 2.36 5.13 5.74 0 4.58-4.2 6.5-6 7.11l-1 .35V27h-3v3h3v12h3V30h3v-3h-3v-2.63c4.4-1.84 7-5.37 7-9.57z" }))));
  }
}, [1, "utrecht-icon-sinterklaas"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-sinterklaas", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-sinterklaas":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconSinterklaas$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconSinterklaas = UtrechtIconSinterklaas$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconSinterklaas, defineCustomElement };
