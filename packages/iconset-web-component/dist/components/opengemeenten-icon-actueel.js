import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconActueel$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M20.9 27.03h16v2h-16v-2Zm0 6h16v-2h-16v2Zm11-8h-11v-7h11v7Zm-2-5h-7v3h7v-3Zm5-6h-14v2h14v-2Zm-1 6h3v-2.04h-3v2.04Zm0 4h3v-2h-3v2Zm8.07 7.55c0 4.09-3.33 7.42-7.42 7.42h-22.2C8.85 38.98 6 36.12 6 32.62V16.13c0-2.17 1.77-3.95 3.94-3.96h.02c1.05 0 2.04.41 2.79 1.15.73.72 1.13 1.66 1.13 2.65v17.06h-3V15.96c0-.18-.09-.37-.24-.52a.976.976 0 0 0-.67-.28c-.53 0-.96.44-.96.96v16.49c0 1.85 1.51 3.37 3.36 3.38 1.03.02 1.91-.37 2.6-1.05.65-.64 1-1.5 1-2.4l-.05-23.53h26l.05 22.56Zm-3 0-.05-19.56H18.91l.05 20.53c0 1.24-.35 2.43-1.02 3.45h16.6c2.44 0 4.42-1.98 4.42-4.42Z" }))));
  }
}, [1, "opengemeenten-icon-actueel"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-actueel", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-actueel":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconActueel$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconActueel = OpengemeentenIconActueel$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconActueel, defineCustomElement };