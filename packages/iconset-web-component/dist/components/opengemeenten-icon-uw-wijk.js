import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconUwWijk$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { "fill-rule": "evenodd", d: "M14 35h-4c-2.209 0-4 1.073-4 3.182V42h12v-3.818C18 36.073 16.209 35 14 35zm-2.004-8.5a3.5 3.5 0 0 0-.02 7h.021a3.5 3.5 0 0 0 .022-7h-.023zM34 19v-6.5L30.5 6 27 12.5V19h-3.071l-5.179-5H6l6 7h.022l-.004 4h.009a4.968 4.968 0 0 1 3.527 1.486c.158.16.285.339.418.515L24 20.579l5 4V22.5h3v4.479l2.937 2.35-1.875 2.342-1.062-.85V39h10V19h-8zM21 35h6v-5h-6v5z" }))));
  }
}, [1, "opengemeenten-icon-uw-wijk"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-uw-wijk", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-uw-wijk":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconUwWijk$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconUwWijk = OpengemeentenIconUwWijk$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconUwWijk, defineCustomElement };
