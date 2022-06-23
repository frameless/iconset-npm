import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconSportkledingMuziekinstrumenten$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M28.97 10.97c0-2.77-2.17-4.99-5.04-4.99H19l-1.49 1.65L16 5.99h-5.07c-2.8 0-4.92 2.27-4.92 4.98v6.01h3v14h17.01v-14h3l-.05-6.01Zm-2.95 3.01-2.97.03v13.97H12.01V13.99l-2.99.03v-3.04c-.01-.99 1-1.99 2-1.99h3.46l3 3 3-3h3.54c1 0 2.03.99 2.03 1.98l-.03 3.02Zm-8 0h3v1.5s0 1.5-1.5 1.5-1.5-1.5-1.5-1.5v-1.5Zm22.15 16.64c-.53-.6-.68-1.22-.46-1.9.25-.77.31-1.58.19-2.39-.29-1.85-1.82-3.23-3.9-3.68V9.04h-2.99v13.59c-2.47.51-4.09 2.25-4.09 4.62 0 .57.09 1.14.28 1.67.23.67.14 1.13-.34 1.66-1.47 1.63-2.19 4.18-1.8 6.34.41 2.3 2.04 5.04 7.44 5.04 6.17 0 7.46-3.58 7.46-6.58 0-1.75-.65-3.48-1.78-4.76Zm-4.16 7.35h-3.04v-2h3.04v2Zm-1.56-7c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z" }))));
  }
}, [1, "opengemeenten-icon-sportkleding-muziekinstrumenten"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-sportkleding-muziekinstrumenten", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-sportkleding-muziekinstrumenten":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconSportkledingMuziekinstrumenten$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconSportkledingMuziekinstrumenten = OpengemeentenIconSportkledingMuziekinstrumenten$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconSportkledingMuziekinstrumenten, defineCustomElement };
