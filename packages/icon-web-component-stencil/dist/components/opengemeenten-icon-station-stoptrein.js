import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconStationStoptrein$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M42 16.5c0-3.3-2.7-6-6-6V9h-9v1.5c-3.3 0-6 2.7-6 6V36h21V16.5zM31.5 27c-1.2 0-2.2-1-2.2-2.2 0-1.2 1-2.2 2.2-2.2 1.2 0 2.2 1 2.2 2.2.1 1.2-1 2.2-2.2 2.2zm-4.4 10.5L26 39h11l-1-1.5h3l3 4.5h-3l-1-1.5H25L24 42h-3l3.1-4.5h3zM18 34.439v1.5H6v-1.5h12zM10.5 18.1c1.7 0 3 1.3 3 3V27H12v6H7.5v-7.5H6v-5l3-2 .159-.075c.39-.172.903-.325 1.341-.325zM36 13.5c1.7 0 3 1.4 3 3v3H24v-3c0-1.7 1.4-3 3-3h9zM10 12a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" }))));
  }
}, [1, "opengemeenten-icon-station-stoptrein"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-station-stoptrein", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-station-stoptrein":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconStationStoptrein$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconStationStoptrein = OpengemeentenIconStationStoptrein$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconStationStoptrein, defineCustomElement };
