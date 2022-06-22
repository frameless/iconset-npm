import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconAfvalContainer$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Afval Container"), h("path", { fill: "currentColor", d: "M37.44 23.15V19a8.33 8.33 0 00-8.29-8.47H27V9a1.48 1.48 0 00-1.48-1.48h-3A1.48 1.48 0 0021 9v1.48h-2A8.48 8.48 0 0010.55 19V37.4h26.89zM25.47 9v1.48h-3V9zm3 12h-9v-6h9zM6.01 39H42v3H6.01z" }))));
  }
}, [1, "utrecht-icon-afval-container", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-afval-container", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-afval-container":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconAfvalContainer$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconAfvalContainer = UtrechtIconAfvalContainer$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconAfvalContainer, defineCustomElement };
