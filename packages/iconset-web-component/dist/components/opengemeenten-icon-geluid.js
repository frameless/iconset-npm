import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconGeluid$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M13.1 18H9c-1.66 0-3 1.34-3 3v6c0 1.66 1.34 3 3 3h4.1l10.93 7H27V11h-2.97L13.1 18Zm-.1 9H9v-6h4v6Zm11 5.96-8-5.03v-7.92l8-5.04v17.98Zm8-14.23zm-.31 0S33 21.15 33 24s-1.3 5.25-1.31 5.27l2.62 1.46C34.38 30.61 36 27.66 36 24s-1.62-6.61-1.69-6.73l-2.62 1.46Zm7.12-7.46-2.62 1.46C36.22 12.78 39 17.87 39 24s-2.78 11.22-2.81 11.27l2.62 1.46C38.94 36.5 42 30.94 42 24s-3.06-12.5-3.19-12.73Z" }))));
  }
}, [1, "opengemeenten-icon-geluid"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-geluid", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-geluid":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconGeluid$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconGeluid = OpengemeentenIconGeluid$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconGeluid, defineCustomElement };
