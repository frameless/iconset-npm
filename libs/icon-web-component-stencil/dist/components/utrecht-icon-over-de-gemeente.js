import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';

const UtrechtIconOverDeGemeente$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("utrecht-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { "fill-rule": "evenodd", d: "M25.75 16.5c0-.965-.785-1.75-1.75-1.75s-1.75.785-1.75 1.75.785 1.75 1.75 1.75 1.75-.785 1.75-1.75zm1.5 0A3.254 3.254 0 0 1 24 19.75a3.254 3.254 0 0 1-3.25-3.25A3.254 3.254 0 0 1 24 13.25a3.254 3.254 0 0 1 3.25 3.25zM29.5 19h5v-5h-5v5zm0 8h5v-5h-5v5zm-16-8h5v-5h-5v5zm0 8h5v-5h-5v5zm0 7.5h5v-5h-5v5zM36 39V11.4H12V39h5v-1.5h3v-8h3v8h2v-8h3v8h3V39h5zm6 0v3H6v-3h3V8.4h5V6h20v2.4h5V39h3zM21.5 27h5v-5h-5v5zm8 7.5h5v-5h-5v5z" }))));
  }
}, [1, "utrecht-icon-over-de-gemeente"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-over-de-gemeente", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-over-de-gemeente":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconOverDeGemeente$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconOverDeGemeente = UtrechtIconOverDeGemeente$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconOverDeGemeente, defineCustomElement };
