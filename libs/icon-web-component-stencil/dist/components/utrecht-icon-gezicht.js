import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';

const UtrechtIconGezicht$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("utrecht-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M24 6C14.059 6 6 14.059 6 24s8.059 18 18 18 18-8.059 18-18S33.941 6 24 6zm0 33A15 15 0 0 1 9.93 18.85a11.68 11.68 0 0 0 8.44 3.23c5.1 0 10.21-2.45 11.48-7.36 0 4.54 4.51 7.87 9.11 8.49V24c0 8.269-6.691 14.978-14.96 15z" }), h("ellipse", { cx: "19.51", cy: "25.56", rx: "1.49", ry: "1.5" }), h("ellipse", { cx: "28.51", cy: "25.5", rx: "1.49", ry: "1.5" }), h("path", { d: "M24 35.16a9.81 9.81 0 0 1-5.32-1.56 1 1 0 0 1 .332-1.82 1 1 0 0 1 .758.14 8 8 0 0 0 8.6-.09 1.001 1.001 0 0 1 1.12 1.66A9.85 9.85 0 0 1 24 35.16z" }))));
  }
}, [1, "utrecht-icon-gezicht"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-gezicht", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-gezicht":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconGezicht$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconGezicht = UtrechtIconGezicht$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconGezicht, defineCustomElement };
