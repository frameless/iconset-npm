import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconMobiliteit$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M39 22h3v-7.95l-2-5.99c-.44-1.23-1.64-2.05-3.01-2.06h-7.95c-1.36 0-2.56.83-3.01 2.07l-2.04 5.98V22h3v-3h12v3ZM28.72 8.93l8.53.02L38.5 13H27.42l1.31-4.07ZM29 17h-2v-2h2v2Zm10 0h-2v-2h2v2ZM26.08 28.22c0-.62.5-1.12 1.12-1.12h.93v2.23h-.93c-.62 0-1.12-.5-1.12-1.12Zm1.11 2.6c-.25 0-.5.02-.74.05l-2.3-6.39c-.16-.43-.44-.79-.82-1.05s-.81-.4-1.27-.4h-2.73v2.23h2.73l.92 2.56h-8.13l-.89-1.62c.58-.01 1.04-.48 1.04-1.06 0-.62-.5-1.12-1.12-1.12h-2.76c-.62 0-1.12.5-1.12 1.12v1.07h1.6l.9 1.64v2.2l-.28.84a5.565 5.565 0 0 0-6.23 5.53 5.57 5.57 0 0 0 11.03 1.09h1.93c.44 0 .84-.26 1.02-.66l3.06-6.8h.73l.55 1.56a5.587 5.587 0 0 0 2.87 10.38c3.09 0 5.59-2.5 5.59-5.59s-2.5-5.59-5.59-5.59Zm-15.62 8.95c-1.84 0-3.34-1.5-3.34-3.34s1.46-3.29 3.27-3.33l-.99 2.99c-.19.58.12 1.22.71 1.41.12.04.23.06.35.06.47 0 .9-.3 1.06-.77l.99-2.98c.78.61 1.29 1.55 1.29 2.62 0 1.84-1.5 3.34-3.34 3.34Zm6.67-4.48h-1.22a5.567 5.567 0 0 0-2.68-3.68l.51-1.54h5.74l-2.35 5.23Zm8.95 4.48c-1.85 0-3.36-1.51-3.36-3.36 0-1.05.5-1.98 1.26-2.6l1.05 2.97c.16.46.59.74 1.05.74a1.107 1.107 0 0 0 1.05-1.48l-1.05-2.98c1.85 0 3.36 1.51 3.36 3.36s-1.51 3.36-3.36 3.36Z" }))));
  }
}, [1, "opengemeenten-icon-mobiliteit"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-mobiliteit", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-mobiliteit":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconMobiliteit$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconMobiliteit = OpengemeentenIconMobiliteit$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconMobiliteit, defineCustomElement };