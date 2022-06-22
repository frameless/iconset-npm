import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconToegankelijkheid$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M39.08 14.33C34.29 15.58 29.18 16 24 16c-4.19 0-9.36-.17-15.08-1.67L8 17.91c3.41.9 7.33 1.49 11 1.79v22.29h4v-11h2v11h4V19.71c3.67-.3 7.59-.9 11-1.79l-.92-3.58ZM25.5 6.24h-.02c-.46-.17-.95-.27-1.47-.27-.47 0-.92.09-1.35.23-.03 0-.05.02-.08.02-1.78.6-3.07 2.26-3.07 4.25 0 2.49 2.01 4.5 4.5 4.5s4.5-2.01 4.5-4.5c0-1.96-1.26-3.61-3.01-4.23Zm-1.49 6.73a2.5 2.5 0 0 1-2.5-2.5c0-.21.03-.41.08-.6.3.07.61.11.93.11 1.25 0 2.37-.52 3.18-1.34.49.46.81 1.1.81 1.83a2.5 2.5 0 0 1-2.5 2.5Z" }))));
  }
}, [1, "opengemeenten-icon-toegankelijkheid"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-toegankelijkheid", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-toegankelijkheid":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconToegankelijkheid$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconToegankelijkheid = OpengemeentenIconToegankelijkheid$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconToegankelijkheid, defineCustomElement };
