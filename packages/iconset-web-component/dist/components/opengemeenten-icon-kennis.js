import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconKennis$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M9 14v25h10.8c.77 1.17 1.75 2.19 2.9 3H9.03a3 3 0 0 1-2.99-3L6 9.01C6 7.35 7.33 6 8.96 6h17.32c1.73 0 3.15 1.31 3.39 3H9.97c-.56 0-1.01.46-1.01 1.02s.45 1.02 1.01 1.02H10v.02L29.99 11c1.67 0 3.02 1.34 3.02 3.01v-.02H9Zm31.99 10.26v17.73H28.98c-4.97-.02-9-4.06-9-9.03v-8.02c0-.17-.01-.34-.01-.52 0-1.66.49-3.21 1.32-4.52-1.23-.63-2.29-1.86-2.29-3.91h3c0 1.17.82 1.44 1.5 1.46h.13c1.38-.96 3-1.47 4.81-1.47h3.95c1.81 0 3.55.51 4.94 1.47h.07c.66-.02 1.59-.29 1.59-1.46h3c0 2.01-1.13 3.23-2.34 3.88a8.378 8.378 0 0 1 1.32 4.23v.16Zm-12.68-5.27c.85.59 1.55 1.29 2.14 2.14.59-.86 1.38-1.56 2.24-2.15h-4.37ZM30.3 39a7.013 7.013 0 0 1-1.32-4.1v-1.92c-2.09-.01-4.51-1.1-5.99-2.08v.57c.06 3.27 2.73 7.52 6.02 7.52h1.29Zm7.69-8.11c-.99 1.11-2.92 2.1-5.03 2.1l-.97.02-.02 1.9c0 2.25 1.83 4.07 4.08 4.07v.03h1.94V30.9Zm0-6.62a5.46 5.46 0 0 0-1.61-3.71c-2.52.48-4.39 2.79-4.39 5.44H29c0-2.63-1.96-4.92-4.43-5.43-.89.9-1.48 2.1-1.58 3.43v1.03c.26 2.79 2.64 4.98 5.52 4.98h3.95c3 0 5.45-2.38 5.53-5.33v-.4Zm-3.03-1.31c-.81 0-1.47.66-1.47 1.47s.66 1.47 1.47 1.47 1.47-.66 1.47-1.47-.66-1.47-1.47-1.47Zm-9.03 0c-.81 0-1.47.66-1.47 1.47s.66 1.47 1.47 1.47 1.47-.66 1.47-1.47-.66-1.47-1.47-1.47Z" }))));
  }
}, [1, "opengemeenten-icon-kennis"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-kennis", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-kennis":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconKennis$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconKennis = OpengemeentenIconKennis$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconKennis, defineCustomElement };
