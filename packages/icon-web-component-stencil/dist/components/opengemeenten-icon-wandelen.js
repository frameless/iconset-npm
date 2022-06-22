import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconWandelen$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { "fill-rule": "evenodd", d: "M23.073 12.527a3.264 3.264 0 1 0 0-6.527 3.264 3.264 0 0 0 0 6.527m10.467 4.316-.698 3.257h-3.653l-4.43-5.56a1.903 1.903 0 0 0-1.485-.716l-4.198-.002c-.722 0-1.345 0-5.835 4.339a1.9 1.9 0 0 0-.578 1.288L12 26.403h3.797l.631-6.032a75.601 75.601 0 0 1 1.728-1.587l-.43 6.087-.01-.001-.111 1.706-.03.424h.003l-.375 5.744L15.28 42h4.085l1.783-8.58a1.97 1.97 0 0 0 .038-.276l.293-4.503 2.672 4.677L22.186 42h4.101l1.937-8.558c.11-.488.034-1-.214-1.434l-3.329-5.826.366-5.183 1.741 2.185c.36.453.907.717 1.485.717h3.754L28.146 42h1.535l5.326-24.843-1.467-.314z" }))));
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
