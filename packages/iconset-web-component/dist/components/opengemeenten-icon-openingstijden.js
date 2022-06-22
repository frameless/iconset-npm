import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconOpeningstijden$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M6 24c0 9.94 8.06 18 18.02 18C33.96 42 42 33.94 42 24S33.95 6 24.02 6C14.07 6 6 14.06 6 24Zm2.97 0C8.97 15.7 15.7 8.97 24 8.97S39.03 15.7 39.03 24c0 8.3-6.73 15.03-15.03 15.03S8.97 32.3 8.97 24Zm16.02-11h-2.94v11.74l10.27 6.16 1.47-2.41-8.81-5.23V13Z" }))));
  }
}, [1, "opengemeenten-icon-openingstijden"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-openingstijden", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-openingstijden":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconOpeningstijden$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconOpeningstijden = OpengemeentenIconOpeningstijden$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconOpeningstijden, defineCustomElement };
