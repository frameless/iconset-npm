import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconVeerboot$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M42 37.06v3.27c-.69-.3-1.35-.65-2.07-.94-.64-.25-1.27-.37-1.91-.37-.92 0-1.82.25-2.69.72-1.44.77-2.95 1.2-4.47 1.2-1.27 0-2.55-.3-3.79-.96-.99-.53-1.99-.98-3.11-.98-.16 0-.33 0-.5.03-1.25.15-2.17.84-3.29 1.3-1.03.43-2.11.66-3.2.66-.6 0-1.21-.07-1.81-.21-1.16-.28-2.09-.9-3.17-1.35a4.6 4.6 0 0 0-1.8-.37c-1.5 0-2.77.77-4.21 1.33v-3.31c.59-.3 1.18-.57 1.82-.76.72-.2 1.45-.3 2.18-.3 1.08 0 2.16.22 3.18.65 1.2.5 2.19 1.24 3.55 1.33h.25c1.29 0 2.29-.61 3.43-1.15a8.46 8.46 0 0 1 3.62-.84c.55 0 1.1.06 1.65.18 1.32.29 2.34 1.03 3.57 1.48.58.21 1.15.31 1.72.31.94 0 1.86-.27 2.74-.74 1.4-.75 2.94-1.18 4.47-1.18 1.32 0 2.63.32 3.84 1.01Zm-28-2.22c.42.17.78.36 1.14.54.68.34 1.21.61 1.76.64h.13c.6 0 1.16-.26 2.04-.7.17-.09.35-.17.53-.26 1.42-.68 2.97-1.03 4.48-1.03.7 0 1.4.08 2.08.22 1.03.23 1.87.64 2.61 1.01.42.21.82.4 1.21.55.35.13.68.19 1.04.19.57 0 1.17-.17 1.79-.5 1.51-.81 3.12-1.26 4.72-1.37l1.54-6.12H9.05l1.52 6.06c1.17.06 2.32.31 3.43.78Zm16-8.83v-1h-4v1h-1v-3.02l.68-2.19c.15-.47.55-.79 1-.79h2.65c.45 0 .86.32 1 .78l.66 2.19V26h-1Zm-.17-3-.42-2h-2.86l-.42 2h3.7Zm-7.83 3v-1h-4v1h-1v-3.02l.68-2.19c.15-.47.55-.79 1-.79h2.65c.45 0 .86.32 1 .78l.66 2.19V26h-1Zm-.16-3-.42-2h-2.86l-.42 2h3.7Zm-8.86-4h-1.97v-3h5v-5h11v-2h-2v-2h6v2h-2v2h3v5h5l.02 3h-2l.98 7h-3.03l-.98-7H16.01l-.96 7h-3.03l.96-7Zm12.03-3h4v-2h-4v2Zm-6 0h4v-2h-4v2Z" }))));
  }
}, [1, "opengemeenten-icon-veerboot"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-veerboot", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-veerboot":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconVeerboot$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconVeerboot = OpengemeentenIconVeerboot$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconVeerboot, defineCustomElement };
