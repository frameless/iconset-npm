import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconKopenEnHuren$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Kopen En Huren"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M38.93 26.51l-1.752.99-1.248-.743v-1.54l-2.978-1.787-1.417.709-.605-.361v-1.561l-2.978-1.787-1.437.719-2.684-1.6a5.97 5.97 0 0 1-3.437 1.428 5.956 5.956 0 0 1-.464.023 5.916 5.916 0 0 1-2.5-.562v-3.661c.307.138.642.223 1 .223a2.5 2.5 0 1 0-2.5-2.5v4.96a5.981 5.981 0 0 1-2-4.46c0-3.308 2.69-6 6-6 2.949 0 5.402 2.14 5.9 4.948.062.342.1.692.1 1.052 0 .78-.154 1.526-.427 2.21l13.427 7.645v1.656zM19.93 39h-7.5v-7.431l3.975-3.138 3.525 2.938v7.63zm8.965-23.302c.017-.231.035-.462.035-.698 0-4.962-4.038-9-9-9s-9 4.038-9 9c0 3.525 2.042 6.574 5 8.05v1.934L6 32.823l1.86 2.355 1.57-1.24V42h13.5v-8.131l1.54 1.284 1.92-2.305-3.46-2.884V26h-3v1.465l-2.5-2.084v-1.75a8.86 8.86 0 0 0 2.5.369 8.93 8.93 0 0 0 3.937-.92l2.253 1.344 2.31-.924v2.302l2.709 1.615 2.29-.917v2.283l3.5 2.087 5-2.38v-5.344l-13.034-7.448z" }))));
  }
}, [1, "utrecht-icon-kopen-en-huren", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-kopen-en-huren", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-kopen-en-huren":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconKopenEnHuren$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconKopenEnHuren = UtrechtIconKopenEnHuren$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconKopenEnHuren, defineCustomElement };