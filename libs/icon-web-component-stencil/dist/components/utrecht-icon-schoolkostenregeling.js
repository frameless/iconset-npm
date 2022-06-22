import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconSchoolkostenregeling$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Schoolkostenregeling"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M28.5 39H28v3h.5a1.5 1.5 0 0 0 0-3zM6.243 40.929L9.5 42v-3l-3.257 1.071a.5.5 0 0 0 0 .858zM10.5 42H27v-3H10.5v3zM9 34.5h18V9H9v25.5zM30 9v25.5c0 1.654-1.346 3-3 3H6V6h21c1.654 0 3 1.346 3 3zM12.5 20h11v-6.5h-11V20zm0 1.5H11V12h14v9.5H12.5zM14 16h8v-1h-8v1zm1 2h6v-1h-6v1zm24-9h-4.5v30H39v-1.5h-1v-1h1V35h-1v-1h1v-1.5h-1.97v-1H39V30h-1v-1h1v-1.5h-1v-1h1V25h-2v-1h2v-1h-1v-1h1v-1.5h-1v-1h1V18h-2v-1h2v-1h-1v-1h1v-1.5h-1v-1h1V9zm3-3v36H31.5V6H42zm-6 4.75a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0z" }))));
  }
}, [1, "utrecht-icon-schoolkostenregeling", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-schoolkostenregeling", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-schoolkostenregeling":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconSchoolkostenregeling$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconSchoolkostenregeling = UtrechtIconSchoolkostenregeling$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconSchoolkostenregeling, defineCustomElement };