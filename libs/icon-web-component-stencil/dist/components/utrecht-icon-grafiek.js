import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconGrafiek$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Grafiek"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M36.054 26.434v15.047h-6.055V26.434h6.055zm-18.055 4.547v10.5H12v-10.5h5.999zm9-10.556v21.002l-5.944.054V20.48L27 20.425zM34.41 7v6.33l-2.415-2.415-6.648 6.638-4.221-4.222-6.331 6.33-1.488-1.487 7.819-7.83 4.22 4.222 5.15-5.15L28.079 7h6.33z" }))));
  }
}, [1, "utrecht-icon-grafiek", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-grafiek", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-grafiek":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconGrafiek$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconGrafiek = UtrechtIconGrafiek$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconGrafiek, defineCustomElement };
