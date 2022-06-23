import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconBurgemeester$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M16.09 15.57c-1.08-5.63 3.79-10.5 9.43-9.43 3.15.6 5.69 3.14 6.29 6.29 1.07 5.63-3.79 10.5-9.42 9.42-3.15-.6-5.69-3.14-6.29-6.29ZM19.02 14c0 2.65 2.11 4.83 4.74 4.93 1.69.07 3.23-.89 4.2-2.27 1.13-1.61 1.06-2.98.65-4.2-.96-.38-1.87-.94-2.64-1.72-.05-.05-.09-.12-.15-.17a8.565 8.565 0 0 1-5.78 2.25c-.29 0-.56-.03-.84-.06-.11.4-.18.81-.18 1.25Zm13.94 10.96c.65.84 1.05 1.89 1.05 3.06l-.02 11.04h-3v3h-14v-3h-3V28.02c0-1.17.4-2.22 1.05-3.06 1.78 4.1 4.62 7.89 6.45 10.11-.01.1-.03.21-.03.31 0 1.38 1.13 2.5 2.52 2.5s2.52-1.12 2.52-2.5c0-.09-.02-.18-.03-.27 1.84-2.21 4.7-6.02 6.49-10.16Zm-10.29 8.29c-.72-.9-3.79-4.86-6-9.63.62-.33 2.08-.59 2.08-.59h.64s1.1 3.23 3.12 5.57l.46-2.58-.96-.99v-1.99h3.95v1.99l-1.02 1.01.55 2.54c2.26-2.82 3.02-5.56 3.02-5.56h.55s1.58.23 2.26.59c-2.22 4.8-5.31 8.76-6.02 9.64a2.469 2.469 0 0 0-2.62-.01Z" }))));
  }
}, [1, "opengemeenten-icon-burgemeester"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-burgemeester", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-burgemeester":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconBurgemeester$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconBurgemeester = OpengemeentenIconBurgemeester$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconBurgemeester, defineCustomElement };