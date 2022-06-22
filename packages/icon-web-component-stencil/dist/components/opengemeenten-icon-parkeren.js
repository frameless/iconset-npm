import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconParkeren$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { "fill-rule": "evenodd", d: "M25 23h-4v-7h4c1.654 0 3 1.57 3 3.5S26.654 23 25 23zm0-10h-7v19.5h3V26h4c3.309 0 6-2.916 6-6.5S28.309 13 25 13zm11 21.5c0 .827-.673 1.5-1.5 1.5h-21c-.827 0-1.5-.673-1.5-1.5v-24c0-.827.673-1.5 1.5-1.5h21c.827 0 1.5.673 1.5 1.5v24zM34.5 6h-21A4.505 4.505 0 0 0 9 10.5v24c0 2.481 2.019 4.5 4.5 4.5H21v3h6v-3h7.5c2.481 0 4.5-2.019 4.5-4.5v-24C39 8.019 36.981 6 34.5 6z" }))));
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
