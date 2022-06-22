import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconBezwaarEnBeroep$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M41.9 41.96h-18c0-1.66 1.34-3 3-3h12c1.66 0 3 1.34 3 3Zm-14.68-14.9L12.96 41.32c-.39.39-.91.59-1.42.59s-1.03-.19-1.42-.59l-3.5-3.5c-.78-.78-.78-2.06 0-2.84l14.26-14.26-.81-.81a2.951 2.951 0 0 1-3.44-.56l-2.1-2.1c-.78-.78-.78-2.05 0-2.83l7.82-7.82c.78-.78 2.05-.78 2.83 0l2.1 2.1c.57.57.88 1.32.88 2.12 0 .47-.12.92-.32 1.32l8.01 8.01c1.12-.52 2.54-.35 3.44.55l2.1 2.1c.78.78.78 2.05 0 2.83l-7.81 7.81c-.39.39-.9.59-1.41.59s-1.02-.2-1.41-.59l-2.1-2.1c-.57-.57-.88-1.32-.88-2.12 0-.47.12-.92.32-1.32l-.86-.86Zm3.56 2.21 1.36 1.36 6.4-6.4-1.36-1.36-6.4 6.4Zm-8.47-11.35 7.76 7.76 3.51-3.51-7.76-7.76-3.51 3.51Zm2.81-7.1-1.36-1.36-6.4 6.4 1.36 1.36 6.4-6.4Zm-.03 14.1-2.07-2.07L9.46 36.41l2.07 2.07 13.56-13.56Z", style: "fill-rule:evenodd" }))));
  }
}, [1, "opengemeenten-icon-bezwaar-en-beroep"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-bezwaar-en-beroep", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-bezwaar-en-beroep":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconBezwaarEnBeroep$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconBezwaarEnBeroep = OpengemeentenIconBezwaarEnBeroep$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconBezwaarEnBeroep, defineCustomElement };
