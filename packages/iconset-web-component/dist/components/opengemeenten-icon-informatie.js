import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconInformatie$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M24 6a18 18 0 1 0 18 18A18 18 0 0 0 24 6zm0 6a2.25 2.25 0 1 1-2.25 2.25A2.25 2.25 0 0 1 24 12zm4.82 22.47h-9.3v-3h3v-8.94h-3v-3H24a1.49 1.49 0 0 1 1 .47 1.54 1.54 0 0 1 .46 1v10.47h3.31z" }))));
  }
}, [1, "opengemeenten-icon-informatie"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-informatie", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-informatie":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconInformatie$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconInformatie = OpengemeentenIconInformatie$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconInformatie, defineCustomElement };
