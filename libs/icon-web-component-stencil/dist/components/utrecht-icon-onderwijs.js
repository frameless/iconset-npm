import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconOnderwijs$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Onderwijs"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M42.095 35.31l-.006 1.524H29.994v.016a1.522 1.522 0 00-1.469 1.519v1.48a1.52 1.52 0 001.47 1.519v.007h12.078l-.006 1.523s-33.088-.056-33.056-.025a3.01 3.01 0 01-3.01-3.011v-1.505a3.01 3.01 0 013.01-3.011l32.742-.035h.342zm-.724 3.02a.75.75 0 010 1.5H30.95a.75.75 0 010-1.5zM30.089 7l-.025 3.55v21.923l-5.893-.024v1.596h-1.5v-1.602l-1.532-.006c-.515 0-1.017-.05-1.512-.122v1.657h-1.5v-1.98c-4.303-1.294-7.438-5.283-7.438-10.005l-.008-11.275h-.01L10.65 7l2.838 2.99h13.51L30.09 7zm7.5 21.639l-1.071 3.516a.5.5 0 01-.857 0l-1.072-3.516h3zm0-16.514v15.773h-3V12.125h3zm-15.51 10.577h-3.275l1.638 2.306 1.638-2.306zm-5.8-7.393a3.358 3.358 0 10.001 6.716 3.358 3.358 0 00-.001-6.716zm8.196 0a3.358 3.358 0 10.001 6.716 3.358 3.358 0 00-.001-6.716zm-8.196 1.5a1.858 1.858 0 010 3.714 1.859 1.859 0 01-1.857-1.856 1.86 1.86 0 011.857-1.858zm8.196 0a1.858 1.858 0 010 3.714 1.859 1.859 0 01-1.857-1.856 1.86 1.86 0 011.857-1.858zM37.59 9.9v1.521h-3V9.898h3z" }))));
  }
}, [1, "utrecht-icon-onderwijs", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-onderwijs", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-onderwijs":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconOnderwijs$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconOnderwijs = UtrechtIconOnderwijs$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconOnderwijs, defineCustomElement };
