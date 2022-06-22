import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';

const UtrechtIconKindEnFamilie$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("utrecht-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { "fill-rule": "evenodd", d: "M27 22a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm9 6h-1.5l1.5 7h-3v7h-6v-7h1.5v-7a1.5 1.5 0 0 0-1.5-1.5h-6a1.5 1.5 0 0 0-1.5 1.5H12V17.5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V28zm-6-15a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm-12 0a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm3 22v7h-6V30h4.5v5H21z" }))));
  }
}, [1, "utrecht-icon-kind-en-familie"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-kind-en-familie", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-kind-en-familie":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconKindEnFamilie$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconKindEnFamilie = UtrechtIconKindEnFamilie$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconKindEnFamilie, defineCustomElement };
