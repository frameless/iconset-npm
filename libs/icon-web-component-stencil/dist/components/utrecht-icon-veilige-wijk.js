import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconVeiligeWijk$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Veilige Wijk"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M34 19v-6l-3.5-7-3.5 7v6h-3.5l-5-5H6l6.022 6.949-.005 4.522.296.073 4.184 1.038L24 20.579l4.5 3.6V22h3v4.579l3.437 2.75-1.874 2.342-1.563-1.25V39H42V19h-8zM15.349 30.589l-4.263 4.264-2.118-2.119-1.061 1.061 2.592 2.592a.826.826 0 0 0 1.173 0l4.738-4.738-1.061-1.06zM11.951 27L18 28.5v6c0 3.428-2.205 5.824-6 7.5-3.795-1.676-6-3.95-6-7.378V28.5l5.951-1.5zM21 34h6v-4h-6v4z" }))));
  }
}, [1, "utrecht-icon-veilige-wijk", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-veilige-wijk", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-veilige-wijk":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconVeiligeWijk$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconVeiligeWijk = UtrechtIconVeiligeWijk$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconVeiligeWijk, defineCustomElement };