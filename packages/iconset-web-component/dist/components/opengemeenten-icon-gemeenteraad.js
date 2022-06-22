import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconGemeenteraad$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { "fill-rule": "evenodd", d: "M34 35v7H14v-7a6 6 0 0 1 4.867-5.89c.872 2.445 2.151 4.785 3.213 6.518v-.001l1.164-3.822-.774-.775a.749.749 0 0 1-.141-.865L22.912 29h2.176l.583 1.165a.749.749 0 0 1-.141.865l-.813.814 1.128 3.913c1.079-1.744 2.398-4.136 3.29-6.647A6 6 0 0 1 34 35M7.5 21.981a3 3 0 1 1 6 .037 3 3 0 0 1-6-.037M13.131 32H6v-3c0-1.657 1.343-2.5 3-2.5h3c1.657 0 3 .843 3 2.5v.426A7.523 7.523 0 0 0 13.131 32M42 29v3h-7.131A7.523 7.523 0 0 0 33 29.426V29c0-1.657 1.343-2.5 3-2.5h3c1.657 0 3 .843 3 2.5m-7.5-7.019a3 3 0 1 1 6 .037 3 3 0 0 1-6-.037m-16.415-3.449c.926.897 2.087 1.178 3.445 1.178 2.206 0 4.057-1.192 4.608-3.224a4.069 4.069 0 0 0 3.837 3.508C29.723 23.071 27.142 25.5 24 25.5c-3.309 0-6-2.691-6-6 0-.33.034-.652.085-.968M24 27c4.135 0 7.5-3.364 7.5-7.5S28.135 12 24 12s-7.5 3.364-7.5 7.5S19.865 27 24 27" }))));
  }
}, [1, "opengemeenten-icon-gemeenteraad"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-gemeenteraad", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-gemeenteraad":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconGemeenteraad$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconGemeenteraad = OpengemeentenIconGemeenteraad$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconGemeenteraad, defineCustomElement };
