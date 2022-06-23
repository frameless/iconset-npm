import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconPrijskaartje$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M17.11 29.75h1.59a6.673 6.673 0 0 1 0-1.48h-1.59v-1.8h1.94c.99-2.89 3.68-4.48 6.44-4.48 1.45 0 2.6.31 3.53.95l-.95 1.92c-.68-.5-1.57-.72-2.58-.72-1.59 0-3.1.74-3.86 2.33h5.68l-.87 1.8h-5.29c-.02.17-.04.39-.04.72 0 .37.02.62.04.76h4.67l-.85 1.82h-3.32c.76 1.51 2.21 2.23 3.82 2.23 1.16 0 2.17-.33 2.87-.99l1.16 1.78c-.97.83-2.37 1.4-4.03 1.4-2.79 0-5.41-1.57-6.4-4.42h-1.96v-1.82ZM38.78 7.49c-.21-.43-.67-1-1.7-1.26-2.11-.55-5.82.46-9.06 2.38l-2.01-1.82a2.993 2.993 0 0 0-4.03 0l-9.49 8.58c-.31.28-.49.69-.49 1.11v25.5h24v-25.5c0-.42-.18-.83-.49-1.11l-.44-.4c-.95.45-1.99.86-3.11 1.23l1.05.95v21.83H15V17.15l9-8.14 2.67 2.41c1.31-.28 2.45-.6 3.44-.93l-.52-.47c2.83-1.56 5.67-2.2 6.99-1.86.27.07.38.16.4.21.05.1-.03.29-.08.39-.68 1.3-4.37 3.71-11.4 4.92a1.991 1.991 0 0 0-3.5 1.31c0 1.11.89 2 2 2a2 2 0 0 0 1.88-1.34c6.41-1.12 11.47-3.46 12.79-5.96.51-.97.34-1.73.11-2.2Z" }))));
  }
}, [1, "opengemeenten-icon-prijskaartje"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-prijskaartje", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-prijskaartje":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconPrijskaartje$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconPrijskaartje = OpengemeentenIconPrijskaartje$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconPrijskaartje, defineCustomElement };