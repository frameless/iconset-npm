import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';

const UtrechtIconReclame$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("utrecht-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M34 9H14l-3.8 24.08L9.3 39h3l.9-5.92h14L26.3 39h3l3.2-20.067L34 30.07h-1.7l-.5 3.01h2.7l.8 5.92h3L34 9zm-6.4 21.07H13.7l1.5-9.532 1.3-8.528h13.9l-2.8 18.06zm-1-12.04h-8.1l.5-3.01h8.1l-.5 3.01zm-4 6.02h-5.1l.5-3.01h5.1l-.5 3.01z" }))));
  }
}, [1, "utrecht-icon-reclame"]);
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
