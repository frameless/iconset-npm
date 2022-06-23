import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconVirus$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M25.01 25.01h-2v-5h2v5Zm-.99 1c-.3 0-.54.09-.72.28-.19.19-.28.43-.28.72s.09.53.28.72c.19.19.43.28.72.28s.54-.09.72-.28c.19-.19.28-.43.28-.72s-.09-.53-.28-.72a.972.972 0 0 0-.72-.28ZM42 23.98c0 1.66-1.34 3-3 3-1.09 0-2.04-.59-2.56-1.46h-3.63a9.15 9.15 0 0 1-1.52 3.71l1.13 1.13a3.92 3.92 0 0 1 3.28.06 3.96 3.96 0 0 1-3.45 7.13 3.952 3.952 0 0 1-1.93-5.05l-1.14-1.14c-1.07.77-2.31 1.3-3.66 1.54v4.07c1.14.75 1.58 2.23.97 3.49a2.748 2.748 0 1 1-4.95-2.39c.23-.47.57-.83.98-1.1v-4.04a8.93 8.93 0 0 1-3.76-1.54l-2.79 2.79c.11.52.11 1.08-.06 1.63a3.213 3.213 0 0 1-4.02 2.11 3.213 3.213 0 0 1-2.11-4.02 3.213 3.213 0 0 1 4.02-2.11c.08.02.15.06.22.09l2.61-2.61a8.94 8.94 0 0 1-1.55-3.74h-1.39a3.988 3.988 0 0 1-7.67-1.54 3.985 3.985 0 0 1 7.69-1.47h1.37c.23-1.37.77-2.62 1.55-3.71l-2.84-2.84c-.66.16-1.37.12-2.02-.2a2.993 2.993 0 0 1-1.39-4 2.993 2.993 0 0 1 4-1.39c1.33.64 1.96 2.14 1.57 3.52l2.8 2.8c1.1-.78 2.37-1.31 3.75-1.53v-1.39A4.022 4.022 0 0 1 24 6.03a4.02 4.02 0 0 1 1.5 7.75v1.41c1.34.24 2.58.77 3.65 1.54l1.9-1.9a3.11 3.11 0 0 1-.12-.81c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3c-.25 0-.49-.04-.73-.1l-1.93 1.93a8.924 8.924 0 0 1 1.52 3.67h3.59c.51-.91 1.48-1.54 2.6-1.54 1.66 0 3 1.34 3 3Zm-11.99.04c0-3.31-2.68-5.99-5.99-5.99s-5.99 2.68-5.99 5.99 2.68 5.99 5.99 5.99 5.99-2.68 5.99-5.99Z" }))));
  }
}, [1, "opengemeenten-icon-virus"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-virus", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-virus":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconVirus$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconVirus = OpengemeentenIconVirus$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconVirus, defineCustomElement };