import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';

const UtrechtIconStationSneltrein$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("utrecht-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M40.5 16.2v-2.5c0-2.6-2.1-4.6-4.6-4.6h-8.7c-2.6 0-4.6 2.1-4.6 4.6v2.5c-.9.8-1.5 2-1.5 3.3V36h21V19.5c-.1-1.4-.7-2.5-1.6-3.3zm-15-2.6c0-.9.7-1.6 1.6-1.6H30v3h-4.5v-1.4zm0 16.4c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm6-9c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm1.5-9h2.9c.9 0 1.6.7 1.6 1.6V15H33v-3zm-5.9 25.5L26 39h11l-1-1.5h3l3 4.5h-3l-1-1.5H25L24 42h-3l3.1-4.5h3zM18 34.439v1.5H6v-1.5h12zM10.5 18.1c1.7 0 3 1.3 3 3V27H12v6H7.5v-7.5H6v-5l3-2 .159-.075c.39-.172.903-.325 1.341-.325zm27 8.9c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5zM10 12a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" }))));
  }
}, [1, "utrecht-icon-station-sneltrein"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-station-sneltrein", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-station-sneltrein":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconStationSneltrein$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconStationSneltrein = UtrechtIconStationSneltrein$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconStationSneltrein, defineCustomElement };
