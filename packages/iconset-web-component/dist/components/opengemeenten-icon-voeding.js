import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconVoeding$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M7.48 17.1a6.742 6.742 0 0 1-1.53-4.29c0-1.81.71-3.51 1.98-4.79s2.98-1.98 4.79-1.98c1.56 0 3.03.52 4.23 1.48a6.73 6.73 0 0 1 6.76 1.67c.18.18.35.37.51.58 1.68.08 3.27.76 4.46 1.95 1.12 1.12 1.78 2.6 1.92 4.17-.97.54-1.79 1.3-2.41 2.21l-.62-.39.07-.9c.09-1.12-.3-2.19-1.07-2.96s-1.87-1.17-3-1.07l-.94.08-.48-.81c-.19-.31-.36-.55-.56-.74-1.13-1.13-2.87-1.41-4.33-.69l-1.01.5-.76-.83-.15-.18a3.782 3.782 0 0 0-5.3.04 3.784 3.784 0 0 0 0 5.34c.03.01.1.07.16.13l.82.74-.46 1c-.66 1.43-.36 3.13.75 4.24.18.18.41.36.68.53l.8.5-.11.94c-.13 1.16.25 2.29 1.06 3.1.02.02.05.04.08.06-1.17.04-2.29.24-3.32.57-.53-.96-.83-2.04-.84-3.16-.17-.14-.32-.28-.47-.42a6.784 6.784 0 0 1-1.72-6.6Zm7.54 5.91h4.19a9.88 9.88 0 0 1 3.81-3.06l-.03-4.96-3 .02.02 2.97-3.96-3.96-2.12 2.12 3.88 3.88h-2.79v3Zm25.59 2.05c-1.3-2.36-3.82-3.91-6.56-3.99h-.14c-.6 0-1.14.1-1.64.23.26-.56.68-1.02 1.23-1.26l-1.19-2.76c-1.66.72-2.83 2.24-3.2 4.04-.01-.03-.03-.05-.04-.08-.54-.14-1.13-.25-1.78-.25-.17 0-.35 0-.52.02-.64.03-1.28.15-1.92.35a7.834 7.834 0 0 0-4.64 3.72c-.47.82-.78 1.72-.96 2.65 1.06.49 2 1.13 2.78 1.89.04-1.1.28-2.17.81-3.1a4.771 4.771 0 0 1 2.89-2.3c.4-.13.82-.21 1.25-.23.1-.01.21-.02.31-.02 1.41 0 2.71.92 3.43.92.76 0 1.93-.86 3.18-.86h.05c1.69.05 3.23 1 4.05 2.48 1.72 3.03.92 7.11-.76 9.57-.81 1.18-2.25 2.9-3.52 2.9h-.05c-1.24-.05-1.71-.81-3.21-.81-1.38 0-1.85.68-2.94.77-.11.02-.23.04-.36.04h-.07c-1.11 0-1.98-1.03-2.73-2.09a7.84 7.84 0 0 1-1.38 3.07c.97 1.05 2.31 2.01 4.11 2.01h.18c.24 0 .45-.04.62-.06.9-.1 1.57-.39 2.02-.58.37-.16.4-.17.53-.17.17 0 .22.01.61.18.54.23 1.34.58 2.48.62h.17c2.07 0 4.08-1.42 5.99-4.21 2.14-3.13 3.33-8.45.89-12.74ZM22.54 35.37c0 3.74-3.63 6.68-8.27 6.68S6 39.12 6 35.37s3.63-6.68 8.27-6.68 8.27 2.93 8.27 6.68Zm-3 0c0-2.03-2.36-3.68-5.27-3.68S9 33.34 9 35.37s2.36 3.68 5.27 3.68 5.27-1.65 5.27-3.68Z" }))));
  }
}, [1, "opengemeenten-icon-voeding"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-voeding", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-voeding":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconVoeding$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconVoeding = OpengemeentenIconVoeding$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconVoeding, defineCustomElement };
