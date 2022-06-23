import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconParticipatiePitch$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M16 39h12v3H16v-3Zm7-3.41V37h3v-1c0-2.76-2.22-5-4.98-5H11c-2.81 0-5 2.2-5 5.03L6.02 42H9v-6.41c0-.88.71-1.59 1.59-1.59h10.83c.88 0 1.59.71 1.59 1.59ZM8 22c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8-8-3.59-8-8Zm3.07 0c0 2.72 2.21 4.93 4.93 4.93s4.93-2.21 4.93-4.93c0-.54-.11-1.06-.27-1.55-.96-.38-1.86-.94-2.64-1.72-.05-.05-.09-.12-.15-.17-1.53 1.39-3.54 2.25-5.77 2.25-.29 0-.56-.03-.84-.06-.11.4-.18.81-.18 1.25ZM40.5 6h-27c-.83 0-1.5.67-1.5 1.5v5.34c.93-.41 1.94-.69 3-.8V9h24v17H25.16c-.5 1.12-1.19 2.14-2.04 3h17.39c.83 0 1.5-.67 1.5-1.5v-20c0-.83-.67-1.5-1.5-1.5Zm-11.73 8.75L24.01 12v4.07a9.873 9.873 0 0 1 1.97 5.79l2.79-1.61 4.76-2.75-4.76-2.75Z" }))));
  }
}, [1, "opengemeenten-icon-participatie-pitch"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-participatie-pitch", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-participatie-pitch":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconParticipatiePitch$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconParticipatiePitch = OpengemeentenIconParticipatiePitch$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconParticipatiePitch, defineCustomElement };
