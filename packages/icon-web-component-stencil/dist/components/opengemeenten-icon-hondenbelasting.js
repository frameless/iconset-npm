import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconHondenbelasting$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { "fill-rule": "evenodd", d: "m40.941 15.78-1.797 3.417c-1.22 2.59-3.91 4.302-6.828 4.302h-.897l-.965 3.088A8.45 8.45 0 0 0 29.3 26.5c-.704 0-1.384.095-2.04.258l1.954-6.258h3.103c1.734 0 3.4-1.06 4.145-2.64l.889-1.692a2.726 2.726 0 0 1-1.196-1.01 2.72 2.72 0 0 1-.304-.658h-5.166l-1.283-4.494c-.255-.537-.97-.995-1.57-.995h-.003L20.744 9l-6.428 12.821 4.13 2.036c.455.22.981.19 1.425-.092.407-.255.655-.66.697-1.13l-1.463-6.972 2.171-4.343 2.316 11.036-.002.16a4.474 4.474 0 0 1-2.107 3.79 4.47 4.47 0 0 1-4.33.25l-6.852-3.38 7.76-15.518A2.984 2.984 0 0 1 20.745 6l7.081.01h.011c1.84 0 3.68 1.23 4.37 2.924l.051.153.69 2.412h5.368c1.538 0 2.271.793 2.57 1.265.531.837.551 1.964.055 3.015zM9.684 24.525l12.4 6.002a8.427 8.427 0 0 0-1.116 2.793L10.95 28.47l-2.316 4.246L6 31.28l3.684-6.754zM26.817 14a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3.145 25c-1.89 0-3.326-1.15-3.78-2.924h-.822v-.772h.68s-.023-.154-.023-.297c0-.122.023-.32.023-.32h-.68v-.77h.823c.476-1.775 1.956-2.917 3.78-2.917a6.08 6.08 0 0 1 1.093.105l-.343 1.275s-.376-.044-.784-.044c-1.05 0-1.867.577-2.22 1.58h2.752l-.177.771h-2.775s-.021.132-.021.298c0 .121.032.32.032.32h2.63l-.165.771h-2.21c.343 1.08 1.193 1.58 2.21 1.58.575 0 1.06-.15 1.06-.15l.254 1.312s-.573.182-1.337.182zM29.3 28a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" }))));
  }
}, [1, "opengemeenten-icon-hondenbelasting"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-hondenbelasting", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-hondenbelasting":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconHondenbelasting$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconHondenbelasting = OpengemeentenIconHondenbelasting$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconHondenbelasting, defineCustomElement };
