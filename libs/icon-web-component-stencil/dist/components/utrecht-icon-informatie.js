import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconInformatie$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Informatie"), h("path", { fill: "currentColor", d: "M24 6a18 18 0 1018 18A18 18 0 0024 6zm0 6a2.25 2.25 0 11-2.25 2.25A2.25 2.25 0 0124 12zm4.82 22.47h-9.3v-3h3v-8.94h-3v-3H24a1.49 1.49 0 011 .47 1.54 1.54 0 01.46 1v10.47h3.31z" }))));
  }
}, [1, "utrecht-icon-informatie", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-informatie", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-informatie":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconInformatie$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconInformatie = UtrechtIconInformatie$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconInformatie, defineCustomElement };
