import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';

const UtrechtIconKoningsdag$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("utrecht-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M32 32.05V22.5L28 27l-4-5.5-4 5.5-4-4.5V35h16zM19 32l-1-1 1-1 1 1zm5 0-1-1 1-1 1 1zm5 0-1-1 1-1 1 1zm2.5-21h-3V6h3zM27 10h-6V7h6zm-7.5 1h-3V6h3zM38 15V7h-5v3h2v3.5H13V10h2V7h-5v30.5a4.51 4.51 0 0 0 4.5 4.5h19a4.51 4.51 0 0 0 4.5-4.5V15zm-3 22.5a1.5 1.5 0 0 1-1.5 1.5h-19a1.5 1.5 0 0 1-1.5-1.5v-21h22z" }))));
  }
}, [1, "utrecht-icon-koningsdag"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-koningsdag", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-koningsdag":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconKoningsdag$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconKoningsdag = UtrechtIconKoningsdag$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconKoningsdag, defineCustomElement };
