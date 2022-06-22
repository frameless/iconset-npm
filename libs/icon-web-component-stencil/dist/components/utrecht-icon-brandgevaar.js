import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconBrandgevaar$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Brandgevaar"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M30.352 15c.525 1.298.564 4.962-1.013 6-.526-2.855-2.094-9.664-7.09-12 .224 3.547.76 7.956-5.062 14 0-3-2.025-5-2.025-5 0 7-7.352 15.917 5.063 19-3.154-5.71-.112-6.925 1.202-11.856.789 1.038 1.355 2.877 1.092 3.916 1.84-2.336 1.8-6.951 1.8-9.028 3.942 2.596 7.425 10.48 4.008 16.968 12.15-5 7.545-16.55 2.025-22zM17 42.003h14v-3H17v3z" }))));
  }
}, [1, "utrecht-icon-brandgevaar", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-brandgevaar", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-brandgevaar":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconBrandgevaar$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconBrandgevaar = UtrechtIconBrandgevaar$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconBrandgevaar, defineCustomElement };
