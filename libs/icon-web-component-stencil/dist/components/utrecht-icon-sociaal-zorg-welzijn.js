import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconSociaalZorgWelzijn$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Sociaal Zorg Welzijn"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M21.466 30.016v12h-9.027v-12h9.027zm14.953 2.948v9.052h-9.028v-9.052h9.028zm-6.646-16.448v.001h4.573a3.597 3.597 0 013.594 3.598v11.3H25.959V20.116h-3.047l.001.008v8.3H11v-8.3c0-1.993 1.6-3.608 3.574-3.608h15.199zm4.738 2.718a1 1 0 00-1.462 0l-.199.21-.199-.21a.998.998 0 00-1.461 0 1.123 1.123 0 000 1.536l.199.21 1.461 1.536 1.462-1.536.199-.21a1.127 1.127 0 000-1.536zM18.462 6a4.5 4.5 0 014.495 4.496 4.5 4.5 0 01-4.495 4.495 4.5 4.5 0 01-4.495-4.495A4.5 4.5 0 0118.462 6zm12 0a4.5 4.5 0 014.494 4.496 4.5 4.5 0 01-4.495 4.495 4.5 4.5 0 01-4.495-4.495A4.5 4.5 0 0130.461 6zM19.742 8.69c-.33 1.216-1.44 1.931-2.761 1.931-.566 0-1.069-.09-1.512-.32-.005.065-.021.128-.021.194a3.016 3.016 0 003.013 3.013 3.007 3.007 0 002.993-2.824 2.431 2.431 0 01-1.712-1.994zm12 0c-.33 1.216-1.44 1.931-2.762 1.931-.566 0-1.069-.09-1.512-.32-.005.065-.02.128-.02.194a3.015 3.015 0 003.012 3.013 3.004 3.004 0 002.992-2.824 2.432 2.432 0 01-1.71-1.994z" }))));
  }
}, [1, "utrecht-icon-sociaal-zorg-welzijn", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-sociaal-zorg-welzijn", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-sociaal-zorg-welzijn":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconSociaalZorgWelzijn$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconSociaalZorgWelzijn = UtrechtIconSociaalZorgWelzijn$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconSociaalZorgWelzijn, defineCustomElement };
