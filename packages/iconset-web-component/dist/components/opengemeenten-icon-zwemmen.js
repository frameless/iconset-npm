import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconZwemmen$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M24.02 24.34c.55 0 1.1.06 1.65.18 1.32.29 2.34 1.03 3.57 1.48.58.21 1.15.31 1.72.31.94 0 1.86-.27 2.74-.74 1.4-.75 2.94-1.18 4.47-1.18 1.32 0 2.63.32 3.84 1.01v3.27c-.69-.3-1.35-.65-2.07-.94-.64-.25-1.27-.37-1.91-.37-.92 0-1.82.25-2.69.72-1.44.77-2.95 1.2-4.47 1.2-1.27 0-2.55-.3-3.79-.96-.99-.53-1.99-.98-3.11-.98-.16 0-.33 0-.5.03-1.25.15-2.17.84-3.29 1.3-1.03.43-2.11.65-3.2.65-.6 0-1.21-.07-1.81-.21-1.16-.28-2.09-.9-3.17-1.35a4.6 4.6 0 0 0-1.8-.37c-1.5 0-2.77.77-4.21 1.33v-3.31c.59-.3 1.18-.57 1.82-.76.72-.2 1.45-.3 2.18-.3 1.08 0 2.16.22 3.18.65 1.2.5 2.19 1.24 3.55 1.33h.25c1.29 0 2.29-.61 3.43-1.15a8.46 8.46 0 0 1 3.62-.84m0 5.67c.55 0 1.1.06 1.65.18 1.32.29 2.34 1.03 3.57 1.48.58.21 1.15.31 1.72.31.94 0 1.86-.27 2.74-.74 1.4-.75 2.94-1.18 4.47-1.18 1.32 0 2.63.32 3.84 1.01v3.27c-.69-.3-1.35-.65-2.07-.94-.64-.25-1.27-.37-1.91-.37-.92 0-1.82.25-2.69.72-1.44.77-2.95 1.2-4.47 1.2-1.27 0-2.55-.3-3.79-.96-.99-.53-1.99-.98-3.11-.98-.16 0-.33 0-.5.03-1.25.15-2.17.84-3.29 1.3-1.03.43-2.11.65-3.2.65-.6 0-1.21-.07-1.81-.21-1.16-.28-2.09-.9-3.17-1.35a4.6 4.6 0 0 0-1.8-.37c-1.5 0-2.77.77-4.21 1.33v-3.31c.59-.3 1.18-.57 1.82-.76.72-.2 1.45-.3 2.18-.3 1.08 0 2.16.22 3.18.65 1.2.5 2.19 1.24 3.55 1.33h.25c1.29 0 2.29-.61 3.43-1.15a8.46 8.46 0 0 1 3.62-.84m15.56-11.87v-.02c-.09-.48-.24-.96-.49-1.41-.23-.41-.53-.76-.86-1.06-.02-.02-.04-.04-.06-.05-1.4-1.26-3.48-1.57-5.21-.59a4.495 4.495 0 0 0-1.71 6.13 4.495 4.495 0 0 0 6.13 1.71c1.71-.96 2.53-2.87 2.21-4.7Zm-3.19 2.96c-1.2.68-2.73.25-3.41-.95-.68-1.2-.25-2.73.95-3.41.18-.1.37-.17.56-.22.09.29.2.58.36.86a4.41 4.41 0 0 0 2.73 2.11c-.16.65-.57 1.25-1.2 1.6Zm-4.71 2.95c-.23.05-.5.12-.71.12-.35 0-.69-.06-1.04-.19-.39-.14-.79-.34-1.21-.55-.74-.37-1.59-.78-2.61-1.01-.68-.15-1.38-.22-2.08-.22-1.51 0-3.06.36-4.48 1.03-.18.08-.35.17-.53.26-.87.43-1.44.7-2.04.7h-.13c-.55-.03-1.09-.3-1.76-.64-.26-.13-.54-.27-.83-.4l6.14-3.37 1.93-1.1-3.65-2.08-5.72 3.1-1.72-3.18 5.68-3.06c1.13-.61 2.5-.59 3.61.04l6.61 3.8c.59.25 1.12.68 1.46 1.28l3.07 5.45Z" }))));
  }
}, [1, "opengemeenten-icon-zwemmen"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-zwemmen", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-zwemmen":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconZwemmen$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconZwemmen = OpengemeentenIconZwemmen$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconZwemmen, defineCustomElement };
