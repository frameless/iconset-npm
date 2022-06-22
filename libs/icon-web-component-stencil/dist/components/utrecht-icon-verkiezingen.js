import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconVerkiezingen$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Verkiezingen"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M25.484 31.82c-.17 4.821-4.122 8.68-8.984 8.68a9 9 0 0 1-9-9c0-4.863 3.859-8.814 8.679-8.984a6.08 6.08 0 0 1 .902-1.165l.352-.35H6v21h21V30.564l-.352.353a6.043 6.043 0 0 1-1.164.902zm7.153-17.547l-1.061-1.06-9.967 9.95 1.07 1.07 9.958-9.96zm1.06 1.062l-9.958 9.958 1.07 1.07 9.95-9.967-1.061-1.06zM22.4 28.195l-.781-.78-.011.01-1.061-1.06.012-.012-.781-.78-.766 2.276 1.11 1.112 2.278-.767zM31.578 8.97L39 16.394 25.648 29.77a4.506 4.506 0 0 1-1.735 1.081l-.005.002-7.368 2.481a1.498 1.498 0 0 1-1.54-.363 1.501 1.501 0 0 1-.362-1.539l2.48-7.368.002-.005a4.525 4.525 0 0 1 1.08-1.735L31.579 8.971zm9.545 1.06L37.94 6.85c-1.132-1.132-3.11-1.133-4.243 0l-1.06 1.061 7.424 7.425 1.06-1.06a3.003 3.003 0 0 0 0-4.244zM14.446 36.037a.754.754 0 0 1-.372.178l.592 1.885a.752.752 0 0 1-.715.975.75.75 0 0 1-.632-.346l-1.464-2.285.115.396a.749.749 0 1 1-1.44.42l-1.575-5.4a.751.751 0 0 1 .409-.893.747.747 0 0 1 .942.28l1.546 2.412a.75.75 0 0 1 1.273-.255l1.388 1.574a.75.75 0 0 1-.067 1.06z" }))));
  }
}, [1, "utrecht-icon-verkiezingen", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-verkiezingen", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-verkiezingen":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconVerkiezingen$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconVerkiezingen = UtrechtIconVerkiezingen$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconVerkiezingen, defineCustomElement };