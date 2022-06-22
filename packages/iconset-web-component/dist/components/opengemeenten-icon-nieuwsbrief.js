import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconNieuwsbrief$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M31.98 17H16.05v-2h15.93v2Zm0 2H16.05v2h15.93v-2ZM24 23h-6.92l2.42 2H24v-2Zm18.03-3.7v19.69c0 1.66-1.34 3-3 3h-30c-1.66 0-3-1.34-3-3V19.3l1.13-.9 1.88-1.51v-4.93c0-1.61 1.3-2.91 2.91-2.91h6.9l2.68-2.14a3.99 3.99 0 0 1 5 0l2.68 2.14h6.88c1.6 0 2.9 1.3 2.9 2.9v4.92l1.92 1.53 1.13.9Zm-29.99 2.14 8.36 6.91 1.71-1.31c1.15-.85 2.72-.83 3.84.05l1.68 1.27 8.36-6.9v-9.42H12.03v9.4ZM9.03 37.01l8.92-6.8-8.92-7.37v14.17Zm27.66 1.98-12.71-9.55-12.58 9.55h25.29Zm2.34-16.14-8.94 7.38 8.94 6.76V22.84Z" }))));
  }
}, [1, "opengemeenten-icon-nieuwsbrief"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-nieuwsbrief", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-nieuwsbrief":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconNieuwsbrief$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconNieuwsbrief = OpengemeentenIconNieuwsbrief$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconNieuwsbrief, defineCustomElement };
