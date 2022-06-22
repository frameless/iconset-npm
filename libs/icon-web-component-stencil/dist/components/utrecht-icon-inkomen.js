import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconInkomen$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Inkomen"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M33 32.019h6V30.5h-6v1.519zm3 3h-3c-1.654 0-3-1.346-3-3V30.5c0-1.654 1.346-3 3-3h3v-3c0-.542-.458-1-1-1H14.5c-2.205 0-4-1.794-4-4v-1.492c-.826 0-1.5.674-1.5 1.5v18.017c0 .537.438.975.975.975h25.033a.993.993 0 0 0 .992-.993v-2.488zM13.5 19.5c0 .551.449 1 1 1h6.031c.025-.164.04-.33.04-.5a3.57 3.57 0 0 0-.247-1.279 2.551 2.551 0 0 0-.067-.172 3.615 3.615 0 0 0-.296-.544A3.572 3.572 0 0 0 17 16.429c-1.229 0-2.306.63-2.948 1.578h-.014c-.016.023-.025.052-.041.076a3.457 3.457 0 0 0-.2.37c-.033.069-.073.135-.103.207-.082.203-.15.414-.194.634v.206zm7.929-7.5A3.574 3.574 0 0 0 25 15.571 3.574 3.574 0 0 0 28.571 12 3.574 3.574 0 0 0 25 8.429 3.574 3.574 0 0 0 21.429 12zm.149 6.004a4.947 4.947 0 0 1 .395 2.496H32v-1.502A.994.994 0 0 0 31 18l-9.422.004zM39 27.5h3v7.519h-3v2.488a3.997 3.997 0 0 1-3.992 3.993H9.975A3.98 3.98 0 0 1 6 37.525V19.508C6 17.028 8.02 15 10.5 15h10.525A4.954 4.954 0 0 1 20 12c0-2.757 2.243-5 5-5s5 2.243 5 5c0 1.13-.391 2.162-1.025 3H31a3.985 3.985 0 0 1 3.975 3.985L35 20.5c2.205 0 4 1.794 4 4v3zm-14.925 7.494c-1.512 0-2.778-.785-3.288-2.296h3.288l.247-1.209h-3.913s-.049-.364-.049-.545c0-.247.033-.512.033-.512h4.127l.262-1.133h-4.093c.526-1.436 1.743-2.317 3.304-2.317.609 0 1.167.1 1.167.1l.51-1.905S24.914 25 24.043 25c-2.713 0-4.916 1.806-5.623 4.299h-1.227v1.133h1.013s-.032.364-.032.545c0 .214.032.512.032.512h-1.013v1.209h1.227C19.094 35.342 21.231 37 24.043 37c1.134 0 1.989-.318 1.989-.318l-.379-1.938s-.722.25-1.578.25z" }))));
  }
}, [1, "utrecht-icon-inkomen", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-inkomen", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-inkomen":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconInkomen$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconInkomen = UtrechtIconInkomen$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconInkomen, defineCustomElement };