import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconHorecavergunningen$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "m19.6 22.73 6.36-6.36 2.12 2.11-8.49 8.49-5.31-5.31 2.13-2.12 3.2 3.18ZM17.98 31h-8L9.96 9H32v11h3V9c0-1.66-1.34-3-3-3H9.96c-1.66 0-3 1.34-3 3v24l8.95 8.95 11.09.03v-.99c0-.73.21-1.4.55-1.99h-9.58v-8ZM36 34v5h2a2 2 0 0 1 2 2v1H29v-1a2 2 0 0 1 2-2h2v-5c-2.71-.64-4.78-2.97-5-5.82V22h13v6.18c-.22 2.85-2.29 5.18-5 5.82Zm2-6v-3h-7v3h7Z" }))));
  }
}, [1, "opengemeenten-icon-horecavergunningen"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-horecavergunningen", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-horecavergunningen":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconHorecavergunningen$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconHorecavergunningen = OpengemeentenIconHorecavergunningen$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconHorecavergunningen, defineCustomElement };
