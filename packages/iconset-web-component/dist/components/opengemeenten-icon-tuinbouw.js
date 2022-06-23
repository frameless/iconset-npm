import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconTuinbouw$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M23.96 6.07 6 18.03V42h36V18.03L23.96 6.07ZM31 19h-5.56v-8.24L31 14.37V19Zm3-2.65L37.99 19H34v-2.65ZM22.44 19H17v-4.66l5.44-3.68V19ZM14 19H9.99L14 16.33V19Zm-5 3h5v11.84l-5-11.8V22Zm8 0h5.44v17H17V22Zm8.44 0H31v17h-5.56V22ZM34 22h5v.04l-5 11.78V22ZM9 27.1l5 11.8v.11H9v-11.9ZM34 39v-.12l5-11.78V39h-5Z" }))));
  }
}, [1, "opengemeenten-icon-tuinbouw"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-tuinbouw", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-tuinbouw":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconTuinbouw$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconTuinbouw = OpengemeentenIconTuinbouw$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconTuinbouw, defineCustomElement };
