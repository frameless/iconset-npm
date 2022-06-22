import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconAfval$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { "fill-rule": "evenodd", d: "M17.01 37.995c0-.554-.451-1.005-1.005-1.005-.554 0-1.005.451-1.005 1.005 0 .554.451 1.005 1.005 1.005.554 0 1.005-.451 1.005-1.005zm3 0A4.01 4.01 0 0 1 16.005 42 4.01 4.01 0 0 1 12 37.995a4.01 4.01 0 0 1 4.005-4.005 4.01 4.01 0 0 1 4.005 4.005zm9.386-1.275A1.51 1.51 0 0 1 27.912 38H21.51a5.472 5.472 0 0 1-.898 3h7.3a4.526 4.526 0 0 0 4.451-3.841L35.794 14h-3.032l-3.366 22.72zM36 9.5V9c0-1.654-1.345-3-3-3H16c-1.654 0-3 1.346-3 3v.5h-3v3h6V9h17v3.392l-.015.108H38v-3h-2zM13.091 17H10v-3h3.091a3.005 3.005 0 0 1 2.994 2.812l.987 15.784a5.438 5.438 0 0 0-1.067-.106c-.678 0-1.324.129-1.924.354L13.091 17z" }))));
  }
}, [1, "opengemeenten-icon-afval"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-afval", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-afval":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconAfval$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconAfval = OpengemeentenIconAfval$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconAfval, defineCustomElement };
