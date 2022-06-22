import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconStookverbod$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Stookverbod"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M25.455 17.234c-.005 1.472-.356 3.122-1.32 3.766-.52-2.856-2.07-9.664-7-12 .218 3.547.75 7.956-5 14 0-3-2-5-2-5 0 7-7.26 15.917 5 19-3.116-5.71-.112-6.925 1.186-11.857.78 1.038 1.338 2.878 1.078 3.916 1.817-2.336 1.777-6.95 1.777-9.027C23.07 22.628 26.508 30.511 23.134 37c8.265-3.444 8.678-9.995 6.354-15.52a9.056 9.056 0 0 1-4.033-4.246zm9.593-3.984l2.475-2.475-1.415-1.415-2.474 2.476L31.16 9.36l-1.414 1.415 2.475 2.475-2.475 2.474 1.414 1.414 2.475-2.474 2.474 2.474 1.415-1.414-2.475-2.474zm6.086.25a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0zm-29 28.503h14v-3h-14v3z" }))));
  }
}, [1, "utrecht-icon-stookverbod", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-stookverbod", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-stookverbod":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconStookverbod$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconStookverbod = UtrechtIconStookverbod$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconStookverbod, defineCustomElement };
