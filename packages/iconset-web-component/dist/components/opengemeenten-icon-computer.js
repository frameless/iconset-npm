import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconComputer$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M39 7.98H9c-1.66 0-3 1.34-3 3v20c0 1.66 1.34 3 3 3h13.51v3h-4.22c-1.53 0-2.76 1.42-2.76 3l17.59.03c0-1.67-1.31-3.03-2.93-3.03h-4.68v-3H39c1.66 0 3-1.34 3-3v-20c0-1.66-1.34-3-3-3Zm0 23H9v-20h30v20Zm-12-5h-8v-2h8v2Zm-12-2h2v2h-2v-2Zm2-6h-2v-2h2v2Zm16 0H19v-2h14v2Zm-16 4h-2v-2h2v2Zm16 0H19v-2h14v2Z" }))));
  }
}, [1, "opengemeenten-icon-computer"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-computer", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-computer":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconComputer$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconComputer = OpengemeentenIconComputer$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconComputer, defineCustomElement };
