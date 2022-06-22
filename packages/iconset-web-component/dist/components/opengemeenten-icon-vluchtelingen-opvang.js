import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconVluchtelingenOpvang$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M20.47 32H17v-1.54c0-.81-.67-1.46-1.51-1.46h-2.95c-.86 0-1.54.66-1.54 1.49V32H7.5c-.83 0-1.5.67-1.5 1.5v7.01c0 .83.67 1.5 1.5 1.5h13.01c.83 0 1.5-.67 1.5-1.5v-6.97c0-.84-.69-1.53-1.53-1.53ZM15 32h-2v-1h2v1Zm27-20.49v3.46L29.04 9.43 16 15.01v-3.46l13.05-5.58L42 11.51ZM41 27c0-1.66-1.34-3-3-3h-5.95c-1.66 0-3 1.34-3 3 0-1.66-1.34-3-3-3h-6.06c-1.66 0-3 1.34-2.99 3v.4c1.06.49 1.84 1.42 2 2.6h1.5c1.93 0 3.5 1.57 3.5 3.5v2.43h7.93c1.14 0 2.06.93 2.07 2.07v4h4v-4h3V27Zm-12 7.03c-1.66 0-3-1.34-3-3 0-.25.02-.5.08-.73.33.13.7.2 1.07.2 1.31 0 2.44-.79 2.84-1.97.31.89 1.01 1.53 1.91 1.82.05.22.09.44.09.68 0 1.66-1.34 3-3 3Zm5.48-11.02c2.49 0 4.5-2.01 4.5-4.5s-2.01-4.5-4.5-4.5-4.5 2.01-4.5 4.5 2.01 4.5 4.5 4.5Zm-2.35-5.24c.16.02.31.03.47.03 1.15 0 2.19-.44 2.98-1.16.03.03.05.06.08.09.32.32.69.56 1.07.75.15.32.23.66.23 1.03 0 1.36-1.11 2.47-2.48 2.47s-2.47-1.11-2.47-2.47c0-.26.05-.5.12-.74Zm-8.67 5.24c2.49 0 4.5-2.01 4.5-4.5s-2.01-4.5-4.5-4.5-4.5 2.01-4.5 4.5 2.01 4.5 4.5 4.5Zm-2.35-5.24c.16.02.31.03.47.03 1.15 0 2.19-.44 2.98-1.16.03.03.05.06.08.09.32.32.69.56 1.07.75.15.32.23.66.23 1.03 0 1.36-1.11 2.47-2.48 2.47s-2.48-1.11-2.48-2.47c0-.26.05-.5.12-.74Z" }))));
  }
}, [1, "opengemeenten-icon-vluchtelingen-opvang"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-vluchtelingen-opvang", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-vluchtelingen-opvang":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconVluchtelingenOpvang$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconVluchtelingenOpvang = OpengemeentenIconVluchtelingenOpvang$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconVluchtelingenOpvang, defineCustomElement };
