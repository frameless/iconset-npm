import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconStrand$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "m23.12 35.91.74 3.34c-.41-.12-.82-.28-1.23-.49-.9-.48-1.8-.88-2.85-.75-.98.12-1.71.66-2.59 1.03-1.26.52-2.62.67-3.95.35-.92-.22-1.64-.71-2.5-1.06-1.87-.77-3.18.15-4.74.76v-3.08c.46-.24.93-.45 1.44-.6 1.41-.4 2.87-.29 4.23.27.95.39 1.73.98 2.8 1.05 1.11.07 1.95-.45 2.9-.9 1.29-.62 2.75-.83 4.15-.52.58.13 1.09.37 1.6.62ZM6 10.5C6 8.01 8.01 6 10.5 6S15 8.01 15 10.5 12.99 15 10.5 15 6 12.99 6 10.5Zm2 0a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0-5 0Zm32.84 24.82c-.92.22-1.64.71-2.5 1.06-1.77.73-3.03-.04-4.47-.65-1.5-.68-3.15-.68-4.69-.18l.61 2.73c.96-.36 1.97-.38 2.98.01.29.11.57.24.84.37v.04c.46.24.93.45 1.44.6 1.41.4 2.87.29 4.23-.27.93-.39 1.7-.95 2.73-1.03v-2.84c-.39.02-.78.06-1.16.15ZM25.65 28.3l3.04 13.71h-2.05L23.7 28.74 8.68 32.07l-.65-2.91c.47-1.93 1.22-3.76 2.3-5.45 1.26-1.97 2.85-3.66 4.75-5 1.61-1.15 3.39-1.99 5.28-2.55-.02-.05-.05-.08-.06-.13a.996.996 0 0 1 .76-1.19.996.996 0 0 1 1.19.76v.11c2.16-.4 4.35-.42 6.51-.03 2.29.42 4.45 1.27 6.42 2.53 1.74 1.11 3.23 2.49 4.49 4.09l.61 2.77-14.64 3.24Zm-8.96-7.05a15.006 15.006 0 0 0-3.83 4.07c-.62.98-1.12 2.01-1.5 3.08l3.54-.79c.13-2.27.79-4.5 1.79-6.36Zm5.62 4.72-1.23-5.62c-1.42 1.26-2.73 3.81-3.1 6.59l4.34-.96Zm6-7.33c1.62 1.25 3.12 3 4.26 5.05l3.66-.81c-.8-.81-1.69-1.54-2.67-2.16a14.812 14.812 0 0 0-5.25-2.08Zm-3.07 6.68 4.25-.94c-1.59-2.46-3.73-4.17-5.48-4.69l1.23 5.63Z" }))));
  }
}, [1, "opengemeenten-icon-strand"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-strand", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-strand":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconStrand$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconStrand = OpengemeentenIconStrand$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconStrand, defineCustomElement };
