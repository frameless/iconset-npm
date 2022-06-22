import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconLocatie$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M31.4 13.7C31.4 9 28.5 6 23.9 6s-7.5 2.9-7.5 7.7c0 5.9 7.5 15.4 7.5 15.4s7.5-9.5 7.5-15.4zm-10.5-.2c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3zM42 17.9v24.2L29.9 39l-12 3L6 39V14.5l9.6 2.7c.4 1.2.8 2.3 1.4 3.5l-8-2.2v18.3l9 2.2 12-3 9 2.2v-18l-7.1-1.8c.4-1 .6-1.9.8-2.9l9.3 2.4z" }))));
  }
}, [1, "opengemeenten-icon-locatie"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-locatie", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-locatie":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconLocatie$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconLocatie = OpengemeentenIconLocatie$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconLocatie, defineCustomElement };
