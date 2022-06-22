import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconRecreatie$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M41.96 34.96h-4.53l-.45-2h1.99v-3h-14v3h1.89l-.51 2h-4.37v3h3.63l-1.05 4h3.1l1.05-4h6.36l.91 4h3.07l-.91-4h3.83v-3Zm-12.55 0 .52-2h3.95l.45 2h-4.92Zm-6.72-6.88c3.85 0 6.96-3.14 6.96-7.01 0-1.74-.63-3.32-1.67-4.54 1.33-1.96 1.49-4.38.22-6.13-.92-1.26-2.4-1.9-4-1.9-.63 0-1.29.1-1.93.3-1.4-1.78-3.39-2.76-5.27-2.76-1.04 0-2.05.3-2.91.93-.87.65-1.45 1.56-1.76 2.59h-.05c-3.45 0-6.25 2.82-6.25 6.29 0 2.16 1.08 4.06 2.72 5.19-.32.65-.51 1.38-.51 2.15 0 2.7 2.18 4.89 4.86 4.89 1.06 0 1.89-.08 2.55-.23l-.21 3.04-2.32-.92-1.16 2.77 3.22 1.35-.23 7.85h4.92l-.26-14.06c.84.13 1.85.2 3.09.2Zm-11.45-4.89c0-.27.07-.54.21-.83l1.14-2.33-2.13-1.47a3.289 3.289 0 0 1-1.42-2.71c0-1.78 1.41-3.24 3.15-3.28h.11l2.26.02.65-2.17c.14-.46.36-.8.67-1.03.31-.23.69-.34 1.12-.34 1.01 0 2.13.62 2.91 1.61l1.29 1.64 1.99-.63c.35-.11.69-.16 1.02-.16.4 0 1.15.09 1.57.67.47.65.36 1.72-.28 2.67l-1.28 1.89 1.48 1.74c.43.51.95 1.38.95 2.6 0 2.21-1.77 4-3.95 4-1.32 0-2.23-.09-2.85-.19l2.62-2.14-1.9-2.32-1.6 1.31v-3.76h-3v6.79c-.69.23-1.7.32-2.87.32-1.02 0-1.85-.84-1.85-1.88Z" }))));
  }
}, [1, "opengemeenten-icon-recreatie"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-recreatie", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-recreatie":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconRecreatie$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconRecreatie = OpengemeentenIconRecreatie$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconRecreatie, defineCustomElement };