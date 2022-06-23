import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconGemivaLocatie$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M14 18h5v4h-5zm7 0h6v4h-6zm-7 7h5v4h-5zm15-7h2v4h-2zm0 7h2v4h-2z" }), h("path", { d: "M35 25h7v-7h-7c0-.55-.45-1-1-1s-1 .45-1 1v17h-2v-2h-4v-8h-6v8h-4v2h-6V16h31v-3h-4.01L36 10.04V13v-3H12l-2.01 3H6v3h2v19H6v3h36v-3h-2v-8h-3v8h-2V25Zm0-5h5v3h-5v-3Z" }))));
  }
}, [1, "opengemeenten-icon-gemiva-locatie"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-gemiva-locatie", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-gemiva-locatie":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconGemivaLocatie$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconGemivaLocatie = OpengemeentenIconGemivaLocatie$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconGemivaLocatie, defineCustomElement };
