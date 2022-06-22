import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconOmgevingsvergunning$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Omgevingsvergunning"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M36.5 28.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm3.5.151C40 33.768 33.5 42 33.5 42S27 33.768 27 28.651C27 24.558 29.5 22 33.5 22s6.5 2.558 6.5 6.651zM16 35h-2.023L16 37.031V35zm13.5 4l2 3H17.898a2.883 2.883 0 0 1-2.025-.845l-6.06-6.085C9.289 34.546 9 33.826 9 33.045V9c0-1.654 1.346-3 3-3h20c1.654 0 3 1.346 3 3v11.5h-3V9H12v23h5.5a1.5 1.5 0 0 1 1.5 1.5V39h10.5zm-7.526-18.635l2.655-5.974 2.742 1.218-4 9a1.5 1.5 0 0 1-1.36.891H22a1.5 1.5 0 0 1-1.362-.872l-3-6.5 2.724-1.256 1.612 3.493z" }))));
  }
}, [1, "utrecht-icon-omgevingsvergunning", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-omgevingsvergunning", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-omgevingsvergunning":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconOmgevingsvergunning$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconOmgevingsvergunning = UtrechtIconOmgevingsvergunning$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconOmgevingsvergunning, defineCustomElement };
