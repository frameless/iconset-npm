import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconOverDeStad$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { "fill-rule": "evenodd", d: "M12 7v10.5H6V41h10.5l.001-8.579-1.563 1.25-1.876-2.341L24 22.579l4.5 3.6V24h2.999v4.579l3.438 2.751-1.875 2.341-1.563-1.25V41H42V18h-4.172v-6.999h-10.8V19.5H25.5V7H12zm1.502 15.5h1.499V8.003h-1.499V22.5zM28.5 14H32v-1.5h-3.5V14zM21 36h5.999v-4H21v4z" }))));
  }
}, [1, "opengemeenten-icon-over-de-stad"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-over-de-stad", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-over-de-stad":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconOverDeStad$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconOverDeStad = OpengemeentenIconOverDeStad$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconOverDeStad, defineCustomElement };
