import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconParticipatieCampagne$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M42 21.52c0-1.47-.79-2.76-1.97-3.47V7.96h-4.9L23.4 15.05H9.48c-.83 0-1.5.67-1.5 1.5v1.5H5.99v7.98h1.99v1.48c0 .83.67 1.5 1.5 1.5h1.63l2.67 9.91c.18.65.77 1.11 1.45 1.11h6.92a1.5 1.5 0 0 0 1.45-1.89l-2.46-9.13h1.59l12.42 7.03h4.88V24.99c1.17-.72 1.97-2 1.97-3.48ZM20.2 37.04h-3.81l-2.16-8.02h3.81l2.16 8.02Zm-9.22-11.02v-7.96h11.03v7.96H10.99Zm26.05 7.03h-1.09l-10.93-6.19v-9.28l10.95-6.62h1.06v22.09Z" }))));
  }
}, [1, "opengemeenten-icon-participatie-campagne"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-participatie-campagne", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-participatie-campagne":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconParticipatieCampagne$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconParticipatieCampagne = OpengemeentenIconParticipatieCampagne$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconParticipatieCampagne, defineCustomElement };
