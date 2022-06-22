import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconF1$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "m12.45 24.99 4.35-4.35-.59-1.76 2.68-2.68 3.36 3.39-2.85 2.86 1.76 1.76L24 21.35l2.84 2.86 1.76-1.76-2.85-2.86 3.36-3.39 2.68 2.68-.59 1.76 4.35 4.35L42 18.54l-3.27-3.27.59-1.76-5.52-5.52-9.8 9.84L14.2 8l-5.52 5.52.59 1.76L6 18.55 12.45 25ZM33.8 11.51l2.68 2.68-.59 1.76 2.59 2.59-2.93 2.93-1.51-1.51.59-1.76-3.77-3.77 2.93-2.93Zm-22.27 2.68 2.68-2.68 2.93 2.93-3.77 3.77.59 1.76-1.51 1.51-2.93-2.93 2.59-2.59-.59-1.76Zm26.71 18.85c-.8-1.22-2.17-2.04-3.74-2.04-.94 0-1.8.29-2.53.78l-4.98-.82v-.02c0-1.66-1.34-2.95-3-2.95-.77 0-1.46.24-1.99.72v-1.72h-3.01l-10 4v-4H6v10h3.27c.62 1.74 2.27 2.95 4.22 2.95s3.6-1.26 4.22-3h12.54c.61 1.77 2.27 3.05 4.24 3.05s3.63-1.23 4.24-3h3.26v-3l-3.76-.96ZM13.5 36.95c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5ZM25 34h-7.26c-.36-1.02-1.08-1.93-2.01-2.46L19 30v2l6 1v1Zm9.5 3c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5Z" }))));
  }
}, [1, "opengemeenten-icon-f-1"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-f-1", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-f-1":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconF1$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconF1 = OpengemeentenIconF1$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconF1, defineCustomElement };
