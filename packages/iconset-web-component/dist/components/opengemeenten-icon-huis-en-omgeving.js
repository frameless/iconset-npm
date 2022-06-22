import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconHuisEnOmgeving$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M42 30.16c0 4.48-9.08 6.82-17.98 6.82s-18-2.34-18-6.82c0-2.5 3-4.53 7.98-5.72v2.98c-3.26.76-4.79 1.74-4.79 2.73 0 1.6 4.97 3.87 14.81 3.87s14.68-2.38 14.68-3.85c0-.96-1.32-2.01-4.71-2.81v-3c5.13 1.18 8 3.25 8 5.81Zm-7.07-10.18-1.95 2.4-.98-1.04V31H16v-9.63l-1.1.96-1.97-2.37 11-9.15L29 14.92v-1.91h3v4.36l2.93 2.62ZM29 18.93l-5.05-4.1-4.95 4.1V28h10v-9.07ZM21 25h6v-4h-6v4Z" }))));
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
