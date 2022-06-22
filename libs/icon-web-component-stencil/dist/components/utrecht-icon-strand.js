import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconStrand$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Strand"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M33.696 35.242c-1.412.755-2.925.985-4.454.431a12.742 12.742 0 0 1-1.219-.538l.372 1.679c.276.129.555.253.847.36 1.529.554 3.042.324 4.454-.432 2.614-1.398 5.679-1.671 8.307-.163v-1.501c-2.628-1.507-5.693-1.235-8.307.164zm-13.288 2.615c-1.204.574-2.266 1.227-3.674 1.142-1.358-.082-2.35-.825-3.55-1.325-1.714-.714-3.57-.853-5.358-.344-.644.183-1.234.457-1.823.757v1.5c.589-.3 1.179-.574 1.823-.756 1.788-.51 3.644-.371 5.358.343 1.2.5 2.192 1.244 3.55 1.326 1.408.085 2.47-.568 3.674-1.142a8.4 8.4 0 0 1 3.758-.833l-.332-1.499a8.447 8.447 0 0 0-3.426.831zM7.826 35.829c1.788-.509 3.644-.37 5.358.344 1.2.5 2.192 1.244 3.55 1.326 1.408.085 2.47-.569 3.674-1.143a8.48 8.48 0 0 1 3.096-.816l-.327-1.472a8.55 8.55 0 0 0-2.769.788c-1.204.574-2.266 1.227-3.674 1.142-1.358-.082-2.35-.826-3.55-1.326-1.714-.714-3.57-.853-5.358-.343-.644.183-1.234.456-1.823.756v1.501c.589-.3 1.179-.573 1.823-.757zM24.24 25.093l5.757-1.277c-2.048-3.3-5.063-5.362-7.228-5.428l1.471 6.705zm-1.464.325l-1.47-6.699c-1.976 1.016-3.972 4.332-4.381 7.996l5.851-1.297zm-7.383 1.636c.201-2.633 1.156-5.235 2.508-7.15-.463.26-.914.541-1.35.851a14.953 14.953 0 0 0-3.96 4.172 14.914 14.914 0 0 0-1.502 3.082l4.304-.955zm10.962-9.023c1.94 1.149 3.82 3.073 5.189 5.442l4.423-.98a15.011 15.011 0 0 0-2.666-2.157 14.934 14.934 0 0 0-5.351-2.108 15.099 15.099 0 0 0-1.595-.197zm-1.446 9.986L28.009 42h-1.537l-3.028-13.658-15.036 3.334-.647-2.914a18 18 0 0 1 2.299-5.448 17.97 17.97 0 0 1 4.752-5.004 17.827 17.827 0 0 1 5.577-2.636c-.004-.016-.015-.028-.019-.043a1 1 0 1 1 1.953-.434c.004.017-.002.032.001.049a17.875 17.875 0 0 1 6.169.031 17.941 17.941 0 0 1 6.421 2.528 17.932 17.932 0 0 1 4.486 4.092l.614 2.772-15.105 3.348zM7.5 10.5c0 1.654 1.345 3 3 3 1.654 0 3-1.346 3-3s-1.346-3-3-3c-1.655 0-3 1.346-3 3zm-1.5 0a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0zm36.003 27.579v1.501c-2.628-1.507-5.693-1.235-8.307.164-1.412.755-2.925.985-4.454.431-.038-.014-.073-.034-.112-.048l-.368-1.656c.16.068.315.143.48.203 1.529.554 3.042.324 4.454-.431 2.614-1.399 5.679-1.671 8.307-.164z" }))));
  }
}, [1, "utrecht-icon-strand", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-strand", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-strand":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconStrand$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconStrand = UtrechtIconStrand$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconStrand, defineCustomElement };
