import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconOnderscheidingen$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M34 6H14v14l9.01 6H20v4h-4v8h4v4h8v-4h4v-8h-4v-4h-3.01L34 19.99V6Zm-8 3v12.79l-2 1.23-2-1.28V9h4Zm-8.98 0H19v10.68l-2-1.4.02-9.28ZM29 33v2h-4v4h-2v-4h-4v-2h4v-4h2l.06 4H29Zm2.04-14.62L29 19.73V9h2l.04 9.38ZM26 22" }))));
  }
}, [1, "opengemeenten-icon-onderscheidingen"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-onderscheidingen", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-onderscheidingen":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconOnderscheidingen$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconOnderscheidingen = OpengemeentenIconOnderscheidingen$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconOnderscheidingen, defineCustomElement };
