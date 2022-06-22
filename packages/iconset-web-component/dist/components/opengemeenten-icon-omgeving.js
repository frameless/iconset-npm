import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconOmgeving$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M20.01 30.02h-2v-9.19c0-1.55 1.31-2.81 2.98-2.81h6.04c1.56 0 2.83 1.11 2.99 2.53v9.47h-2v3.95c-.93.07-1.94.11-3 .13v-7.07h2v-6h-6v6h2v7.07c-1.05-.02-2.06-.06-3-.12v-3.95Zm21.98 3.15c0 4.48-9.08 6.82-17.98 6.82s-18-2.34-18-6.82c0-2.81 3.8-5.04 9.95-6.13v2.99c-4.63.8-6.76 1.96-6.76 3.13 0 1.6 4.97 3.87 14.81 3.87s14.68-2.38 14.68-3.85c0-1.13-1.81-2.38-6.67-3.2v-3c6.37 1.07 9.97 3.33 9.97 6.2ZM25.52 8.27h-.02c-.46-.17-.95-.27-1.47-.27-.47 0-.92.09-1.35.23-.03 0-.05.02-.08.02-1.78.6-3.07 2.26-3.07 4.25 0 2.49 2.01 4.5 4.5 4.5s4.5-2.01 4.5-4.5c0-1.96-1.26-3.61-3.01-4.23ZM24.03 15a2.5 2.5 0 0 1-2.5-2.5c0-.21.03-.41.08-.6.3.07.61.11.93.11 1.25 0 2.37-.52 3.18-1.34.49.46.81 1.1.81 1.83a2.5 2.5 0 0 1-2.5 2.5Z" }))));
  }
}, [1, "opengemeenten-icon-omgeving"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-omgeving", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-omgeving":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconOmgeving$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconOmgeving = OpengemeentenIconOmgeving$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconOmgeving, defineCustomElement };
