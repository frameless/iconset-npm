import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconOnderhoud$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Onderhoud"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M38.25 31.725a3.001 3.001 0 0 0-6 0 3 3 0 0 0 6 0zm1.884 1.652c-.121.453-.3.883-.53 1.28l.99 1.648-1.287 1.288-1.649-.99c-.397.23-.827.409-1.281.53L35.91 39h-1.82l-.467-1.866a5.322 5.322 0 0 1-1.281-.53l-1.648.989-1.287-1.287.989-1.647a5.292 5.292 0 0 1-.53-1.282L28 32.91v-1.82l1.812-.453.554-1.345-.968-1.596 1.297-1.29 1.649.99c.396-.23.826-.408 1.279-.53L34.088 25h1.822l.467 1.867c.453.12.883.299 1.281.529l1.648-.988 1.287 1.287-.989 1.647c.23.399.409.828.53 1.28L42 31.09v1.82l-1.866.467zM23.25 21a5.25 5.25 0 1 0-10.501 0 5.25 5.25 0 0 0 10.501 0zm2.644 4.555l1.696 2.825-2.207 2.207-2.826-1.694a9.094 9.094 0 0 1-2.197.908L19.56 33h-3.12l-.8-3.2a9.125 9.125 0 0 1-2.197-.906l-2.824 1.694-2.207-2.207 1.695-2.824a9.08 9.08 0 0 1-.908-2.196L6 22.56v-3.12l3.199-.8a9.047 9.047 0 0 1 .908-2.196L8.396 13.62l2.224-2.21 2.825 1.696a9.07 9.07 0 0 1 2.195-.907l.797-3.2h3.123l.8 3.2a9.085 9.085 0 0 1 2.197.907l2.824-1.694 2.207 2.207-1.694 2.824c.393.682.699 1.419.907 2.196l3.199.8v3.12l-3.199.8a9.103 9.103 0 0 1-.907 2.195zM35.25 30a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5zM21 21a3 3 0 1 1-6-.001 3 3 0 0 1 6 0z" }))));
  }
}, [1, "utrecht-icon-onderhoud", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-onderhoud", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-onderhoud":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconOnderhoud$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconOnderhoud = UtrechtIconOnderhoud$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconOnderhoud, defineCustomElement };
