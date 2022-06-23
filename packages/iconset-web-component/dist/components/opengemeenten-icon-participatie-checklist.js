import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconParticipatieChecklist$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "m41.04 16.78-3.82-3.82c-.64-.64-1.49-.96-2.33-.96s-1.69.32-2.33.96l-13.72 13.7-3.26 9.85c-.34 1.03.45 2.01 1.44 2.01.16 0 .32-.03.49-.08l9.84-3.29 13.68-13.71a3.308 3.308 0 0 0 0-4.66ZM25.5 32.74l-3.69 1.29-1.85-1.85 1.28-3.68 9.4-9.4 1.41 1.41-9.03 9.03 1.41 1.41 9.03-9.03 1.41 1.41-9.37 9.39Zm13.42-13.45L37 21.21l-4.24-4.24 1.92-1.91a.288.288 0 0 1 .42 0l3.82 3.82c.11.11.11.3 0 .42Z" }), h("path", { d: "m23.76 26.01.08.08.01-.01-.09-.09v.02zM19.8 8.11 17.68 6l-6.36 6.36-3.19-3.18L6 11.29l5.31 5.31 8.49-8.49zm0 12.83-2.12-2.12-6.36 6.36L8.13 22 6 24.12l5.31 5.31 8.49-8.49zm-5.46 15.92c-.58-.58-1.53-.58-2.11 0l-.9.9-3.2-3.18L6 36.7l5.31 5.31 3.03-3.03c.58-.58.58-1.53 0-2.12Z" }))));
  }
}, [1, "opengemeenten-icon-participatie-checklist"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-participatie-checklist", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-participatie-checklist":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconParticipatieChecklist$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconParticipatieChecklist = OpengemeentenIconParticipatieChecklist$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconParticipatieChecklist, defineCustomElement };
