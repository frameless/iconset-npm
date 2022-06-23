import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconElectrischLaden$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M6 39h24v3H6v-3ZM23 9H12.99c-.55 0-.99.45-.99 1v24h12V10c0-.5-.5-1-1-1m16 4h-5v3h5v-3m0-7c.55 0 1 .45 1 1v3h2v6c0 1.66-1.34 3-3 3h-1v9.48c0 2.5-2.03 4.52-4.52 4.52S29 31.01 29 28.56v-3.04c0-.84-.68-1.52-1.52-1.52H27v13H9V10c0-2.21 1.79-3.99 3.99-3.99H23c2.16 0 4 1.84 4 3.99v11h.48c2.49 0 4.52 2.03 4.52 4.52v3.04c0 .79.64 1.44 1.44 1.44.88 0 1.56-.68 1.56-1.52V19h-1c-1.66 0-3-1.34-3-3v-6h2V7c0-.55.45-1 1-1s1 .45 1 1v3h3V7c0-.55.45-1 1-1ZM22 19h-3.84l2.5-5H16l-2 8h2.8l-2 6h2.17L22 19Z" }))));
  }
}, [1, "opengemeenten-icon-electrisch-laden"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-electrisch-laden", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-electrisch-laden":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconElectrischLaden$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconElectrischLaden = OpengemeentenIconElectrischLaden$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconElectrischLaden, defineCustomElement };