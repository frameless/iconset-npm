import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconVervoersvoorziening$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Vervoersvoorziening"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M19.691 35.023a5.756 5.756 0 0 1-5.643 4.653c-3.165 0-5.752-2.587-5.752-5.752a5.75 5.75 0 0 1 3.715-5.373v-2.417a8.061 8.061 0 0 0-6.01 7.79c0 4.434 3.614 8.05 8.047 8.05a8.044 8.044 0 0 0 6.562-3.387l-.919-3.564zM16.25 20.984a2.25 2.25 0 1 0-.002-4.501 2.25 2.25 0 0 0 .002 4.501m21.25-2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm-9 3.51H34v-1.51h-5.5v1.51zm-5-2.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3.01-10.81c.04-.12.14-.2.25-.21l8.84.004c.064 0 .153.07.192.196l1.878 4.82H24.76l1.75-4.81zm14.804 5.003a.874.874 0 0 0 .686-.853v-.465a.875.875 0 0 0-.875-.875h-1.05l-1.466-3.757C38.17 6.892 36.968 6 35.6 6l-8.85.004c-1.4 0-2.64.92-3.05 2.21l-1.37 3.77h-.955a.875.875 0 0 0-.875.875v.465c0 .41.285.764.686.853l.322.073-.278.784-.02.04-.22.53a6 6 0 0 0-.48 2.36l-.01 6.99c0 .57.46 1.03 1.03 1.03h1.94c.57 0 1.03-.46 1.03-1.03v-.97H23v-1h16.479v1H38v.97c0 .57.46 1.03 1.03 1.03h1.94c.57 0 1.03-.46 1.03-1.03v-6.98c0-.82-.17-1.63-.49-2.38l-.326-.767-.223-.57.353-.08zM21.82 29.484H19v-5.38c0-.9-.72-1.62-1.62-1.62h-2.26c-.9 0-1.62.72-1.62 1.62v5.95c0 .56.19 1.07.5 1.48.2.26.46.48.75.65.23.12.48.21.75.26 0 0 .3.04.4.04h4.68l1.42 5.5 2.9-.75-1.62-6.61a1.5 1.5 0 0 0-1.46-1.14" }))));
  }
}, [1, "utrecht-icon-vervoersvoorziening", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-vervoersvoorziening", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-vervoersvoorziening":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconVervoersvoorziening$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconVervoersvoorziening = UtrechtIconVervoersvoorziening$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconVervoersvoorziening, defineCustomElement };