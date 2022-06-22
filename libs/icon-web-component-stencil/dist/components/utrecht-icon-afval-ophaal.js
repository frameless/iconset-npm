import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';

const UtrechtIconAfvalOphaal$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("utrecht-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M20.26 16a1.5 1.5 0 1 1 0 3H17c-2.31 3.86-7 11.62-7 11.62l-3-1.85L14.26 16h6m-2 23.89a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-6a1.5 1.5 0 1 0 1.5 1.5 1.51 1.51 0 0 0-1.5-1.5zm17.25 6a4.5 4.5 0 1 1 4.5-4.5 4.5 4.5 0 0 1-4.5 4.5zm0-6a1.5 1.5 0 1 0 1.5 1.5 1.51 1.51 0 0 0-1.5-1.5zM43 32.48v-7.56l-2.63-7.39h-7.84V25l-.1 1.51H31V16h-8.1a3 3 0 0 1 .38 1.44 3 3 0 0 1-3 3h-2.39L10 33.6v1.9h2.28v-.11a6 6 0 0 1 11.22-2.91h6.77A6 6 0 0 1 41.34 34H43v-1.52zm-7.5-8.25v-4.58h3l1.5 4.58h-4.5zM29.69 34h-5.6a5.89 5.89 0 0 1-.09 3h5.69a6.42 6.42 0 0 1-.22-1.59 6 6 0 0 1 .22-1.41z" }))));
  }
}, [1, "utrecht-icon-afval-ophaal"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-afval-ophaal", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-afval-ophaal":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconAfvalOphaal$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconAfvalOphaal = UtrechtIconAfvalOphaal$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconAfvalOphaal, defineCustomElement };
