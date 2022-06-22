import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconIdkaart$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { "fill-rule": "evenodd", d: "M27 30h6v-1.5h-6V30zm-10.518-6a3 3 0 1 0 .036-6 3 3 0 0 0-.036 6zM18 25.5h-3a3 3 0 0 0-3 3V30h9v-1.5a3 3 0 0 0-3-3zm21-11c0-.827-.673-1.5-1.5-1.5h-12v3h-3v-3h-12c-.827 0-1.5.673-1.5 1.5v17c0 .827.673 1.5 1.5 1.5h27c.827 0 1.5-.673 1.5-1.5v-17zm3 0v17c0 2.481-2.019 4.5-4.5 4.5h-27A4.505 4.505 0 0 1 6 31.5v-17c0-2.481 2.019-4.5 4.5-4.5h27c2.481 0 4.5 2.019 4.5 4.5zm-15 11h9V24h-9v1.5zm0-4.5h9v-1.5h-9V21z" }))));
  }
}, [1, "opengemeenten-icon-idkaart"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-idkaart", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-idkaart":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconIdkaart$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconIdkaart = OpengemeentenIconIdkaart$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconIdkaart, defineCustomElement };
