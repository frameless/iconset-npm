import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconManege$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Manege"), h("path", { fill: "currentColor", d: "M30.1 23.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.6 1.5 1.5zm11.3 9.8c-.8 3.9-4.3 6.6-8.2 6.6-.5 0-1.1-.1-1.6-.2l-3-3.7c-4.6-.1-7.4-1.6-9.1-3.2V43h-3V26.5h3v.5c.1.5.8 5.1 7.5 6-2.7-2.6-8.2-8.7-10.4-15.5 1.1-.4 2-.7 2.9-.8.4 1.2.9 2.3 1.5 3.4 2.5-2.7 5.4-3.7 7.6-4.1L27 14v-3.9c-.8.2-1.7.5-2.3 1.1-.5.4-.7 1-.7 1.8v1.5h-1.5c-.5 0-11.1.1-16.4 10.8v-5.5c5.2-6.5 12.2-8 15.1-8.2.2-1 .7-1.9 1.5-2.6 2.1-2.1 5.6-2.1 5.9-2H30v5.8l1.8 1.9 3.9 9.2 5.7 9.4zm-11.9-2l4.9-3.6-1.5-2.5-2.9-6.4c-1.7.2-5.2.9-7.5 4 2.5 3.9 5.6 7.1 7 8.5zm8.6 2.4L36 30.2l-5.2 3.9 2.4 2.9c2.1 0 4.1-1.3 4.9-3.3z" }))));
  }
}, [1, "utrecht-icon-manege", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-manege", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-manege":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconManege$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconManege = UtrechtIconManege$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconManege, defineCustomElement };