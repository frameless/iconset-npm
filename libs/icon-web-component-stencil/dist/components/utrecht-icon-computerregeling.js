import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';

const UtrechtIconComputerregeling$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("utrecht-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "m42.011 35.654-3-9.113V10.952c0-1.63-1.343-2.952-3-2.952h-24c-1.657 0-3 1.322-3 2.952v15.589l-3 9.113a1.73 1.73 0 0 0 0 .394c0 1.63 1.343 2.952 3 2.952h30c1.657 0 3-1.322 3-2.952a1.73 1.73 0 0 0 0-.394zm-7.04-6.614 1.81 5.96h-25.55l1.79-5.96h21.95zM36.011 11v15h-24V11h24zm-27 24.976 2.87-8.021h24.23l2.9 8.021h-30z" }))));
  }
}, [1, "utrecht-icon-computerregeling"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-computerregeling", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-computerregeling":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconComputerregeling$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconComputerregeling = UtrechtIconComputerregeling$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconComputerregeling, defineCustomElement };
