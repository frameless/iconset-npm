import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconWmo$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "m15.18 20.31-1.97-2.26L26.99 6 34 12.01V10h3v4.78l4.04 3.46-1.95 2.28L37 18.73v12.26h-3V16.16l-6.99-5.99L20 16.3v7.64c-.06 0-.12-.01-.18-.01-.3 0-.61.03-.91.08l-1.91.36v-5.66l-1.82 1.59ZM42 37.1v1.37l-14.58 3.36a5.614 5.614 0 0 1-2.81-.06L15 39.13v1.88H6v-15l9 .05v.89l4.28-.8c.18-.03.36-.05.55-.05.3 0 .6.05.89.14l8.39 2.82c1.74.57 2.9 2.32 2.9 3.96h5.35c2.57 0 4.65 1.83 4.65 4.1ZM12 29H9v9h3v-9Zm26.73 7.76c-.25-.45-.79-.76-1.39-.76h-9.96c-.84 0-1.66-.12-2.45-.35l-3.69-1.07.98-2.57 3.69 1.07c.48.14 2.99.2 2.99.2 0-.5-.36-1.21-.88-1.39l-8.13-2.43-4.88.88v6l11 3 12.73-2.59ZM24 25h6v-5h-6v5Z" }))));
  }
}, [1, "opengemeenten-icon-wmo"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-wmo", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-wmo":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconWmo$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconWmo = OpengemeentenIconWmo$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconWmo, defineCustomElement };
