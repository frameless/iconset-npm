import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconBegroting$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Begroting"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M41.5 39.596c-.971.826-2.375 1.404-4.026 1.404-2.788 0-5.411-1.569-6.402-4.419H29.11v-1.817h1.59a7.492 7.492 0 0 1-.041-.743c0-.33.021-.537.041-.743h-1.59v-1.797h1.942C32.043 28.59 34.728 27 37.494 27c1.445 0 2.602.31 3.531.95l-.95 1.92c-.681-.495-1.569-.722-2.581-.722-1.59 0-3.098.743-3.861 2.333h5.679l-.868 1.797h-5.286a5.55 5.55 0 0 0-.042.722c0 .371.021.619.042.764h4.666l-.846 1.817h-3.325c.764 1.508 2.21 2.231 3.821 2.231 1.156 0 2.168-.331 2.87-.991l1.156 1.775zM17 29h9v-1.5h-9V29zm0-4.5h14V23H17v1.5zm0-4.5h14v-1.5H17V20zm0-4.5h14V14H17v1.5zm1 21.533L15.977 35H18v2.033zm3-3.533a1.5 1.5 0 0 0-1.5-1.5H14V9h20v16h3V9c0-1.654-1.346-3-3-3H14c-1.654 0-3 1.346-3 3v24.045c0 .78.288 1.5.813 2.026l6.059 6.084a2.881 2.881 0 0 0 2.025.845H30v-3h-9v-5.5z" }))));
  }
}, [1, "utrecht-icon-begroting", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-begroting", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-begroting":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconBegroting$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconBegroting = UtrechtIconBegroting$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconBegroting, defineCustomElement };