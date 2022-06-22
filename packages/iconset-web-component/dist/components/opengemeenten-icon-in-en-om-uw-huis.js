import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconInEnOmUwHuis$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "m12.13 27.75 3.84 4.47v6.73h-2.98v-4.31l-2.89-1.67 1-1.73 1.89 1.09v-2.92c-.37.05-.78.08-1.24.08-2.43 0-4.41-2.01-4.41-4.48 0-.28.03-.56.08-.84-.89-.98-1.4-2.27-1.4-3.63 0-2.59 1.83-4.75 4.24-5.23.3-.54.7-1.01 1.19-1.37.76-.57 1.67-.87 2.64-.87 1.32 0 2.65.56 3.68 1.53 1.69-.21 3.32.45 4.25 1.75.51.71.77 1.54.79 2.4l-3.51 2.91-.46-.55.58-.98c.46-.7.53-1.51.16-2.03-.33-.46-.88-.53-1.18-.53-.23 0-.46.04-.7.11l-1 .32-.64-.83c-.77-.99-2.07-1.39-2.81-.83-.24.18-.41.45-.52.8l-.32 1.08h-1.2c-1.22.02-2.2 1.06-2.2 2.33 0 .77.37 1.5.99 1.93l1.04.73-.55 1.15c-.11.22-.16.44-.16.66 0 .82.63 1.48 1.41 1.48.5 0 .9-.03 1.19-.1h.05v-3.37h2.98v1.4l-.33.27-3.52 3.06Zm28.85 4.21-.99 1.02V34h-2.02v-1.02l-.99-1.02-.99 1.02v6.01h1.99v-2H40v2h1.99v-6.01L41 31.96Zm-7-15.39s.02.01.03.02a1.75 1.75 0 0 0 3.3.42c.36.54.97.91 1.67.91a1.989 1.989 0 0 0 1.94-2.43c.64-.53 1.05-1.32 1.05-2.22 0-1.38-.97-2.53-2.26-2.82a2.523 2.523 0 0 0-2.27-1.42c-.78 0-1.47.36-1.93.92h-.03c-.24 0-.48.02-.71.07-2.14.34-3.79 2.19-3.79 4.43v4.56h3V16.6Zm2.93 11.44-1.94 2.39-.98-1.03V39H18v-9.58l-1.1.95L14.93 28l10.99-9.15 5.06 4.11v-1.91h3v4.35l2.93 2.61Zm-5.93-1.08-5.04-4.1-4.94 4.1V36h9.99v-9.07Zm-7.79 6.06h5.62v-4.02h-5.62v4.02Z" }))));
  }
}, [1, "opengemeenten-icon-in-en-om-uw-huis"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-in-en-om-uw-huis", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-in-en-om-uw-huis":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconInEnOmUwHuis$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconInEnOmUwHuis = OpengemeentenIconInEnOmUwHuis$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconInEnOmUwHuis, defineCustomElement };
