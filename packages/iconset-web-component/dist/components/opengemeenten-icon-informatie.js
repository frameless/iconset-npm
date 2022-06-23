import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconInformatie$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M23.98 6C14.05 6 6 14.06 6 24s8.05 18 17.98 18S42 33.94 42 24 33.94 6 23.98 6Zm0 33C15.72 39 9 32.27 9 24S15.72 9 23.98 9 39 15.73 39 24s-6.74 15-15.02 15Z" }), h("path", { d: "M26 21.98c0-1.09-.89-1.98-1.98-1.98H20v3h3v7h-3v3h9v-3h-3v-8.02Zm-2.01-3.99c.59 0 1.07-.19 1.44-.56.37-.37.55-.85.55-1.43s-.18-1.06-.55-1.43c-.37-.37-.85-.56-1.44-.56s-1.07.19-1.44.56c-.37.37-.55.85-.55 1.43s.18 1.06.55 1.43c.37.37.85.56 1.44.56Z" }))));
  }
}, [1, "opengemeenten-icon-informatie"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-informatie", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-informatie":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconInformatie$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconInformatie = OpengemeentenIconInformatie$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconInformatie, defineCustomElement };
