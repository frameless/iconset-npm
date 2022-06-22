import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconOnderhoud$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M20.07 13c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7 7-3.13 7-7Zm-6.28 3.72c-.19.19-.43.28-.72.28s-.54-.09-.72-.28c-.19-.19-.28-.43-.28-.72s.09-.53.28-.72c.19-.19.43-.28.72-.28s.54.09.72.28c.19.19.28.43.28.72s-.09.53-.28.72ZM14 14h-2V9h2v5Zm23.71 20.03-6.04-23.02h-6.35l-6.04 23.01c-2.41.08-4.24 2.06-4.24 4.49v3.48h26.97v-3.48c0-2.41-1.91-4.37-4.29-4.48ZM27.63 14.01h1.72l1.58 6.02h-4.88l1.58-6.02Zm-2.37 9h6.45l1.06 4.01H24.2l1.06-4.01Zm-1.85 7h10.15l1 4.01H22.41l1-4.01ZM38.99 39H18.04v-.48c0-.83.57-1.5 1.39-1.5H37.5c.83 0 1.5.67 1.5 1.5V39Z" }))));
  }
}, [1, "opengemeenten-icon-onderhoud"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-onderhoud", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-onderhoud":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconOnderhoud$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconOnderhoud = OpengemeentenIconOnderhoud$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconOnderhoud, defineCustomElement };