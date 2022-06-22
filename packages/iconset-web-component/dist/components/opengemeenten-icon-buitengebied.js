import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconBuitengebied$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M25.04 17.62c.98-1.84.96-3.95-.1-5.48-.85-1.24-2.25-1.95-3.84-1.95-.4 0-.8.04-1.2.13-1.2-1.38-2.83-2.18-4.46-2.18-1.04 0-2.02.33-2.82.96a4.85 4.85 0 0 0-1.47 2.01c-2.92.3-5.16 2.85-5.16 5.99 0 1.76.74 3.42 1.99 4.56a4.97 4.97 0 0 0-.26 1.57c0 2.68 2.08 4.85 4.64 4.85.51 0 1.27-.02 1.69-.06l-.02 2.96-2.06-.92-.94 2.44 3.02 1.38-.06 8.12 3.98.02V27.86c.53.1.97.21 1.92.21 3.47 0 6.3-2.97 6.3-6.62 0-1.69-.58-2.98-1.17-3.84Zm-5.13 7.18c-1.04 0-1.73-.18-2.21-.27l2.03-1.68-1.49-1.94L16.98 22v-3.14h-2.36l-.12 5.67c-.54.19-1.22.27-2.13.27-.8 0-1.45-.71-1.45-1.57 0-.23.05-.45.16-.69l.89-1.94-1.67-1.23c-.7-.51-1.11-1.36-1.11-2.27 0-1.49 1.11-2.7 2.48-2.74h.08l1.78.02.51-1.81c.11-.38.28-.67.53-.86.24-.19.54-.29.88-.29.8 0 1.67.52 2.29 1.35l1.01 1.37 1.56-.52c.27-.09.54-.14.8-.14.32 0 .9.07 1.23.56.37.54.29 1.44-.22 2.23l-1.01 1.58 1.16 1.46c.34.43.75 1.15.75 2.17 0 1.84-1.39 3.34-3.1 3.34Zm7.81-9.34.28.37 1.04-.94v4.06c5.92 0 9.97 1.37 9.97 1.37v-5.36l1.03.9 1.82-2.38-2.85-2.44V6.98h-2.99v1.68l-2.09-1.83-6.59 5.62c.35.95.47 1.97.38 3.01ZM32 13h4v3h-4v-3Zm9.97 10.86v3.31c-4.14-2.07-9.29-3.31-14.15-3.1.25-.82.39-1.7.39-2.61 0-.12-.02-.24-.02-.36 4.74-.11 9.41.82 13.78 2.77Zm-.06 18.11h-3.13c-2.09-6.74-7.74-11.87-14.67-13.09a8.573 8.573 0 0 0 2.6-2.49c7.38 2.08 13.2 8.04 15.2 15.58Z" }))));
  }
}, [1, "opengemeenten-icon-buitengebied"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-buitengebied", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-buitengebied":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconBuitengebied$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconBuitengebied = OpengemeentenIconBuitengebied$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconBuitengebied, defineCustomElement };
