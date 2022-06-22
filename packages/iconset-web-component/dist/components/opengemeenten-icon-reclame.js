import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconReclame$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M14.11 8.98 7.13 38.95h3.08L11.6 33h13.84l-1.39 5.95h3.08l6.98-29.97h-20ZM26.13 30H12.29l4.2-18.02h13.84L26.13 30Zm.57-14.03-.7 3-8.45.02.7-3.02h8.44ZM17.08 21h6.46l-.7 3-6.46.02.7-3.02Zm23.94 17.95h-3.08L36.55 33h-5.9l.7-3h4.51l-2.26-9.68 1.54-6.62 5.88 25.25Z" }))));
  }
}, [1, "opengemeenten-icon-reclame"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-reclame", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-reclame":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconReclame$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconReclame = OpengemeentenIconReclame$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconReclame, defineCustomElement };
