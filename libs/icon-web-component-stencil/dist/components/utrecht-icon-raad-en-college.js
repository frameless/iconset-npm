import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconRaadEnCollege$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Raad En College"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M39 23.5h-3c-1.657 0-3 .843-3 2.5v.426A7.513 7.513 0 0 1 34.869 29H42v-3c0-1.657-1.343-2.5-3-2.5m-24 2.926V26c0-1.657-1.343-2.5-3-2.5H9c-1.657 0-3 .843-3 2.5v3h7.131A7.513 7.513 0 0 1 15 26.426M37.481 22a3 3 0 1 0 .038-6 3 3 0 0 0-.038 6m-27 0a3 3 0 1 0 .038-6 3 3 0 0 0-.038 6M18 16.5c0 3.309 2.691 6 6 6 3.142 0 5.723-2.429 5.975-5.506a4.066 4.066 0 0 1-3.836-3.508c-.552 2.031-2.404 3.224-4.609 3.224-1.358 0-2.519-.281-3.445-1.178A6.059 6.059 0 0 0 18 16.5m-1.5 0c0-4.135 3.364-7.5 7.5-7.5s7.5 3.365 7.5 7.5S28.136 24 24 24s-7.5-3.365-7.5-7.5m12.635 9.61c-.816 2.298-1.989 4.492-3.009 6.185l-1.246-3.114.65-.651a.749.749 0 0 0 .141-.865L24.839 26h-1.678l-.832 1.665a.749.749 0 0 0 .141.865l.65.651-1.243 3.109c-1.02-1.694-2.192-3.888-3.01-6.18a5.954 5.954 0 0 0-1.098.33c1.478 4.812 4.873 9.566 6.232 11.347 1.36-1.778 4.76-6.528 6.23-11.347a6.012 6.012 0 0 0-1.096-.33M14 32v7h9.04c-1.195-1.525-4.889-6.51-6.6-11.802C14.968 28.291 14 30.025 14 32m20 0v7h-9.039c1.2-1.525 4.895-6.498 6.6-11.801C33.033 28.291 34 30.025 34 32" }))));
  }
}, [1, "utrecht-icon-raad-en-college", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-raad-en-college", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-raad-en-college":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconRaadEnCollege$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconRaadEnCollege = UtrechtIconRaadEnCollege$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconRaadEnCollege, defineCustomElement };
