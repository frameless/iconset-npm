import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconBedrijventerrein$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M34.41 23.93c-.24-.55-.78-.92-1.38-.92H10.98L11 37.96h1.98V38c0 2.21 1.8 4 4 4s4-1.79 4-4h5.99c0 2.21 1.8 4 4 4s4-1.79 4-4h2.02l-.03-7.95-2.57-6.13ZM16.98 39.59c-.88 0-1.59-.72-1.59-1.59s.72-1.59 1.59-1.59 1.59.72 1.59 1.59-.72 1.59-1.59 1.59ZM26 35.01h-6.47c-.69-.57-1.59-1.01-2.55-1.01s-1.79.44-2.48 1.01h-.51v-9h12v9Zm4.98 4.58c-.88 0-1.59-.72-1.59-1.59s.72-1.59 1.59-1.59 1.59.72 1.59 1.59-.72 1.59-1.59 1.59ZM29 30.01v-4h3.2l1.76 4H29Zm5.49-16.05L27 17.01V6H12v12H6v18h3V21h21v-2l4.55-1.86L39 19v17h3V17l-7.51-3.05ZM18 18.01h-3v-3h3v3Zm0-6h-3v-3h3v3Zm6 6h-3v-3h3v3Zm0-6h-3v-3h3v3Z" }))));
  }
}, [1, "opengemeenten-icon-bedrijventerrein"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-bedrijventerrein", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-bedrijventerrein":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconBedrijventerrein$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconBedrijventerrein = OpengemeentenIconBedrijventerrein$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconBedrijventerrein, defineCustomElement };
