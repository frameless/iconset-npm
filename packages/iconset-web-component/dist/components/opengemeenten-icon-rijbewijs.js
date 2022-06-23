import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconRijbewijs$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "m23.93 24.03-1.3-3.85c-.23-.71-.89-1.18-1.64-1.18h-5.95c-.73 0-1.39.47-1.64 1.18l-1.31 3.84c-.05.16-.08.33-.08.5v6.49h2v-2h8v2h2v-6.49c0-.16-.03-.32-.08-.48Zm-9.05-3.35c.03-.09.11-.2.24-.2h5.79c.12 0 .2.09.23.19l.95 2.81h-8.16l.95-2.8Zm-.62 5.79c-.41 0-.75-.33-.75-.74s.33-.74.75-.74a.74.74 0 1 1 0 1.48Zm7.51 0c-.41 0-.75-.33-.75-.74s.33-.74.75-.74a.74.74 0 1 1 0 1.48ZM27 29h7v2h-7v-2Zm0-5h9v2h-9v-2Zm0-5h9v2h-9v-2Zm10.07-8H10.93C8.21 11 6 13.21 6 15.93v16.15c0 2.72 2.21 4.93 4.93 4.93h26.15c2.72 0 4.93-2.21 4.93-4.93V15.93c0-2.72-2.21-4.93-4.93-4.93ZM39 32.07c0 1.06-.86 1.93-1.93 1.93H10.93C9.87 34 9 33.14 9 32.07V15.93c0-1.06.86-1.93 1.93-1.93H22v3h4v-3h11.07c1.06 0 1.93.86 1.93 1.93v16.15Z" }))));
  }
}, [1, "opengemeenten-icon-rijbewijs"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-rijbewijs", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-rijbewijs":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconRijbewijs$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconRijbewijs = OpengemeentenIconRijbewijs$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconRijbewijs, defineCustomElement };