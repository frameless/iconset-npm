import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconVerhuizen$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Verhuizen"), h("path", { fill: "currentColor", d: "M24.2656 21.9726h-2.25l3-6.016 3 6.016h-2.25v4.511h-1.5v-4.511zm-5.25 4.511h-6v-1.5h2.25v-3.011h-.75c-.828 0-1.5-.672-1.5-1.5v-4.5h6v4.5c0 .828-.672 1.5-1.5 1.5h-.75v3.011h2.25v1.5zm16.48-2.326v-4.54h2.996l1.504 4.54h-4.5zm-25.48 3.799h21v-14h-21v14zm32.979-3.027l-2.68-7.433h-6.287l-.0116-6.5046L7 11l-.0004 13.8306V33.9596h1.682c.673-2.578 3.014-4.489 5.8-4.489 2.181 0 4.09 1.175 5.139 2.92h10.702c1.049-1.745 2.957-2.92 5.139-2.92 2.799 0 5.15 1.93 5.809 4.526h1.745v-9.067h-.021zm-7.533 12.041c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-6c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5c2.482 0 4.5-2.019 4.5-4.5s-2.018-4.5-4.5-4.5zm-5.799 2.983c-.126.486-.201.993-.201 1.517 0 .513.072 1.008.193 1.483h-9.367c.123-.475.194-.97.194-1.483 0-.524-.074-1.031-.201-1.517h9.382zm-15.181 3.017c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-6c-2.482 0-4.5 2.019-4.5 4.5s2.018 4.5 4.5 4.5c2.481 0 4.5-2.019 4.5-4.5s-2.019-4.5-4.5-4.5z", "fill-rule": "evenodd" }))));
  }
}, [1, "utrecht-icon-verhuizen", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-verhuizen", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-verhuizen":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconVerhuizen$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconVerhuizen = UtrechtIconVerhuizen$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconVerhuizen, defineCustomElement };
