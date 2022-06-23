import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconBelastingen$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M39.5 9h-31C7.67 9 7 9.67 7 10.5v8c0 .83.67 1.5 1.5 1.5h.46L14 12h3L6.35 29.36c-.42.71-.2 1.62.51 2.05l15.37 9.38c.24.15.51.22.78.22a1.494 1.494 0 0 0 1.28-.72l12.38-20.28h2.85c.83 0 1.5-.67 1.5-1.5V10.5c0-.83-.67-1.5-1.5-1.5Zm-6.36 11L22.5 37.44 9.7 29.63l5.45-8.94 2.52 1.53 1.56-2.56-2.52-1.54 3.74-6.13h6.44L35 16.94l-1.86 3.05Zm-10.62 5.85 2.56 1.56-4.17 6.83-2.56-1.56 4.17-6.83Zm2.82-5.84 1.65-2.71.76 1.14-1.18 1.93c1.15.09 2.08-.49 2.65-1.43.41-.67.58-1.38.44-2.02l1.44-.04c.14.86-.03 1.88-.61 2.84-.99 1.62-2.83 2.59-4.84 2.15l-.7 1.14-1.06-.64.56-.92c-.12-.05-.29-.14-.45-.24-.19-.12-.3-.2-.42-.29l-.56.92-1.04-.64.69-1.13c-1.33-1.6-1.3-3.72-.32-5.33.51-.84 1.1-1.4 1.8-1.71l.78 1.23c-.53.22-.98.66-1.33 1.24-.56.92-.67 2.06-.01 3.07l2.01-3.3.74 1.14-1.87 3.07a5.106 5.106 0 0 0 .87.53Z" }))));
  }
}, [1, "opengemeenten-icon-belastingen"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-belastingen", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-belastingen":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconBelastingen$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconBelastingen = OpengemeentenIconBelastingen$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconBelastingen, defineCustomElement };