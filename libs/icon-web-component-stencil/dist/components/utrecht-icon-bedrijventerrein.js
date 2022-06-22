import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';

const UtrechtIconBedrijventerrein$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("utrecht-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M42 42H6V19.4h6V7.5h13.5v13.4H27v-9h10.5v7.5H42V42zm-24-6c-.8 0-1.5.7-1.5 1.5S17.1 39 18 39c.8 0 1.5-.7 1.5-1.5S18.8 36 18 36zm12.5 0c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zm5.5-4.5c0-.8-.7-1.5-1.5-1.5L33 25.5H12v12h1.9c0-2.2 1.8-4 4.1-4s4 1.8 4.1 4h4.4c0-2.2 1.8-4 4.1-4s4 1.8 4.1 4H36v-6zm-4.5-18h-2.9V15h2.9v-1.5zm-13.4-3.1h-3v3h3v-3zm4.5 0h-3v3h3v-3zM18.1 15h-3v3h3v-3zm4.5 0h-3v3h3v-3zM33 30l-1-3h-3.6v3H33z" }))));
  }
}, [1, "utrecht-icon-bedrijventerrein"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-bedrijventerrein", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-bedrijventerrein":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconBedrijventerrein$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconBedrijventerrein = UtrechtIconBedrijventerrein$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconBedrijventerrein, defineCustomElement };
