import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconHerdenking$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M6 39.06h36v3H6v-3Zm36-22v9.98l-5 .02-1-1h-2v8h5v3H9v-3h5v-6l5-.06 1-20.05 4-2.01 4 2.01L29 28l2 .06V12.44c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v3.62h3l1 1h4ZM22 28h4l-.92-18.05L24 9.41l-1.08.54L22 28Zm9 3.06H17v3h14v-3Zm8-11.02-2 .02-1-1h-2v4h3l1 1h1v-4.02Z" }))));
  }
}, [1, "opengemeenten-icon-herdenking"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-herdenking", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-herdenking":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconHerdenking$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconHerdenking = OpengemeentenIconHerdenking$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconHerdenking, defineCustomElement };
