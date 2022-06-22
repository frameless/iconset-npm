import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconHuisEnOmgeving$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { "fill-rule": "evenodd", d: "M22.5 15.5h3v-2h-3v2zM39 37.985l-7.5-2.251V18.367l7.5 2.25v17.368zM29.55 14.1 28 12.938V18.5h-8v-5.562L18.45 14.1l-.9-1.2L24 8.064l2.5 1.875V9H28v2.063l2.45 1.838-.9 1.199zM30 35.569 18.5 37.78V20.506C20.847 24.829 24 29 24 29s3.63-4.803 6-9.444v16.013zm-13 2.3-8-1.598V18.016l8 2.4V37.87zm14.728-22.566c.171-.656.272-1.267.272-1.808C32 8.57 29.054 6 23.973 6 18.892 6 16 8.57 16 13.495c0 1.05.367 2.362.94 3.77L6 13.986V38.73l11.494 2.299 12.928-2.486L42 42.016V18.384l-10.272-3.081z" }))));
  }
}, [1, "opengemeenten-icon-huis-en-omgeving"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-huis-en-omgeving", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-huis-en-omgeving":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconHuisEnOmgeving$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconHuisEnOmgeving = OpengemeentenIconHuisEnOmgeving$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconHuisEnOmgeving, defineCustomElement };
