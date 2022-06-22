import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconContactGemeente$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Contact Gemeente"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M39 9H27.5v1.5H39a1.5 1.5 0 0 1 1.5 1.5v8.5A1.5 1.5 0 0 1 39 22H28.5v2l-2-2h-4.083A2.99 2.99 0 0 0 25 23.5h1l4 4v-4h9c1.654 0 3-1.346 3-3V12c0-1.654-1.346-3-3-3zm-1 25.5h-4c-2.209 0-4 1.392-4 3.5v4h12v-4c0-2.108-1.791-3.5-4-3.5zm-24 0h-4c-2.209 0-4 1.392-4 3.5v4h12v-4c0-2.108-1.791-3.5-4-3.5zm3-4.979a3.5 3.5 0 1 0-7-.042 3.5 3.5 0 0 0 7 .042zM23 19a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 23 7.5H9A1.5 1.5 0 0 0 7.5 9v8.5A1.5 1.5 0 0 0 9 19h7.5v2l2-2H23zm0 1.5h-4l-4 4v-4H9c-1.654 0-3-1.346-3-3V9c0-1.654 1.346-3 3-3h14c1.654 0 3 1.346 3 3v8.5c0 1.654-1.346 3-3 3zm8 8.979a3.5 3.5 0 1 1 7 .042 3.5 3.5 0 0 1-7-.042z" }))));
  }
}, [1, "utrecht-icon-contact-gemeente", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-contact-gemeente", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-contact-gemeente":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconContactGemeente$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconContactGemeente = UtrechtIconContactGemeente$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconContactGemeente, defineCustomElement };
