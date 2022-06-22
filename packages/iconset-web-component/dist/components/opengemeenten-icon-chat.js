import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconChat$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M30 21.5v-9c0-2.49-2.01-4.5-4.5-4.5h-15C8.01 8 6 10.01 6 12.5v8.93a4.59 4.59 0 0 0 4 4.55l.04 6.05L17.02 26h8.48c2.49 0 4.5-2.01 4.5-4.5ZM16 23l-3 3.02V23h-2.5c-.83 0-1.5-.67-1.5-1.5v-9c0-.83.67-1.5 1.5-1.5h15c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5H16Zm26 6.43c0 2.33-1.73 4.26-3.96 4.55L38 40.03 31.09 34H22.5c-2.49 0-4.5-2.01-4.5-4.5V28h3v1.5c0 .83.67 1.5 1.5 1.5H32l3 3.02V31h2.5c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5H32v-3h5.5c2.49 0 4.5 2.01 4.5 4.5v8.93Z" }))));
  }
}, [1, "opengemeenten-icon-chat"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-chat", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-chat":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconChat$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconChat = OpengemeentenIconChat$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconChat, defineCustomElement };
