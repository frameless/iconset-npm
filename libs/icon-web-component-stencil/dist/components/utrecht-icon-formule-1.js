import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconFormule1$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Formule 1"), h("path", { fill: "currentColor", d: "M15.14 41.94a4.5 4.5 0 114.5-4.5 4.51 4.51 0 01-4.5 4.5zm0-6a1.5 1.5 0 101.5 1.5 1.5 1.5 0 00-1.5-1.5zM39 37.56a6.34 6.34 0 01-.22 1.44H42v-3h-3.25a5.61 5.61 0 01.25 1.56zm-10.47-7.65h-1.21a2.32 2.32 0 00-2.41-2.2 2.45 2.45 0 00-2.42 2.06V27h-1.7L9 30.38V27H6v9.07a3 3 0 003 3h.37a5.86 5.86 0 01.08-3.58 6 6 0 0110.92-1h7.35a6 6 0 0110.47 0H42v-1.68a30.38 30.38 0 00-13.47-2.9zM21 39h6.2a5.84 5.84 0 01-.2-1.47 6 6 0 01.17-1.53h-6.24a6 6 0 01.21 1.54A5.84 5.84 0 0121 39zm12 2.95a4.5 4.5 0 114.5-4.5 4.51 4.51 0 01-4.5 4.49zm0-6a1.5 1.5 0 101.5 1.5 1.5 1.5 0 00-1.5-1.51zm7.8-19.6l1.2-1.81-1.81-1.27L39 15.08l-1.74-1.22L36 15.67l1.73 1.21-1.26 1.81-1.74-1.22-1.26 1.81 1.8 1.26 1.27-1.8L38.23 20l1.27-1.8-1.74-1.22L39 15.13zM38.44 12l-1.81-1.26-1.26 1.8 1.8 1.27zm-3.59-2.49L33 8.24l-1.26 1.81 1.8 1.26zm-.21 7.93l1.27-1.81-1.74-1.22 1.27-1.8-1.81-1.26-1.26 1.8 1.73 1.22-1.26 1.8zm-4.8-.68l1.8 1.24 1.27-1.8L31.1 15zm-3.52-2.47l1.73 1.22 1.27-1.81 1.73 1.22 1.27-1.8-1.74-1.22 1.27-1.81-1.74-1.21 1.27-1.81-1.23-.86L24 15l-6.13-8.79-1.23.86 1.26 1.81-1.66 1.17L15 8.24l-1.8 1.27 1.26 1.8 1.74-1.22 1.26 1.81-1.76 1.22 1.3 1.8 1.81-1.27-1.27-1.8 1.67-1.17 1.26 1.81-1.77 1.21 1.3 1.81 1.74-1.22 1.39 2-4.57 6.51 1.23.87L24 17.58l4.25 6.08 1.23-.87-4.57-6.51zm4.19-2.44l-1.26 1.8-1.67-1.16 1.27-1.81zm-17.86.71l-1.27-1.8L9.58 12l1.26 1.81zm-2.4 4.37l1.81-1.26-1.27-1.81-1.73 1.22-1.27-1.81L6 14.54l1.26 1.8L9 15.13zm4.13-5.58l-1.8 1.26 1.26 1.8-1.73 1.22 1.26 1.81 1.81-1.27-1.27-1.8 1.74-1.22zm-4.06 5.53l-1.8 1.27L9.78 20l1.81-1.26zm1.2 1.86l1.26 1.8 1.81-1.26-1.27-1.81zm3.59-2.52L16.37 18l1.81-1.26L16.91 15z" }))));
  }
}, [1, "utrecht-icon-formule-1", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-formule-1", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-formule-1":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconFormule1$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconFormule1 = UtrechtIconFormule1$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconFormule1, defineCustomElement };
