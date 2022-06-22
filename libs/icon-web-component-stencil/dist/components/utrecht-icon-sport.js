import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconSport$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Sport"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M23.161 12.521a3.261 3.261 0 1 0 0-6.522 3.261 3.261 0 0 0 0 6.522m13.022 22.957a3.261 3.261 0 1 0 0 6.523 3.261 3.261 0 0 0 0-6.523M33.933 20H29.63l-4.127-5.232a2.001 2.001 0 0 0-1.567-.763L19.48 14h-.002c-.339 0-.673.085-.97.25l-5.409 3a2.003 2.003 0 0 0-.792.805l-2.682 5 3.524 1.89 2.405-4.482 3.011-1.67-.93 6.826-3.079 6.554H8v4h7.826a2 2 0 0 0 1.81-1.148l3.218-6.85 2.432 4.236-1.241 9.59h4.034l1.261-9.744a2 2 0 0 0-.249-1.253l-2.908-5.065.743-5.445 2.164 2.744a2 2 0 0 0 1.57.762h5.273v-4z" }))));
  }
}, [1, "utrecht-icon-sport", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-sport", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-sport":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconSport$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconSport = UtrechtIconSport$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconSport, defineCustomElement };
