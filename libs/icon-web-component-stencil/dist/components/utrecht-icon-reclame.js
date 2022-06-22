import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconReclame$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Reclame"), h("path", { fill: "currentColor", d: "M34 9H14l-3.8 24.08027L9.3 39h3l.9-5.91973h14L26.3 39h3l3.2-20.06689L34 30.07023h-1.7l-.5 3.01004h2.7L35.3 39h3L34 9zm-6.4 21.07023H13.7l1.5-9.53177 1.3-8.52843h13.9l-2.8 18.0602zm-1-12.04013h-8.1l.5-3.01003h8.1l-.5 3.01003zm-4 6.02007h-5.1l.5-3.01004h5.1l-.5 3.01004z" }))));
  }
}, [1, "utrecht-icon-reclame", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-reclame", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-reclame":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconReclame$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconReclame = UtrechtIconReclame$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconReclame, defineCustomElement };
