import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconVuurwerk$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "m6.02 32.64 7.22-8.18-6.84-1.94 7.01-2.33-4.6-8.73 8.24 3.53-.06-6 5.63 5.7 4.39-4.33v4.21l-4.68 4.62-1.8-2.3.09 2.64-5.33-2.17 2.41 4.58-1.12.37 2.06.58-4.59 5.2 5.94-1.12v3.25l-2.98 2.99v-2.63L6.02 32.65ZM41.99 9.76v8.27c-.1.43-.64.54-.98.2l-.99-.99-10.19 10.19-11.55 11.55h-4.24l12-12-4.24-4.24 11.87-11.87-.9-.9c-.34-.34-.22-.87.2-.96h8.27c.43-.1.85.32.76.75ZM31.03 21.99h-4.24l-.75.75 2.12 2.12 2.87-2.87Zm4-4h-4.24l-1.97 1.97h4.24l1.97-1.97Zm2.87-2.87L35.78 13l-2.96 2.96h4.24l.84-.84Z" }))));
  }
}, [1, "opengemeenten-icon-vuurwerk"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-vuurwerk", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-vuurwerk":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconVuurwerk$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconVuurwerk = OpengemeentenIconVuurwerk$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconVuurwerk, defineCustomElement };
