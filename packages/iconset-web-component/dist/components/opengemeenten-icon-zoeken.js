import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconZoeken$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M41.35 34.9 29.76 23.31c-.82-.82-2.17-.82-2.99 0l-.74.74-1.19-1.19c3.12-4.1 2.82-9.98-.92-13.72-4.08-4.08-10.71-4.08-14.79 0-4.08 4.08-4.08 10.71 0 14.79 2.04 2.04 4.72 3.06 7.39 3.06 2.18 0 4.35-.69 6.18-2.03l1.21 1.21-.59.59c-.82.82-.82 2.16 0 2.98l11.59 11.59c.4.4.93.62 1.49.62.56 0 1.09-.22 1.49-.62l3.45-3.45c.82-.82.82-2.16 0-2.98ZM11.19 21.87c-2.94-2.94-2.94-7.73 0-10.67 1.47-1.47 3.4-2.21 5.33-2.21s3.86.73 5.33 2.21c2.94 2.94 2.94 7.73 0 10.67-2.94 2.94-7.72 2.94-10.67 0ZM36.4 38.42 26.24 28.26l2.03-2.03 10.16 10.16-2.03 2.03Z" }))));
  }
}, [1, "opengemeenten-icon-zoeken"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-zoeken", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-zoeken":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconZoeken$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconZoeken = OpengemeentenIconZoeken$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconZoeken, defineCustomElement };
