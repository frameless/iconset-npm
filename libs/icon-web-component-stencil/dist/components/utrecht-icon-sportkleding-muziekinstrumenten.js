import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconSportkledingMuziekinstrumenten$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? (h("title", { id: id }, this.iconTitle)) : (h("title", { id: id }, "Sportkleding Muziekinstrumenten")), h("path", { fill: "currentColor", d: "M34.22 24.66a1.84 1.84 0 0 1-.46-1.9 5.13 5.13 0 0 0 .19-2.4c-.29-1.88-1.88-3-4-3.43V8H30a1.07 1.07 0 0 0 1-1.12V3.05a1.07 1.07 0 0 0-1-1.12h-3a1.07 1.07 0 0 0-1 1.12v3.86A1.08 1.08 0 0 0 26.94 8v9c-2.4.53-4 2-4 4.31a5 5 0 0 0 .3 1.69 1.45 1.45 0 0 1-.34 1.66A7.93 7.93 0 0 0 21.1 31c.42 2.3 2 5 7.44 5 6.17 0 7.46-3.58 7.46-6.58a7.29 7.29 0 0 0-1.78-4.76zM30 32h-3v-1.5h3V32zm-1.5-7.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM7.732-.012L8 0h7.93a4.57 4.57 0 0 1 2.57.6c.55.21 3.78 1.56 4.4 4.64L24 12l-4.5.57V26h-15V12.55L0 12l1.03-6.79.066-.284C1.849 2.046 4.897.773 5.43.57A4.57 4.57 0 0 1 8 0zM8.05 1.55a3.22 3.22 0 0 0-2 .45S3 3 2.55 5.5l-.83 5.21 2.78.35V8H6v16.5h12V8h1.48v3.06l2.74-.3-.83-5.21C20.89 3 17.89 2 17.89 2a3.27 3.27 0 0 0-2-.45l-3.92 6zm8.45 7.96v1.74a1.47 1.47 0 0 1-1.5 1.5 1.47 1.47 0 0 1-1.5-1.5V9.51h3zM14.13 1.5H9.84l2.07 3.17.08.1.07-.1 2.07-3.17z" }))));
  }
}, [1, "utrecht-icon-sportkleding-muziekinstrumenten", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-sportkleding-muziekinstrumenten", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-sportkleding-muziekinstrumenten":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconSportkledingMuziekinstrumenten$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconSportkledingMuziekinstrumenten = UtrechtIconSportkledingMuziekinstrumenten$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconSportkledingMuziekinstrumenten, defineCustomElement };
