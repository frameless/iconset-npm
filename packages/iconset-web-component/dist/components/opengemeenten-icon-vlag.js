import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconVlag$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M36.98 11h-9.06l-5.01-3H14v-.49C14 6.67 13.33 6 12.5 6s-1.46.64-1.49 1.43V42H14V26.04h7l5 3L37 29l-.02-18Zm-8.96 12.04-5-3H14V14h7.01L26 17l8.01-.04.02 6.08h-6Z" }))));
  }
}, [1, "opengemeenten-icon-vlag"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-vlag", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-vlag":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconVlag$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconVlag = OpengemeentenIconVlag$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconVlag, defineCustomElement };
