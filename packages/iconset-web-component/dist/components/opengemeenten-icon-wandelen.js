import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconWandelen$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M21.24 9.31c0-1.84 1.49-3.33 3.33-3.33s3.33 1.49 3.33 3.33-1.49 3.33-3.33 3.33-3.33-1.49-3.33-3.33Zm7.93 11.24s-4.08-5.72-4.14-5.78c-.56-.59-1.83-1.47-3.91-.74-1.11.39-6.12 2.41-7.08 2.82-1.22.51-2.01 1.7-2.02 3.03L12 25.03h3.38l-.04-5.06c1.11-.47 2.44-.95 3.49-1.38l-5.42 23.4h3.52l3.17-13.23 3.52 3.77v9.46h3.37v-9.45c.01-.79-.4-1.56-.91-2.17l-2.34-2.8c.13-.69.83-4.17 1.37-6.84l1.13 1.61a3.443 3.443 0 0 0 2.93 1.61h3.82l-2.77 18h2.33l3.29-21.35-6.67-.04Z" }))));
  }
}, [1, "opengemeenten-icon-wandelen"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-wandelen", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-wandelen":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconWandelen$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconWandelen = OpengemeentenIconWandelen$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconWandelen, defineCustomElement };
