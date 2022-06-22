import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconVergaderen$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Vergaderen"), h("circle", { fill: "currentColor", cx: "36.02", cy: "19.01", r: "3" }), h("circle", { fill: "currentColor", cx: "24", cy: "14.57", r: "3" }), h("path", { fill: "currentColor", d: "M29 25v-3a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v3h10z" }), h("circle", { fill: "currentColor", cx: "12.09", cy: "19.01", r: "3" }), h("path", { fill: "currentColor", d: "M38.06 23.48h-2c-1.656 0-3.56 1.343-3.56 3l5.44 7.58h3.08v-7.58a3 3 0 0 0-2.96-3zM17.5 25.985L14.31 31H12l3.5-5c0-1.66-1.34-2.55-3-2.55h-2.462a3 3 0 0 0-3 3V32a2 2 0 0 0 2 2H16.5l-.06 1.042h-5.28L9 38.968h30l-8.5-12.983h-13z" }))));
  }
}, [1, "utrecht-icon-vergaderen", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-vergaderen", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-vergaderen":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconVergaderen$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconVergaderen = UtrechtIconVergaderen$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconVergaderen, defineCustomElement };
