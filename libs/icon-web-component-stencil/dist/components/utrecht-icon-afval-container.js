import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';

const UtrechtIconAfvalContainer$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("utrecht-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M37.44 23.15V19a8.33 8.33 0 0 0-8.29-8.47H27V9a1.48 1.48 0 0 0-1.48-1.48h-3A1.48 1.48 0 0 0 21 9v1.48h-2A8.48 8.48 0 0 0 10.55 19v18.4h26.89zM25.47 9v1.48h-3V9zm3 12h-9v-6h9zM6.01 39H42v3H6.01z" }))));
  }
}, [1, "utrecht-icon-afval-container"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-afval-container", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-afval-container":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconAfvalContainer$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconAfvalContainer = UtrechtIconAfvalContainer$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconAfvalContainer, defineCustomElement };
