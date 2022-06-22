import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconGebruikerIngelogd$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Gebruiker Ingelogd"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M35 23.55c0-.84-.687-1.55-1.5-1.55h-18c-.813 0-1.5.71-1.5 1.55V39h21V23.55zm3 0V42H11V23.55c0-2.51 2.019-4.55 4.5-4.55h15v-3.925c0-3.35-2.691-6.075-6-6.075s-6 2.726-6 6.075V16h-3v-.925C15.5 10.07 19.537 6 24.5 6s9 4.07 9 9.075V19c2.481 0 4.5 2.04 4.5 4.55zM24.481 29.5a3 3 0 1 0 .038-6 3 3 0 0 0-.038 6zm5.019 4.463V37.5h-10v-3.537c0-1.657 1.314-2.963 2.893-2.963h4.286c1.578 0 2.821 1.306 2.821 2.963z" }))));
  }
}, [1, "utrecht-icon-gebruiker-ingelogd", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-gebruiker-ingelogd", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-gebruiker-ingelogd":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconGebruikerIngelogd$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconGebruikerIngelogd = UtrechtIconGebruikerIngelogd$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconGebruikerIngelogd, defineCustomElement };
