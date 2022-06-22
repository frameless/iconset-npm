import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconAttentie$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Attentie"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M30.688 18.727C30.701 18.75 32 21.142 32 24c0 2.858-1.299 5.248-1.31 5.268l2.62 1.463C33.379 30.608 35 27.663 35 24c0-3.662-1.621-6.607-1.69-6.73l-2.622 1.459zM24.5 32.855v-17.71l-7 5.666v6.378l7 5.666zM11 26h3.5v-4H11v4zm13.851 11l-9.882-8H11c-1.654 0-3-1.346-3-3v-4c0-1.654 1.346-3 3-3h3.969l9.882-8H27.5v26h-2.649zM41 24c0 6.938-3.06 12.498-3.19 12.731l-2.62-1.462c.027-.05 2.81-5.137 2.81-11.27 0-6.13-2.783-11.218-2.811-11.27l2.621-1.46c.13.232 3.19 5.793 3.19 12.73z" }))));
  }
}, [1, "utrecht-icon-attentie", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-attentie", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-attentie":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconAttentie$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconAttentie = UtrechtIconAttentie$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconAttentie, defineCustomElement };
