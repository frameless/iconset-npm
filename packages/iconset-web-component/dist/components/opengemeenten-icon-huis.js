import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconHuis$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M40.02 23.02 36 19.53V14h-3v2.92l-9.02-7.85L8.05 23.01l1.98 2.26 1.98-1.73V39h24V23.5l2.05 1.78 1.97-2.26ZM33 36H15V20.9l8.98-7.86L33 20.89v15.12ZM20 25h8v6h-8v-6Z" }))));
  }
}, [1, "opengemeenten-icon-huis"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-huis", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-huis":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconHuis$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconHuis = OpengemeentenIconHuis$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconHuis, defineCustomElement };
