import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';

const UtrechtIconAfvalkalender$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("utrecht-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { "fill-rule": "evenodd", d: "M31 21h-2a1.5 1.5 0 0 0-1.5-1.5h-7A1.5 1.5 0 0 0 19 21h-1v1.5h13V21zM19.5 36a1.5 1.5 0 1 0 .001-2.999A1.5 1.5 0 0 0 19.5 36zm-.187-4.481c.063-.004.123-.019.187-.019a3 3 0 0 1 3 3c0 .549-.158 1.057-.416 1.5h4.421A1.5 1.5 0 0 0 28 34.625L29 24H19l.313 7.519zM21 10h6V7h-6v3zm14 6.5H13v21c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5v-21zm3-1.5v22.5c0 2.481-2.019 4.5-4.5 4.5h-19a4.505 4.505 0 0 1-4.5-4.5V7h5v3h-2v3.5h21.999V10H33V7h4.999v8H38zm-21.5-4h3V6h-3v5zm12 0h3V6h-3v5z" }))));
  }
}, [1, "utrecht-icon-afvalkalender"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-afvalkalender", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-afvalkalender":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconAfvalkalender$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconAfvalkalender = UtrechtIconAfvalkalender$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconAfvalkalender, defineCustomElement };
