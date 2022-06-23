import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconBrief$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M39.5 8h-31C7.67 8 7 8.67 7 9.5v8c0 .83.67 1.5 1.5 1.5h.46L14 11h3L6.35 28.36c-.42.71-.2 1.62.51 2.05l15.37 9.38c.24.15.51.22.78.22a1.494 1.494 0 0 0 1.28-.72l12.38-20.28h2.85c.83 0 1.5-.67 1.5-1.5V9.5c0-.83-.67-1.5-1.5-1.5Zm-6.36 11L22.5 36.44 9.7 28.63 20.45 11h6.44L35 15.95 33.14 19Zm-10.62 5.82 2.56 1.56-4.17 6.83-2.56-1.56 4.17-6.83Z" }))));
  }
}, [1, "opengemeenten-icon-brief"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-brief", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-brief":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconBrief$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconBrief = OpengemeentenIconBrief$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconBrief, defineCustomElement };
