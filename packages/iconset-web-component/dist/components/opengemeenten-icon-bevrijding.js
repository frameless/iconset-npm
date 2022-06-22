import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconBevrijding$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M31.29 18.99c0 .41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75Zm9.72 14.8a8.767 8.767 0 0 1-4.16-4.51l-1.34 2.64.35.37c2.17 2.63 2.71 6.4 1.07 9.63-4.35-2.21-6.08-7.54-3.88-11.88L36 24.32h-2.57v.75c-.2 2.07-1.01 3.81-2.42 5.2-2.72 2.68-6.75 2.72-7.56 2.72h-1.33c-.3 0-.49.27-.57.41l-1.95 5a3.714 3.714 0 0 1-4.66 2.14l-.26-.09a14.246 14.246 0 0 1-7.74-6.33l-.47-.8c-.45-.78-.58-1.73-.34-2.6.24-.87.83-1.62 1.62-2.05l4.45-2.46c-.26-.59-.38-1.24-.37-1.91.01-.71.2-1.41.53-2.03l-1.11-1.11c-1.49-1.53-2.15-3.97-.95-6.14l-.34-.34c-.21-.21-.89-.98-1.06-2.24-.14-1.03.03-2.61 1.67-4.32L13 5.99l1.85 2.07 9.26 9.15c.58-.69 1.29-1.52 1.42-1.67.41-.46.89-.85 1.42-1.16.91-.54 1.95-.82 3.01-.82.47 0 .95.06 1.41.17 1.79.42 3.3 1.7 4.05 3.41.34.78.51 1.59.51 2.41l1.28 2.22 2.59-4.87c1.27.68 2.09 2.4 1.46 3.63l-1.65 3.31.32.34c2.17 2.63 2.71 6.4 1.07 9.63Zm-7.07-11.72L33 20.45l-.14-.25c.14-.57.11-1.2-.18-1.87-.37-.83-1.11-1.49-2-1.7a2.896 2.896 0 0 0-2.21.32c-.26.16-.5.35-.71.58-.16.18-1.73 2.03-1.73 2.03.48.85.93 1.98.95 3.31l-2.98.05c-.02-1.58-1.25-2.84-1.26-2.86l-9.67-9.79c-.63.66-1.26 1.22-1.19 1.76.05.34.22.54.23.55l2.31 2.31-1.05 1.05-.02-.02c-1.41 1.48-.2 2.88.06 3.14l3.08 3.08-.93.93-.45.46c-.16.25-.25.53-.26.83 0 .42.15.83.44 1.13.31.33.7.48 1.19.49h.53v2.99h-.56c-.72 0-1.44-.21-2.07-.53l-5.16 2.85c-.18.1-.25.33-.14.52l.47.8c1.37 2.35 3.54 4.12 6.11 4.99l.26.09a.71.71 0 0 0 .9-.42l2-5.12c.05-.11 1.01-2.17 3.3-2.17h1.33c.38 0 3.52.05 5.45-1.86 1.05-1.03 1.58-2.36 1.58-4.12 0-1.48.99-1.86 1.59-1.95h1.87Z" }))));
  }
}, [1, "opengemeenten-icon-bevrijding"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-bevrijding", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-bevrijding":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconBevrijding$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconBevrijding = OpengemeentenIconBevrijding$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconBevrijding, defineCustomElement };