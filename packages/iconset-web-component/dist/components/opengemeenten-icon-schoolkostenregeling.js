import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconSchoolkostenregeling$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M16 16h7v2h-7v-2Zm-4-4h15v10H12V12Zm2 8h10.96l.04-6.02L14 14v6ZM31.02 6H7.5C6.67 6 6 6.67 6 7.5v33c0 .83.67 1.5 1.5 1.5h8.81L12 39H9V9h21v22h3V7.98C33 6.88 32.11 6 31.02 6ZM42 40.5c0 .83-.67 1.5-1.5 1.5H20.96l-5.23-3.37c-.83-.54-.83-1.75 0-2.29l5.22-3.32L40.49 33c.83 0 1.51.68 1.51 1.51v5.99Zm-2.98-4.49H20.95l-.95.6v1.77l1 .62h18.02v-2.99Z" }))));
  }
}, [1, "opengemeenten-icon-schoolkostenregeling"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-schoolkostenregeling", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-schoolkostenregeling":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconSchoolkostenregeling$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconSchoolkostenregeling = OpengemeentenIconSchoolkostenregeling$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconSchoolkostenregeling, defineCustomElement };
