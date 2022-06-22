import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconComputerregeling$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M41.02 35.06 36 33.05c1.48 0 3-1.48 3-3.02V13c0-1.66-1.34-3-3-3H12c-1.66 0-3 1.34-3 3v17.03c0 1.54 1.53 3.02 3 3.02 0 0-5 2.01-5.02 2.01-.58.22-.99.77-.99 1.42 0 .81.64 1.47 1.44 1.51h33.14c.8-.04 1.44-.7 1.44-1.51 0-.65-.41-1.21-.99-1.42ZM12 30V13h24v17H12Zm16 5h-8v-2h8v2Zm-8.62-16.48 3.57 3.57-1.81 1.81-3.57-3.57-1.81 1.81-.87-3.58-.87-3.58 3.58.87 3.58.87-1.81 1.81Z" }))));
  }
}, [1, "opengemeenten-icon-computerregeling"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-computerregeling", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-computerregeling":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconComputerregeling$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconComputerregeling = OpengemeentenIconComputerregeling$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconComputerregeling, defineCustomElement };
