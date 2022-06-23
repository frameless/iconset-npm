import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconAfvalGft$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M33.09 9.02h-21c0-1.65 1.35-3 3-3h15c1.65 0 3 1.35 3 3Zm-21 5 1.19 18.24c.57-.18 1.17-.27 1.8-.27.42 0 .83.04 1.23.13l-1.22-18.09h15l-.34 2.86c1.14-.26 2.15-.38 3.06-.47l.29-2.39h2v-3H8.59c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c0 0 3.5-.04 3.5 0ZM19.08 38c0 2.21-1.8 4-4.01 4s-4-1.8-4-4 1.8-4.01 4-4.01 4.01 1.8 4.01 4.01Zm-3 0c0-.55-.45-1.01-1.01-1.01s-1 .45-1 1.01.45 1 1 1 1.01-.45 1.01-1Zm14.1-1.76c-.92 0-1.83-.11-2.71-.33l-.37 3.11h-6.09a6.09 6.09 0 0 1-1.46 3h7.56a2.97 2.97 0 0 0 2.94-2.54l.39-3.24c-.08 0-.16.01-.24.01Zm10.76-20.29v2.44c0 3.43-1.05 10.76-5.01 13.92-1.48 1.18-3.53 1.93-5.71 1.93-1.36 0-2.76-.3-4.11-.95-.37.52-.74 1.09-1.1 1.68h-3.39c.03-.1.07-.19.12-.29.67-1.24 1.37-2.32 2.08-3.3-1.51-2.93-1.28-5.32-.78-6.82.68-2.04 2.2-3.68 4.28-4.61 2.43-1.08 4.3-1.26 5.95-1.42 1.76-.17 3.28-.32 5.5-1.46l2.17-1.12Zm-10.38 6 .11 2.68.91-.7c1.11-.85 2.2-1.67 3.23-2.59-.42.05-.84.1-1.25.14-.98.1-1.93.19-3 .47Zm-2.77 5.04-.16-3.82c-.85.59-1.46 1.39-1.77 2.32-.34 1.01-.31 2.14.07 3.31.61-.66 1.23-1.26 1.85-1.82Zm6.99 2.3-5.01-.09c-.58.52-1.14 1.07-1.7 1.67 2.21.79 4.54.29 6.01-.89.25-.2.48-.44.71-.69Zm2.69-6.36c-1.35 1.27-2.73 2.33-4.1 3.36l3.1.05c.43-1.09.76-2.25 1-3.42Z" }))));
  }
}, [1, "opengemeenten-icon-afval-gft"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-afval-gft", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-afval-gft":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconAfvalGft$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconAfvalGft = OpengemeentenIconAfvalGft$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconAfvalGft, defineCustomElement };