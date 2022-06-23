import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconGladheid$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M25.6 12.01h-3v4h3v-4Zm0-5.98h-3v3.91h3V6.03Zm-16.4 21 7.61-20.99h-3.19L6.01 27.03H9.2ZM31.19 6.04l7.61 20.99h3.19L34.38 6.04h-3.19Zm.63 22.91 3.47-3.47-2.12-2.12-5.59 5.59h-1.97v-2.04l5.56-5.56-2.12-2.12-3.44 3.44v-3.7h-3v3.7l-3.53-3.53-2.12 2.12 5.66 5.66v2.04h-2.05l-5.65-5.65-2.12 2.12 3.53 3.53h-3.82v3h3.82l-3.56 3.56 2.12 2.12 5.68-5.68h2.05v2.01l-5.7 5.7 2.12 2.12 3.57-3.57V42h3v-3.78l3.48 3.48 2.12-2.12-5.6-5.6v-2.01h1.97l5.62 5.62 2.12-2.12-3.5-3.5h3.7v-3h-3.7Z" }))));
  }
}, [1, "opengemeenten-icon-gladheid"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-gladheid", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-gladheid":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconGladheid$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconGladheid = OpengemeentenIconGladheid$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconGladheid, defineCustomElement };
