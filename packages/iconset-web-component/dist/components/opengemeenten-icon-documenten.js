import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconDocumenten$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { "fill-rule": "evenodd", d: "M16 27.5h12V26H16v1.5zm0-4.5h12v-1.5H16V23zm0-4.5h12V17H16v1.5zM31.002 39 31 13.5H13V32h6a1.5 1.5 0 0 1 1.5 1.5V39h10.502zM17.5 38.457V35h-3.736l3.736 3.457zM34 13.5V39c0 1.654-1.346 3-3 3H17.5c-.378 0-.741-.143-1.019-.398l-6-5.55A1.505 1.505 0 0 1 10 34.95V13.5c0-1.654 1.346-3 3-3h18c1.654 0 3 1.346 3 3zM38.5 9v25.5c0 1.654-1.346 3-3 3V9h-21c0-1.654 1.346-3 3-3h18c1.654 0 3 1.346 3 3z" }))));
  }
}, [1, "opengemeenten-icon-documenten"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-documenten", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-documenten":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconDocumenten$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconDocumenten = OpengemeentenIconDocumenten$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconDocumenten, defineCustomElement };
