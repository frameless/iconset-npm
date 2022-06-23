import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconVergaderen$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M6.99 17.96c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3Zm12.05.06h9.95v-1.47c0-1.67-1.27-2.97-2.94-3.01h-4.22c-1.61.1-2.84 1.38-2.84 3.01v1.46h.05Zm18.98 2.94c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3ZM23.99 12c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3ZM10.5 22.36H9c-1.66 0-3 1.34-3 3l.02 4.45c0 1.59 1.08 2.88 2.65 2.96l3.92-9.57c-.54-.53-1.28-.85-2.09-.85Zm28.5 0h-1.5c-.84 0-1.6.35-2.14.9l3.89 9.39c1.59-.07 2.72-1.24 2.73-2.84l.02-4.45c0-1.66-1.34-3-3-3Zm-6.32-.44a2.994 2.994 0 0 0-2.79-1.9H18.03c-1.24 0-2.34.76-2.79 1.91l-5.01 11.98a3.006 3.006 0 0 0 2.8 4.09h2.99v-3h-2.99l5.01-11.98H29.9L35 35.01h-2.98v3H35c.99 0 1.92-.49 2.48-1.31s.67-1.87.31-2.79l-5.1-11.99ZM27.1 33.99h-6.22c-1.61.1-2.84 1.38-2.84 3.01v4.99h12V37c0-1.67-1.27-2.97-2.93-3.01Zm.46-5.51c0-1.94-1.58-3.52-3.52-3.52s-3.52 1.58-3.52 3.52S22.1 32 24.04 32s3.52-1.58 3.52-3.52Z" }))));
  }
}, [1, "opengemeenten-icon-vergaderen"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-vergaderen", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-vergaderen":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconVergaderen$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconVergaderen = OpengemeentenIconVergaderen$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconVergaderen, defineCustomElement };
