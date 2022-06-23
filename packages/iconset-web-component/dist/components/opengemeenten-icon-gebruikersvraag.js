import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconGebruikersvraag$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M13.25 14.99c-1.24 0-2.25-1.26-2.25-2.5s1.01-2.5 2.25-2.5h1.25V7.74c0-.41.34-.75.75-.75s.75.34.75.75v7.25h-2.75Zm18.76 7.99H19.44c-2.36 0-3.43-1.91-3.43-4v-1.89l-4-.06v1.95c0 4.26 2.9 8 7.43 8h.61v15.01l13.92-.08V39l3.03-.06.02-10.97c0-2.81-2.19-5-5-5Zm-12.98-8.96c0-4.41 3.59-8.01 8.01-8.01s8.01 3.59 8.01 8.01-3.59 8.01-8.01 8.01-8.01-3.59-8.01-8.01Zm3.08 0c0 2.72 2.21 4.93 4.93 4.93s4.93-2.21 4.93-4.93c0-.54-.11-1.06-.27-1.55-.96-.38-1.87-.94-2.64-1.72-.05-.05-.09-.12-.15-.17a8.565 8.565 0 0 1-5.78 2.25c-.29 0-.56-.03-.84-.06-.11.4-.18.81-.18 1.25Z" }))));
  }
}, [1, "opengemeenten-icon-gebruikersvraag"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-gebruikersvraag", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-gebruikersvraag":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconGebruikersvraag$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconGebruikersvraag = OpengemeentenIconGebruikersvraag$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconGebruikersvraag, defineCustomElement };
