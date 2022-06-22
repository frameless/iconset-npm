import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconVluchtelingenOpvang$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Vluchtelingen Opvang"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M23.46 23a4.5 4.5 0 1 0-4.5-4.5 4.51 4.51 0 0 0 4.5 4.5Zm-2.35-5.24a3.59 3.59 0 0 0 .47 0 4.36 4.36 0 0 0 3-1.16l.08.09a3.91 3.91 0 0 0 1.07.75 2.51 2.51 0 0 1 .23 1 2.48 2.48 0 0 1-4.95 0 2.3 2.3 0 0 1 .1-.67ZM34.48 23a4.5 4.5 0 1 0-4.5-4.5 4.51 4.51 0 0 0 4.5 4.5Zm-2.35-5.24a3.59 3.59 0 0 0 .47 0 4.4 4.4 0 0 0 3-1.16l.07.09a4.07 4.07 0 0 0 1.07.75 2.51 2.51 0 0 1 .23 1 2.48 2.48 0 0 1-5 0 2.3 2.3 0 0 1 .16-.67ZM20.47 32H17v-1.54A1.48 1.48 0 0 0 15.49 29h-3A1.51 1.51 0 0 0 11 30.49V32H7.5A1.5 1.5 0 0 0 6 33.5v7A1.5 1.5 0 0 0 7.5 42h13a1.5 1.5 0 0 0 1.5-1.5v-7a1.54 1.54 0 0 0-1.53-1.5ZM15 32h-2v-1h2Zm26-5a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3v.4a3.38 3.38 0 0 1 2 2.6h1.5a3.5 3.5 0 0 1 3.5 3.5V35h7.94A2.06 2.06 0 0 1 34 37.07V42h4v-4h3Zm-12 7a2.48 2.48 0 0 1-2.48-2.48 2.3 2.3 0 0 1 .13-.74 3.57 3.57 0 0 0 .47 0 4.41 4.41 0 0 0 3-1.16.73.73 0 0 1 .08.09 4.1 4.1 0 0 0 1.07.74 2.54 2.54 0 0 1 .23 1A2.48 2.48 0 0 1 29 34Zm13-22.5V15L29 9.42 16 15v-3.45L29.05 6Z" }))));
  }
}, [1, "utrecht-icon-vluchtelingen-opvang", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-vluchtelingen-opvang", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-vluchtelingen-opvang":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconVluchtelingenOpvang$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconVluchtelingenOpvang = UtrechtIconVluchtelingenOpvang$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconVluchtelingenOpvang, defineCustomElement };