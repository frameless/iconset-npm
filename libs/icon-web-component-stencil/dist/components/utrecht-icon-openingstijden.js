import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';

const UtrechtIconOpeningstijden$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("utrecht-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { "fill-rule": "evenodd", d: "M23.93 37.98c-7.772 0-14.074-6.3-14.074-14.073 0-7.773 6.302-14.075 14.074-14.075 7.773 0 14.074 6.302 14.074 14.075S31.703 37.98 23.93 37.98M24 6C14.059 6 6 14.06 6 24s8.059 18 18 18c9.94 0 18-8.059 18-18S33.94 6 24 6m-.479 6.508.055 11.004-6.504.05.023 3 8-.062a1.501 1.501 0 0 0 1.489-1.508l-.063-12.5-3 .016z" }))));
  }
}, [1, "utrecht-icon-openingstijden"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-openingstijden", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-openingstijden":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconOpeningstijden$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconOpeningstijden = UtrechtIconOpeningstijden$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconOpeningstijden, defineCustomElement };
