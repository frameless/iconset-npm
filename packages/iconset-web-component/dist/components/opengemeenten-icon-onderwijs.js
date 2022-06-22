import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconOnderwijs$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M6 6v18h3.01v-3.03a2.98 2.98 0 0 1 2.85-3h2.11l.03.02v-.03h10v3h-7V24h25V6H6Zm8 9.96c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3ZM10.99 38c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3ZM6 42Zm10 0Zm0 0H6c0-1.66 1.35-3 3-3h4c1.66 0 3 1.34 3 3Zm3 0Zm10 0H19c0-1.66 1.35-3 3-3h3.99c1.66 0 3 1.34 3 3Zm0 0Zm-5.01-4c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3ZM32 42Zm1.99-7c0-1.65 1.35-3 3-3s3 1.35 3 3-1.35 3-3 3-3-1.35-3-3ZM42 42Zm0 0H32c0-1.66 1.35-3 3-3h3.99c1.66 0 3 1.34 3 3ZM17 32c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3Zm14 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3Z" }))));
  }
}, [1, "opengemeenten-icon-onderwijs"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-onderwijs", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-onderwijs":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconOnderwijs$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconOnderwijs = OpengemeentenIconOnderwijs$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconOnderwijs, defineCustomElement };
