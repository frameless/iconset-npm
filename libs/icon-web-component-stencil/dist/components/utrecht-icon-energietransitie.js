import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';

const UtrechtIconEnergietransitie$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("utrecht-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M23.46 31.46 29 23h-3.5l2.5-4.95h-6.99l-1.54 7.92h3.69L21 31.46z" }), h("path", { d: "M12.12 22.48a12 12 0 0 1 21.1-6.16l2.52-1.63a15 15 0 0 0-26.63 7.79H6l4.51 7.46L15 22.48h-2.88zm25.33-4.41-4.51 7.46h2.94a12 12 0 0 1-21 6.22l-2.53 1.63a15 15 0 0 0 26.57-7.85H42l-4.55-7.46z" }))));
  }
}, [1, "utrecht-icon-energietransitie"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-energietransitie", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-energietransitie":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconEnergietransitie$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconEnergietransitie = UtrechtIconEnergietransitie$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconEnergietransitie, defineCustomElement };
