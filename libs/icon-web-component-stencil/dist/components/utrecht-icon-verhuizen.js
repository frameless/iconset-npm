import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';

const UtrechtIconVerhuizen$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("utrecht-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { "fill-rule": "evenodd", d: "M24.266 21.973h-2.25l3-6.016 3 6.016h-2.25v4.51h-1.5v-4.51zm-5.25 4.51h-6v-1.5h2.25v-3.01h-.75a1.5 1.5 0 0 1-1.5-1.5v-4.5h6v4.5a1.5 1.5 0 0 1-1.5 1.5h-.75v3.01h2.25v1.5zm16.48-2.325v-4.54h2.996l1.504 4.54h-4.5zm-25.48 3.799h21v-14h-21v14zm32.979-3.027-2.68-7.433h-6.287l-.012-6.505L7 11v22.96h1.682c.673-2.578 3.014-4.49 5.8-4.49a5.996 5.996 0 0 1 5.139 2.92h10.702a5.995 5.995 0 0 1 5.139-2.92c2.799 0 5.15 1.93 5.809 4.527h1.745V24.93h-.021zm-7.533 12.04a1.501 1.501 0 1 1 1.5-1.5c0 .828-.673 1.5-1.5 1.5zm0-6c-2.481 0-4.5 2.02-4.5 4.5s2.019 4.5 4.5 4.5c2.482 0 4.5-2.018 4.5-4.5s-2.018-4.5-4.5-4.5zm-5.8 2.984a6.033 6.033 0 0 0-.2 1.517c0 .513.072 1.008.193 1.483h-9.367a5.9 5.9 0 0 0 .194-1.483c0-.524-.074-1.031-.201-1.517h9.382zm-15.18 3.017c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm0-6c-2.482 0-4.5 2.019-4.5 4.5s2.018 4.5 4.5 4.5c2.48 0 4.5-2.02 4.5-4.5s-2.02-4.5-4.5-4.5z" }))));
  }
}, [1, "utrecht-icon-verhuizen"]);
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
