import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconMeldingOmgevallenBoom$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "m12.2 35.47.3 6.53H6l.5-9.5 1.5-2 1.5 1 1-2L12 31l.13 2.84 1.93-.91.64 1.36-2.49 1.17ZM28.56 40H31v2H21v-2h5.44l2.31-2.36 1.06 1.09-1.25 1.28Zm13.44.5V42h-7v-3h3.6c-.55-.96-1.8-2-4.6-2v-3c.53 0 1.01.04 1.48.1.09-.93-.2-1.92-.82-2.53a2.88 2.88 0 0 0-3.44-.5l-.7.39-.71-.37s-.78-.4-1.18-.58c-1.63-.69-2.69-.68-4.36.05l1.57 1.45h-.83v.02c-2.5.11-4.5 1.83-4.5 3.95v.03H21v.8l-.62.16c-.27.08-2.8.93-2.8 5.04h-2.93c0-4.34 2.22-6.62 3.98-7.54.07-.53.22-1.07.41-1.62l-8.3-7.12 2.44-1-.49-2 1.95-1.5 7.74 7.22c.4-.26.81-.5 1.25-.69 2.31-1 4.15-1 6.45 0 .19.08.46.22.71.34 2.09-.8 4.5-.3 6.11 1.35 1.36 1.39 1.92 3.51 1.56 5.48 2.7 1.38 3.53 3.98 3.53 5.58ZM40.5 6H29.49C28.67 6 28 6.67 28 7.49V18.5c0 .83.67 1.5 1.5 1.5h5.46L39 23.94V20h1.5c.83 0 1.5-.67 1.5-1.5v-11c0-.83-.67-1.5-1.5-1.5Zm-4.71 10.73c-.18.19-.43.28-.72.28s-.54-.09-.72-.28c-.19-.19-.28-.43-.28-.72s.09-.53.28-.72c.18-.19.43-.28.72-.28s.54.09.72.28c.18.19.28.43.28.72s-.09.53-.28.72ZM36 14h-2V9h2v5Z" }))));
  }
}, [1, "opengemeenten-icon-melding-omgevallen-boom"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-melding-omgevallen-boom", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-melding-omgevallen-boom":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconMeldingOmgevallenBoom$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconMeldingOmgevallenBoom = OpengemeentenIconMeldingOmgevallenBoom$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconMeldingOmgevallenBoom, defineCustomElement };
