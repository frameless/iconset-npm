import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconOmgevingsvergunning$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { "fill-rule": "evenodd", d: "M36.5 28.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm3.5.151C40 33.768 33.5 42 33.5 42S27 33.768 27 28.651C27 24.558 29.5 22 33.5 22s6.5 2.558 6.5 6.651zM16 35h-2.023L16 37.031V35zm13.5 4 2 3H17.898a2.883 2.883 0 0 1-2.025-.845l-6.06-6.085C9.289 34.546 9 33.826 9 33.045V9c0-1.654 1.346-3 3-3h20c1.654 0 3 1.346 3 3v11.5h-3V9H12v23h5.5a1.5 1.5 0 0 1 1.5 1.5V39h10.5zm-7.526-18.635 2.655-5.974 2.742 1.218-4 9a1.5 1.5 0 0 1-1.36.891H22a1.5 1.5 0 0 1-1.362-.872l-3-6.5 2.724-1.256 1.612 3.493z" }))));
  }
}, [1, "opengemeenten-icon-omgevingsvergunning"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-omgevingsvergunning", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-omgevingsvergunning":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconOmgevingsvergunning$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconOmgevingsvergunning = OpengemeentenIconOmgevingsvergunning$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconOmgevingsvergunning, defineCustomElement };
