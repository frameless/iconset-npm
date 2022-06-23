import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconAfvalkalender$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M22.4 34.44c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5Zm-3.1-2.47c.69-.44 1.57-.62 2.5-.33.88.27 1.6.97 1.91 1.83.34.94.18 1.82-.23 2.53h2.97c.78 0 1.43-.6 1.49-1.38L29 23h-9.99l.28 8.97ZM28.06 18h-8.03c-.56 0-1.02.46-1.02 1.02L18 19v2l13-.03V19h-1.94c0-.55-.45-1-1-1ZM39 9v28.5c0 2.48-2.02 4.5-4.5 4.5l-21.01-.04c-2.47 0-4.48-2.02-4.48-4.5L9.03 9l4.98.02V12h2l.03-6h2.97v3l8 .02V12h2V6h3v3h7Zm-3 28.54V15H12v22.5c0 .83.67 1.5 1.49 1.5l21.01.04c.83 0 1.5-.67 1.5-1.5Z" }))));
  }
}, [1, "opengemeenten-icon-afvalkalender"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-afvalkalender", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-afvalkalender":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconAfvalkalender$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconAfvalkalender = OpengemeentenIconAfvalkalender$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconAfvalkalender, defineCustomElement };
