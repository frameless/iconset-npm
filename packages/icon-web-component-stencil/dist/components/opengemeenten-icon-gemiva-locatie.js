import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconGemivaLocatie$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { "fill-rule": "evenodd", d: "M34 26.5h6.5V23H34v3.5zm2-6.5H12v19h5v-1.5h3.5V29h7v8.5H31V39h1.5V21.75a.75.75 0 0 1 .75-.75c.326 0 .596.21.7.5H42V28h-8v11h2v-9.5h3V39h3v3H6v-3h3V20H6v-3h4l2-3h24l2 3h4v3h-6zm-22 6.5h5V22h-5v4.5zm7.5 0h5V22h-5v4.5zm7.5 0h2V22h-2v4.5zm0 7h2V29h-2v4.5zm-15 0h5V29h-5v4.5z" }))));
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
