import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';

const UtrechtIconTemperatuurMelding$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("utrecht-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M33.51 6a7.5 7.5 0 1 0-.02 15 7.5 7.5 0 0 0 .02-15zm.72 11.72a1 1 0 0 1-.72.28.94.94 0 0 1-.72-.28 1.07 1.07 0 0 1 0-1.44.94.94 0 0 1 .72-.28 1 1 0 0 1 .72 1.72zm.28-2.72h-2V9h2v6zM15 5.986c2.106 0 3.95 1.704 3.95 3.806v21.597c1.954 1.606 2.552 4.265 1.697 6.645A6 6 0 0 1 15 42a6 6 0 0 1-5.647-3.966c-.855-2.38-.317-5.039 1.638-6.645V9.792c0-2.102 1.903-3.806 4.009-3.806zm-.022 13.01c-.592-.005-.982.532-.999.99l.005 12.967c-1.455.398-2.154 1.841-1.958 3.372C12.222 37.855 13.494 39 15 39c1.506 0 2.778-1.144 2.974-2.675.196-1.53-.473-2.974-1.927-3.372l-.042-12.959c-.003-.456-.435-.991-1.027-.997z" }))));
  }
}, [1, "utrecht-icon-temperatuur-melding"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-temperatuur-melding", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-temperatuur-melding":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconTemperatuurMelding$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconTemperatuurMelding = UtrechtIconTemperatuurMelding$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconTemperatuurMelding, defineCustomElement };
