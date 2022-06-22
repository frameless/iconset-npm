import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconRijbewijs$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Rijbewijs"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M27 31h6v-1.5h-6V31zm12 1.5c0 .827-.673 1.5-1.5 1.5h-27c-.827 0-1.5-.673-1.5-1.5v-17c0-.827.673-1.5 1.5-1.5h12v3h3v-3h12c.827 0 1.5.673 1.5 1.5v17zM37.5 11h-27A4.505 4.505 0 0 0 6 15.5v17c0 2.481 2.019 4.5 4.5 4.5h27c2.481 0 4.5-2.019 4.5-4.5v-17c0-2.481-2.019-4.5-4.5-4.5zM27 26.5h9V25h-9v1.5zm0-4.5h9v-1.5h-9V22zm-6.5 5.25a.75.75 0 0 1-1.5 0 .75.75 0 0 1 1.5 0zm-6 .75H18v-1.5h-3.5V28zm-1.75 0a.75.75 0 1 1 .75-.75.75.75 0 0 1-.75.75zm1.115-5.517a.753.753 0 0 1 .702-.486h3.419c.311 0 .593.195.706.497L19.5 24.5H13l.865-2.017zm4.121-1.983h-3.419c-.933 0-1.78.584-2.099 1.44L11 25.5V31h1.5v-1.5H20V31h1.5v-5.5l-1.407-3.543a2.258 2.258 0 0 0-2.107-1.457z" }))));
  }
}, [1, "utrecht-icon-rijbewijs", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-rijbewijs", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-rijbewijs":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconRijbewijs$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconRijbewijs = UtrechtIconRijbewijs$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconRijbewijs, defineCustomElement };
