import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconContactGemeente$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M42 13.02v9.97c0 1.11-.9 2.01-2.01 2.01h-8.97s-.03.01-.03.03v3.84s-.03.04-.05.02l-3.88-3.88h-1.12c-1.08 0-1.95-.87-1.95-1.95v-1.01h3.05l1.95 1.96v-1.93s.01-.03.03-.03l9.97-.03v-7.94l-10-.03v-3.01s.01-.03.03-.03h10.95c1.12 0 2.02.9 2.02 2.02ZM15.01 32H8.97c-1.67 0-2.98 1.27-2.98 2.83v7.14s.01.03.03.03h11.94s.03-.01.03-.03v-7.42C17.84 33.12 16.57 32 15 32Zm9.95-12h-2.94l-3.98 3.97s-.05 0-.05-.02v-3.92s-.01-.03-.03-.03H7.99C6.89 20 6 19.11 6 18.01V7.97C6 6.88 6.88 6 7.97 6h17.06C26.12 6 27 6.88 27 7.97v10c0 1.12-.91 2.03-2.03 2.03Zm-.97-10.97S23.98 9 23.96 9H9.03S9 9.01 9 9.03v7.94s.01.03.03.03h10.94s.03.01.03.03v1.93L21.95 17h2.02s.03-.01.03-.03V9.03ZM39.03 37h-6.08C31.3 37 30 38.25 30 39.8v2.17s.01.03.03.03h11.94s.03-.01.03-.03v-2.45c-.15-1.41-1.41-2.52-2.96-2.52ZM13.99 22.27h-.02c-.46-.17-.95-.27-1.47-.27-.47 0-.92.09-1.35.23-.03 0-.05.02-.08.02C9.29 22.85 8 24.51 8 26.5c0 2.49 2.01 4.5 4.5 4.5s4.5-2.01 4.5-4.5c0-1.96-1.26-3.61-3.01-4.23ZM12.5 29a2.5 2.5 0 0 1-2.5-2.5c0-.21.03-.41.08-.6.3.07.61.11.93.11 1.25 0 2.37-.52 3.18-1.34.49.46.81 1.1.81 1.83a2.5 2.5 0 0 1-2.5 2.5Zm25.49-1.73h-.02c-.46-.17-.95-.27-1.47-.27-.47 0-.92.09-1.35.23-.03 0-.05.02-.08.02-1.78.6-3.07 2.26-3.07 4.25 0 2.49 2.01 4.5 4.5 4.5s4.5-2.01 4.5-4.5c0-1.96-1.26-3.61-3.01-4.23ZM36.5 34a2.5 2.5 0 0 1-2.5-2.5c0-.21.03-.41.08-.6.3.07.61.11.93.11 1.25 0 2.37-.52 3.18-1.34.49.46.81 1.1.81 1.83a2.5 2.5 0 0 1-2.5 2.5Z" }))));
  }
}, [1, "opengemeenten-icon-contact-gemeente"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-contact-gemeente", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-contact-gemeente":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconContactGemeente$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconContactGemeente = OpengemeentenIconContactGemeente$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconContactGemeente, defineCustomElement };
