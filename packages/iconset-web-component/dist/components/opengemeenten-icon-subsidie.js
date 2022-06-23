import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconSubsidie$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M34.99 28c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7Zm.54 11.32c-1.69 0-3.28-.95-3.88-2.68h-1.19v-1.1h.96c-.01-.11-.03-.29-.03-.45 0-.2.01-.33.03-.45h-.96v-1.09h1.18c.6-1.75 2.23-2.72 3.91-2.72.88 0 1.58.19 2.14.58l-.58 1.17c-.41-.3-.95-.44-1.57-.44-.96 0-1.88.45-2.34 1.42h3.45l-.53 1.09h-3.21c-.01.1-.03.24-.03.44 0 .23.01.38.03.46h2.83l-.51 1.1h-2.02c.46.91 1.34 1.35 2.32 1.35.7 0 1.32-.2 1.74-.6l.7 1.08c-.59.5-1.44.85-2.44.85ZM23.98 22.03c4.41 0 8.01-3.59 8.01-8.01s-3.59-8.01-8.01-8.01-8.01 3.59-8.01 8.01 3.59 8.01 8.01 8.01Zm-4.75-9.26c.28.03.56.06.84.06 2.23 0 4.25-.86 5.78-2.25.05.06.09.12.15.17.78.78 1.68 1.34 2.64 1.72.16.49.27 1 .27 1.55 0 2.72-2.21 4.93-4.93 4.93s-4.93-2.21-4.93-4.93c0-.43.07-.85.18-1.25Zm14.89 4.21c0-1.61 1.31-2.92 2.92-2.92s2.92 1.31 2.92 2.92-1.31 2.92-2.92 2.92-2.92-1.31-2.92-2.92Zm-1.4 5.05c.47-.58 1.17-.98 1.94-.98h4.85c1.32 0 2.51 1.16 2.51 2.48l-.02 5.6a9.018 9.018 0 0 0-6.28-3.25 6.79 6.79 0 0 0-2.99-3.85ZM16.98 36.04l3-.03v6.01h-3v-3.01h-3v-11c0-2.71 2.08-4.83 4.74-4.98l10.31-.02c2.03.05 3.73 1.24 4.48 2.97-1.02.17-1.98.51-2.85 1-.39-.56-1.04-.97-1.68-.97h-10c-1 0-2.01.99-2.01 1.99v8.04ZM8.12 16.98c0-1.61 1.31-2.92 2.92-2.92s2.92 1.31 2.92 2.92-1.31 2.92-2.92 2.92-2.92-1.31-2.92-2.92Zm3.92 11.01-.04.98H6.06v-5.44c0-1.32 1.19-2.48 2.52-2.48h4.84c.77 0 1.47.39 1.94.98-2.01 1.22-3.32 3.41-3.32 5.97Z" }))));
  }
}, [1, "opengemeenten-icon-subsidie"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-subsidie", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-subsidie":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconSubsidie$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconSubsidie = OpengemeentenIconSubsidie$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconSubsidie, defineCustomElement };
