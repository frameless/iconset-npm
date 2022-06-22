import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconAgenda$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { "fill-rule": "evenodd", d: "M21 10h6V7h-6v3zm14 6.5H13v21c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5v-21zm3 21c0 2.481-2.019 4.5-4.5 4.5h-19a4.505 4.505 0 0 1-4.5-4.5V7h5v3h-2v3.5h21.999V10H33V7h4.999L38 37.5zM16.5 11h3V6h-3v5zm12 0h3V6h-3v5zm.5 24h3v-3h-3v3zm-13 0h3v-3h-3v3zm13-6h3v-3h-3v3zm-6.5 0h3v-3h-3v3zM16 29h3v-3h-3v3zm13-6h3v-3h-3v3zm-6.5 0h3v-3h-3v3zM16 23h3v-3h-3v3zm7.415 12.469-2-2.5 1.17-.938 1.36 1.699 2.431-3.646 1.248.832-3 4.5a.75.75 0 0 1-.591.333L24 35.75a.752.752 0 0 1-.585-.281z" }))));
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
