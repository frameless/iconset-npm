import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconStookverbod$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { "fill-rule": "evenodd", d: "M25.455 17.234c-.005 1.472-.356 3.122-1.32 3.766-.52-2.856-2.07-9.664-7-12 .218 3.547.75 7.956-5 14 0-3-2-5-2-5 0 7-7.26 15.917 5 19-3.116-5.71-.112-6.925 1.186-11.857.78 1.038 1.338 2.878 1.078 3.916 1.817-2.336 1.777-6.95 1.777-9.027C23.07 22.628 26.508 30.511 23.134 37c8.265-3.444 8.678-9.995 6.354-15.52a9.056 9.056 0 0 1-4.033-4.246zm9.593-3.984 2.475-2.475-1.415-1.415-2.474 2.476L31.16 9.36l-1.414 1.415 2.475 2.475-2.475 2.474 1.414 1.414 2.475-2.474 2.474 2.474 1.415-1.414-2.475-2.474zm6.086.25a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0zm-29 28.503h14v-3h-14v3z" }))));
  }
}, [1, "opengemeenten-icon-stookverbod"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-stookverbod", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-stookverbod":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconStookverbod$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconStookverbod = OpengemeentenIconStookverbod$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconStookverbod, defineCustomElement };
