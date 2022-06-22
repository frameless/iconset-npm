import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconVirus$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Virus"), h("path", { fill: "currentColor", d: "M23 25.478h2v-6h-2v6zm1.009 3.5c-.295 0-.536-.093-.721-.28a.978.978 0 0 1-.28-.72c0-.292.094-.532.28-.719.185-.187.426-.28.72-.28.297 0 .538.093.724.28a.98.98 0 0 1 .277.72.98.98 0 0 1-.277.72c-.186.186-.427.28-.723.28zm12.366-6.483h-4.447a8.03 8.03 0 0 0-1.291-3.048l2.557-2.557c.233.058.474.1.727.1a3 3 0 1 0-3-3c0 .281.051.548.123.806L28.5 17.341a8.048 8.048 0 0 0-3.01-1.23v-2.364a4.017 4.017 0 0 0 2.521-3.725 4.022 4.022 0 1 0-8.043 0 4.016 4.016 0 0 0 2.522 3.725v2.362a8.016 8.016 0 0 0-3.049 1.268l-3.505-3.506a2.991 2.991 0 0 0-1.571-3.515 2.997 2.997 0 1 0-2.613 5.396 2.961 2.961 0 0 0 2.021.2l3.547 3.546a8.07 8.07 0 0 0-1.25 2.997h-2.383A3.981 3.981 0 0 0 6 23.957a3.987 3.987 0 0 0 7.664 1.538h2.379a8.047 8.047 0 0 0 1.246 3.057l-3.298 3.3c-.076-.03-.145-.07-.223-.096a3.21 3.21 0 1 0 2.11 4.018 3.18 3.18 0 0 0 .06-1.628l3.455-3.455a8.06 8.06 0 0 0 3.097 1.294v4.945c-.406.265-.752.63-.978 1.097a2.75 2.75 0 1 0 4.952 2.397 2.742 2.742 0 0 0-.974-3.488v-4.944a8.029 8.029 0 0 0 3.057-1.267l1.745 1.744c-.782 1.92.036 4.14 1.927 5.055a3.964 3.964 0 1 0 3.454-7.135 3.938 3.938 0 0 0-3.281-.06l-1.722-1.722a8.052 8.052 0 0 0 1.275-3.112h4.471a2.988 2.988 0 0 0 2.563 1.462 3 3 0 1 0 0-6c-1.123 0-2.09.625-2.604 1.538z", "fill-rule": "evenodd" }))));
  }
}, [1, "utrecht-icon-virus", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-virus", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-virus":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconVirus$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconVirus = UtrechtIconVirus$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconVirus, defineCustomElement };