import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconAfvalOphaal$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M39.32 16.9c-.24-.55-.78-.92-1.38-.92H33v-4.99l-20.22.03-6.46 12.87-.03.06a2.93 2.93 0 0 0 1.41 3.91l.06.03 1.23.57v3.03c0 .83.67 1.5 1.5 1.5h.59c.26 2.24 2.14 3.99 4.45 3.99s4.2-1.75 4.45-4h10.05c.25 2.25 2.14 4.01 4.45 4.01s4.2-1.76 4.45-4.01h1.56c.83 0 1.5-.67 1.5-1.5v-8.5l-2.68-6.09Zm-28.47 9.12-1.83-.85 5.66-11.16 3.35-.02c.55 0 1 .46 1 1.01s-.45 1-1 1h-2l-5.17 10.02Zm4.62 7.97c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5Zm14.52-5.96H12.97l4.58-9.05.45.02c2.22 0 4.01-1.79 4.02-3.98 0-.35-.06-.7-.14-1.03H30v14.04ZM34.48 34c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5Zm-1.49-11.01v-4.01h3.94l1.7 4.01h-5.64Z" }))));
  }
}, [1, "opengemeenten-icon-afval-ophaal"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-afval-ophaal", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-afval-ophaal":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconAfvalOphaal$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconAfvalOphaal = OpengemeentenIconAfvalOphaal$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconAfvalOphaal, defineCustomElement };
