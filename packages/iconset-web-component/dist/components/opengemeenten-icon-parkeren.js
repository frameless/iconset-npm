import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconParkeren$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M24.46 12.01h-6.44v17.98h2.96v-6.01h3.48c3.04 0 5.52-2.68 5.52-5.98s-2.48-5.98-5.52-5.98Zm-.03 8.97h-3.41v-5.97h3.41c1.41 0 2.56 1.34 2.56 2.99s-1.15 2.99-2.56 2.99ZM34.5 6h-21C11.02 6 9 8.02 9 10.5v21c0 2.48 2.02 4.5 4.5 4.5H22v6h4v-6h8.5c2.48 0 4.5-2.02 4.5-4.5v-21C39 8.02 36.98 6 34.5 6ZM36 31.5c0 .83-.67 1.5-1.5 1.5h-21c-.83 0-1.5-.67-1.5-1.5v-21c0-.83.67-1.5 1.5-1.5h21c.83 0 1.5.67 1.5 1.5v21Z" }))));
  }
}, [1, "opengemeenten-icon-parkeren"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-parkeren", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-parkeren":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconParkeren$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconParkeren = OpengemeentenIconParkeren$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconParkeren, defineCustomElement };
