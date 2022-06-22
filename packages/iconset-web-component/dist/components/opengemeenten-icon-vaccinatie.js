import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconVaccinatie$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "m39.92 15.81 2.13-2.13-7.79-7.79-2.13 2.13 2.11 2.11-3.5 3.5-.79-.79-.04-.04a2.84 2.84 0 0 0-1.99-.8c-.77 0-1.49.3-2.03.85-11.4 11.4-13.67 13.71-14.16 14.24-1.32 1.32-.88 3.46 1.15 5.85l-6.45 6.45c-.59.59-.59 1.54 0 2.13s1.54.59 2.13 0l6.47-6.47c1.36 1.11 2.85 1.92 4.13 1.92.66 0 1.26-.21 1.75-.71l14.17-14.19s.03-.02.04-.04a2.876 2.876 0 0 0-.02-4.07l-.8-.8 3.49-3.49 2.13 2.13Zm-20.95 18.3c-.51-.12-1.77-.81-3.16-2.22-1.26-1.29-1.75-2.29-1.83-2.68.05-.05.12-.13.2-.21h9.89l-5.11 5.11ZM27.09 26h-9.92c.85-.86 1.82-1.83 2.86-2.87l2.22 2.22 2.13-2.13L22.16 21c.61-.61 1.22-1.22 1.83-1.84l2.5 2.5 2.13-2.13-2.5-2.5 1.79-1.79 4.97 4.96-5.8 5.8Z" }))));
  }
}, [1, "opengemeenten-icon-vaccinatie"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-vaccinatie", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-vaccinatie":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconVaccinatie$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconVaccinatie = OpengemeentenIconVaccinatie$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconVaccinatie, defineCustomElement };
