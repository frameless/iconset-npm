import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconGrafiek$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "m21 11.96 4 4 6-6 2 2L32.96 6 27 5.96l2 2-4.02 3.88L21 7.96l-9 9 2 2 7-7zM30 25v-6H18v11l-9 .02V42h30V25h-9ZM18 39h-6v-6h6v6Zm9 0h-6V22h6v17Zm9 0h-6V28h6v11Z" }))));
  }
}, [1, "opengemeenten-icon-grafiek"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-grafiek", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-grafiek":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconGrafiek$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconGrafiek = OpengemeentenIconGrafiek$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconGrafiek, defineCustomElement };
