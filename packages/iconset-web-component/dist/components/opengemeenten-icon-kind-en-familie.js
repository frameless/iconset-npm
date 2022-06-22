import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconKindEnFamilie$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M32.92 30H36V19c0-1.66-1.34-3-3-3h-5.93c-1.66 0-3 1.35-3 3.01 0-1.66-1.34-3.01-3-3.01h-6.06c-1.66 0-3 1.35-3 3.01L12.05 30h2.96v12h6v-7h-2v-5.98c0-1.12.91-2.02 2.02-2.02h5.91c1.14 0 2.06.92 2.06 2.06V35h-2v7h6l-.08-12Zm-8.93-4.03c-1.56 0-2.83-1.27-2.83-2.83 0-.3.06-.58.14-.85.18.02.36.04.54.04 1.32 0 2.51-.51 3.41-1.33.03.03.05.07.09.1.37.37.78.64 1.22.85.17.36.27.76.27 1.18 0 1.56-1.27 2.83-2.83 2.83Zm-5.54-10.96c2.49 0 4.5-2.01 4.5-4.5s-2.01-4.5-4.5-4.5-4.5 2.01-4.5 4.5 2.01 4.5 4.5 4.5ZM16.1 9.77c.16.02.31.03.47.03 1.15 0 2.19-.44 2.98-1.16.03.03.05.06.08.09.32.32.69.56 1.07.75.15.32.23.66.23 1.03 0 1.36-1.11 2.47-2.48 2.47s-2.48-1.11-2.48-2.47c0-.26.05-.5.12-.74Zm13.39 5.24c2.49 0 4.5-2.01 4.5-4.5s-2.01-4.5-4.5-4.5-4.5 2.01-4.5 4.5 2.01 4.5 4.5 4.5Zm-2.35-5.24c.16.02.31.03.47.03 1.15 0 2.19-.44 2.98-1.16.03.03.05.06.08.09.32.32.69.56 1.07.75.15.32.23.66.23 1.03 0 1.36-1.11 2.47-2.48 2.47s-2.47-1.11-2.47-2.47c0-.26.05-.5.12-.74Z" }))));
  }
}, [1, "opengemeenten-icon-kind-en-familie"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-kind-en-familie", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-kind-en-familie":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconKindEnFamilie$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconKindEnFamilie = OpengemeentenIconKindEnFamilie$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconKindEnFamilie, defineCustomElement };
