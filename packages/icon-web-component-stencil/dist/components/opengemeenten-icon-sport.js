import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconSport$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { "fill-rule": "evenodd", d: "M23.161 12.521a3.261 3.261 0 1 0 0-6.522 3.261 3.261 0 0 0 0 6.522m13.022 22.957a3.261 3.261 0 1 0 0 6.523 3.261 3.261 0 0 0 0-6.523M33.933 20H29.63l-4.127-5.232a2.001 2.001 0 0 0-1.567-.763L19.48 14h-.002c-.339 0-.673.085-.97.25l-5.409 3a2.003 2.003 0 0 0-.792.805l-2.682 5 3.524 1.89 2.405-4.482 3.011-1.67-.93 6.826-3.079 6.554H8v4h7.826a2 2 0 0 0 1.81-1.148l3.218-6.85 2.432 4.236-1.241 9.59h4.034l1.261-9.744a2 2 0 0 0-.249-1.253l-2.908-5.065.743-5.445 2.164 2.744a2 2 0 0 0 1.57.762h5.273v-4z" }))));
  }
}, [1, "opengemeenten-icon-sport"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-sport", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-sport":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconSport$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconSport = OpengemeentenIconSport$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconSport, defineCustomElement };
