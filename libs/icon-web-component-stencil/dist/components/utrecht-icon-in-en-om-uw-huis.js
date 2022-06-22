import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconInEnOmUwHuis$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "In En Om Uw Huis"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M22 37h5.5v-4H22v4zm7-6.131l-4.023-3.42-4.477 3.624V39H29v-8.131zm6.972 1.988l-1.944 2.286L32 33.419V42H17.5v-8.498l-2.056 1.664-1.888-2.332 11.467-9.283L29 26.931V24.5h3v4.981l3.972 3.376zm-24.836-.641l1.168-.942 9.8-7.933a2.755 2.755 0 0 0-1.744-1.268 2.7 2.7 0 0 0 .14-.823 2.75 2.75 0 0 0-2.75-2.75c-.437 0-.845.111-1.212.293A3.485 3.485 0 0 0 13.5 17a3.488 3.488 0 0 0-3.348 2.535C8.385 19.712 7 21.187 7 23c0 .396.08.77.201 1.124A3.653 3.653 0 0 0 6 26.825c0 1.433.828 2.66 2.023 3.266-.004.079-.023.154-.023.234 0 1.951 1.526 3.532 3.448 3.653L11.017 42H15.5l-.261-4.697-4.103-5.087zM32 19.65l.016.009a1.744 1.744 0 0 0 1.734 1.591c.667 0 1.239-.377 1.535-.926A2.24 2.24 0 0 0 37.25 21.5c1.212 0 2.192-.96 2.241-2.16A3.488 3.488 0 0 0 42 16a3.5 3.5 0 0 0-3.5-3.5c-.13 0-.253.024-.379.038A2.733 2.733 0 0 0 36.5 12c-.85 0-1.601.394-2.105 1H33.5c-.242 0-.478.024-.706.071C30.649 13.413 29 15.261 29 17.5V23h3v-3.35zm9.25 16.85l.75 1V42h-1.5v-2.5H39V42h-1.5v-2.5H36V42h-1.5v-4.5l.75-1 .75 1v.5h1.5v-.5l.75-1 .75 1v.5h1.5v-.5l.75-1z" }))));
  }
}, [1, "utrecht-icon-in-en-om-uw-huis", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-in-en-om-uw-huis", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-in-en-om-uw-huis":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconInEnOmUwHuis$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconInEnOmUwHuis = UtrechtIconInEnOmUwHuis$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconInEnOmUwHuis, defineCustomElement };
