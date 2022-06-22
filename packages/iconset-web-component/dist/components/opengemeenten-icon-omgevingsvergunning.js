import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconOmgevingsvergunning$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "m20.59 22.73 6.36-6.36 2.12 2.11-8.49 8.49-5.31-5.31 2.13-2.12 3.2 3.18ZM40 30.01c0 .28-.03.56-.06.83 0 .05-.02.1-.02.16-.02.14-.05.28-.09.42C38.88 35.98 34 42.01 34 42.01s-4.87-6.03-5.83-10.59l-.09-.42c0-.05-.02-.1-.02-.16a5.69 5.69 0 0 1-.06-.83c0-3.31 2.69-6 6-6s6 2.69 6 6Zm-3 0c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3Zm-18 9v-8h-8l-.02-22H33v13.07c.33-.04.66-.07 1-.07.69 0 1.36.1 2 .26V9c0-1.66-1.34-3-3-3H11C9.34 6 8 7.34 8 9v23.88L16.94 42l14.54.05c-.55-.77-1.28-1.83-2.03-3.05H19Z" }))));
  }
}, [1, "opengemeenten-icon-omgevingsvergunning"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-omgevingsvergunning", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-omgevingsvergunning":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconOmgevingsvergunning$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconOmgevingsvergunning = OpengemeentenIconOmgevingsvergunning$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconOmgevingsvergunning, defineCustomElement };
