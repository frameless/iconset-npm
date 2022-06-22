import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconBouwenEnVerbouwen$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "m29.34 24.07 2.83-2.83 3.5 3.5 6.36-6.36L30.7 7.03H25l-3.47 3.58 4.24 4.24-4.95 4.95L15 13.85v-2.83L9.5 7.07l-3.54 3.54 3.89 5.37h2.83l6.01 5.95L6.5 34.12c-.69.69-.69 1.8 0 2.48l3.87 3.87c.69.69 1.79.69 2.48 0l10.12-10.03 8.13 8.13a4.503 4.503 0 0 0 6.37 0 4.49 4.49 0 0 0 0-6.36l-8.13-8.13ZM26.51 9.93h2.79l8.49 8.49-2.12 2.12-9.9-9.9.74-.71ZM11.66 37.51 9.5 35.35l18.39-18.38 2.16 2.16-18.39 18.38Zm23.69-1.06c-.59.59-1.54.59-2.12 0l-8.13-8.13 2.12-2.12 8.13 8.13c.59.59.59 1.53 0 2.12Z" }))));
  }
}, [1, "opengemeenten-icon-bouwen-en-verbouwen"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-bouwen-en-verbouwen", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-bouwen-en-verbouwen":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconBouwenEnVerbouwen$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconBouwenEnVerbouwen = OpengemeentenIconBouwenEnVerbouwen$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconBouwenEnVerbouwen, defineCustomElement };
