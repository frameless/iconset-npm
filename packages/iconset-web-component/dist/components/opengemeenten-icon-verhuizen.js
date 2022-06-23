import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconVerhuizen$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M23 21h-2l3-6.03L27 21h-2v5h-2v-5Zm19 2.96v8.56c0 .82-.67 1.49-1.49 1.49h-1.56c-.25 2.24-2.14 4-4.45 4s-4.2-1.76-4.45-4h-13.1c-.25 2.24-2.14 4-4.45 4s-4.2-1.76-4.45-4H7.5c-.83 0-1.5-.67-1.5-1.5V10h27v7h4.94c.6 0 1.15.36 1.38.91L42 23.95ZM14 33.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5ZM30 13H9v15h21V13Zm6 20.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5Zm2.65-9.5-1.69-4H33v4h5.65ZM15 20.8V24h-2v2h6v-2h-2v-3.2c1.16-.41 2-1.51 2-2.81V15h-6v2.99c0 1.3.84 2.4 2 2.81Z" }))));
  }
}, [1, "opengemeenten-icon-verhuizen"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-verhuizen", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-verhuizen":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconVerhuizen$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconVerhuizen = OpengemeentenIconVerhuizen$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconVerhuizen, defineCustomElement };
