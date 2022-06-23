import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconAgenda$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M32.01 9V5.99h-2.99v6h-1.99V9.04l-7.99-.02V6h-3l-.03 5.99H14V9.02L9.01 9l-.02 28.47c0 2.48 2.02 4.5 4.5 4.5l21.02.04c2.48 0 4.5-2.02 4.5-4.5V9h-7Zm4 28.52c0 .83-.67 1.5-1.5 1.5l-21.02-.04c-.83 0-1.5-.67-1.5-1.5V14.99h24.02v22.53Zm-3-16.53h-4v-3h4v3Zm-7 7h-4v-3h4v3Zm7 7h-4v-3h4v3Zm0-7h-4v-3h4v3Zm-7-7h-4v-3h4v3Zm-7 14h-4v-3h4v3Zm0-7h-4v-3h4v3Zm0-7h-4v-3h4v3Zm4.33 15-2.83-2.83 1.42-1.41 1.42 1.41 3.17-3.17 1.41 1.41-4.59 4.59Z" }))));
  }
}, [1, "opengemeenten-icon-agenda"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-agenda", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-agenda":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconAgenda$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconAgenda = OpengemeentenIconAgenda$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconAgenda, defineCustomElement };
