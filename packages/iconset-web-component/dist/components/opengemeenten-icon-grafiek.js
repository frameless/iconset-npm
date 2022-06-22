import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconGrafiek$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { "fill-rule": "evenodd", d: "M36.054 26.434v15.047h-6.055V26.434h6.055zm-18.055 4.547v10.5H12v-10.5h5.999zm9-10.556v21.002l-5.944.054V20.48L27 20.425zM34.41 7v6.33l-2.415-2.415-6.648 6.638-4.221-4.222-6.331 6.33-1.488-1.487 7.819-7.83 4.22 4.222 5.15-5.15L28.079 7h6.33z" }))));
  }
}, [1, "opengemeenten-icon-grafiek"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-grafiek", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-grafiek":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconGrafiek$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconGrafiek = OpengemeentenIconGrafiek$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconGrafiek, defineCustomElement };
