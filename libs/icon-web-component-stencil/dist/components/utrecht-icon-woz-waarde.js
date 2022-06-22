import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconWozWaarde$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Woz Waarde"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M25.14 29.01a8.461 8.461 0 0 0-1.393 3h-9.748l.003-13.062-3.004 2.682L9 19.392 23.999 6l7 6.25v-2.24h3v4.919l4.999 4.463L37 21.63l-3.001-2.68v6.808a8.505 8.505 0 0 0-2-.247c-.338 0-.671.025-1 .064v-9.303l-7-6.25-6.997 6.248L17 29.01h8.14zm-4.141-4h6v-5h-6v5zm11.663 13c-1.89 0-3.327-1.15-3.78-2.923h-.822v-.771h.679s-.023-.155-.023-.298c0-.121.023-.32.023-.32h-.68v-.771h.823c.476-1.773 1.956-2.916 3.78-2.916a6.08 6.08 0 0 1 1.094.105l-.343 1.275s-.376-.044-.784-.044c-1.051 0-1.868.577-2.221 1.58h2.752l-.177.77h-2.775s-.021.133-.021.299c0 .12.032.32.032.32h2.63l-.165.77h-2.21c.343 1.08 1.193 1.58 2.21 1.58.575 0 1.06-.15 1.06-.15L34 37.83s-.574.182-1.337.182zm-.663-11a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" }))));
  }
}, [1, "utrecht-icon-woz-waarde", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-woz-waarde", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-woz-waarde":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconWozWaarde$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconWozWaarde = UtrechtIconWozWaarde$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconWozWaarde, defineCustomElement };
