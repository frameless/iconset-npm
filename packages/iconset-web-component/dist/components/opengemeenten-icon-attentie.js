import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconAttentie$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M41.96 21.54c0-1.47-.79-2.74-1.96-3.46V8h-4.89L23.4 15H9.5c-.83 0-1.5.67-1.5 1.5V18H6v8h2v1.5c0 .83.67 1.5 1.5 1.5h1.63l2.67 9.89c.18.65.77 1.11 1.45 1.11h6.9a1.5 1.5 0 0 0 1.45-1.89L21.14 29h1.65l12.36 7H40V25a4.045 4.045 0 0 0 1.96-3.46ZM20.2 37h-3.8l-2.16-8h3.8l2.16 8ZM11 26v-8h11v8H11Zm26 7h-1.08L25 26.83v-9.24L35.94 11H37v22Z" }))));
  }
}, [1, "opengemeenten-icon-attentie"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-attentie", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-attentie":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconAttentie$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconAttentie = OpengemeentenIconAttentie$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconAttentie, defineCustomElement };
