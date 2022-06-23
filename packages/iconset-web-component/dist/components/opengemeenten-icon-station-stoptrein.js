import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconStationStoptrein$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M8.05 12c0-1.65 1.35-3 3-3s3 1.35 3 3-1.35 3-3 3-3-1.35-3-3Zm26.43-6C38.63 6 42 9.37 42 13.52v14.03c0 3.29-2.44 6-5.6 6.45H23.6a6.511 6.511 0 0 1-5.6-6.44V13.54C18 9.39 21.39 6 25.54 6h8.94Zm0 3h-8.94A4.55 4.55 0 0 0 21 13.54V27.5c0 1.93 1.57 3.5 3.5 3.5h10.99c1.94 0 3.51-1.57 3.51-3.51V13.52C39 11.02 36.98 9 34.48 9Zm-21.41 7H8.84C7.23 16.11 6 17.44 6 19.15V25h2v8h6v-8h2v-5.85c0-1.75-1.27-3.11-2.93-3.15Zm16.91 8.97a2.02 2.02 0 1 0 .002 4.042 2.02 2.02 0 0 0-.002-4.042ZM25.03 22h9.9l2.1-8h-14.1l2.1 8Zm-2.48 20h-3.53l3.44-6h3.53l-3.44 6Zm10.58-6h3.53l3.44 6h-3.53l-3.44-6Z" }))));
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
