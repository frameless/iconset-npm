import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconVergunningAlgemeen$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M31.11 18.48 29 16.37l-6.36 6.36-3.2-3.18-2.13 2.11 5.31 5.31 8.49-8.49z" }), h("path", { d: "M35 6H13c-1.66 0-3 1.34-3 3v24.04l8.94 8.97 16.07.05c1.65 0 3-1.35 3-3V9c0-1.66-1.34-3-3-3Zm0 33H21v-8h-8l-.02-22H35v30Z" }))));
  }
}, [1, "opengemeenten-icon-vergunning-algemeen"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-vergunning-algemeen", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-vergunning-algemeen":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconVergunningAlgemeen$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconVergunningAlgemeen = OpengemeentenIconVergunningAlgemeen$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconVergunningAlgemeen, defineCustomElement };
