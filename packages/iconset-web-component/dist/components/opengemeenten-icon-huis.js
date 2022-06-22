import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconHuis$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { "fill-rule": "evenodd", d: "M24 8 6 23.875l1.985 2.25 4.01-3.536V40h17.007v-2.999H14.996V19.942L24 12.001l10.003 8.824V40h3.003V23.471l3.009 2.654L42 23.875l-4.994-4.404v-7.47h-3.003v4.823L24 8zm-4.002 24h9.005v-6.5h-9.005V32z" }))));
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
