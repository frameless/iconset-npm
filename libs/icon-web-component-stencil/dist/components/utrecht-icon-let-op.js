import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';

const UtrechtIconLetOp$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("utrecht-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { "fill-rule": "evenodd", d: "M24.5 33.002a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9m-3.06-4.44L20.5 6h8l-.94 22.563A1.5 1.5 0 0 1 26.061 30h-3.122a1.5 1.5 0 0 1-1.499-1.437" }))));
  }
}, [1, "utrecht-icon-let-op"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-let-op", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-let-op":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconLetOp$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconLetOp = UtrechtIconLetOp$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconLetOp, defineCustomElement };
