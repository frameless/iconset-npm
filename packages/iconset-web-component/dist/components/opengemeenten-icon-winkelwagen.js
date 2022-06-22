import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconWinkelwagen$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "m15.09 10.05-.18-1.45-.02-.13a2.909 2.909 0 0 0-2.87-2.42H6v3h6l2.19 18.09-1.28 2.39c-.86 1.59-.69 3.5.5 4.94.86 1.05 2.2 1.58 3.55 1.58h20.03v-3H16.8c-.73 0-1.09-.48-1.22-.69-.12-.21-.37-.76-.02-1.41l1.02-1.9 19.5-.03c2.27-.13 4.09-1.93 4.24-4.12L42 10.05H15.09Zm.37 3h5.53v5h-5l-.53-5Zm5.52 13h-4l-.55-5H21l-.02 5Zm9.02 0h-6v-5h6v5Zm0-8h-6v-5h6v5Zm7.34 6.6c-.05.76-.66 1.36-1.34 1.4l-3 .03v-5.03h4.76l-.42 3.6Zm.66-6.6h-5v-5h5.63l-.63 5ZM16.99 39.52a2.48 2.48 0 1 1-4.96 0 2.48 2.48 0 0 1 4.96 0Zm20.01 0a2.48 2.48 0 1 1-4.96 0 2.48 2.48 0 0 1 4.96 0Z" }))));
  }
}, [1, "opengemeenten-icon-winkelwagen"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-winkelwagen", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-winkelwagen":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconWinkelwagen$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconWinkelwagen = OpengemeentenIconWinkelwagen$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconWinkelwagen, defineCustomElement };
