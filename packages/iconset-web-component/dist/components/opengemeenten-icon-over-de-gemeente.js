import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconOverDeGemeente$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M19 26h-5v-4h5v4Zm8-4h-6v4h6v-4Zm-8 7h-5v4h5v-4Zm15-7h-5v4h5v-4Zm-15-7h-5v4h5v-4Zm15 0h-5v4h5v-4Zm-5 18h5v-4h-5v4Zm-8-15.94c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3-3-1.34-3-3Zm2 0c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1ZM42 39v3H6v-3h2V9h4l.04-3L36 6.06V9h4l-.04 30H42Zm-5-27-26-.04V39h6v-2h4v-8h6v8h4v2h6V12Z" }))));
  }
}, [1, "opengemeenten-icon-over-de-gemeente"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-over-de-gemeente", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-over-de-gemeente":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconOverDeGemeente$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconOverDeGemeente = OpengemeentenIconOverDeGemeente$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconOverDeGemeente, defineCustomElement };
