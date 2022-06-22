import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconBevolking$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M24.17 36.43a6.5 6.5 0 0 0 1.35-3.95c0-.5-.06-.98-.17-1.44h5.68c1.46 0 2.67 1.04 2.94 2.42v8.49h-6.96v-1.78l-.04-.19c-.31-1.61-1.4-2.9-2.81-3.56Zm.85 3.94a2.995 2.995 0 0 0-2.94-2.42h-6.05c-1.66 0-3 1.34-3 3v1h11.99v-1.58ZM33 20.97s-.09.01-.14.01a6.5 6.5 0 0 1 1.74 4.41c0 1.49-.51 2.86-1.35 3.95 1.42.66 2.5 1.95 2.81 3.56l.04.19v8.85h2.89v-7.95H42V23.38a2.995 2.995 0 0 0-2.94-2.42h-6.05ZM19.59 26c.73.06 1.42.25 2.06.53a6.12 6.12 0 0 1-.11-1.14c0-3.58 2.92-6.5 6.5-6.5.15 0 .31.01.46.02v-.47a2.995 2.995 0 0 0-2.94-2.42h-6.05c-.65 0-1.26.22-1.75.57.44.87.69 1.85.69 2.89 0 1.49-.51 2.86-1.35 3.95 1.11.52 2.01 1.42 2.5 2.56ZM9.06 37.99v3.96h1.98v-1c0-1.99 1.17-3.7 2.86-4.5a6.468 6.468 0 0 1-1.37-3.97c0-3.04 2.1-5.59 4.93-6.3a2.959 2.959 0 0 0-2.4-1.22H9.01c-1.66 0-3 1.34-3 3l.04 10.03h3.02Zm4.5-22.73h-.02c-.46-.17-.95-.27-1.47-.27-.47 0-.92.09-1.35.23-.03 0-.05.02-.08.02-1.78.6-3.07 2.26-3.07 4.25 0 2.49 2.01 4.5 4.5 4.5s4.5-2.01 4.5-4.5c0-1.96-1.26-3.61-3.01-4.23Zm-1.49 6.73a2.5 2.5 0 0 1-2.5-2.5c0-.21.03-.41.08-.6.3.07.61.11.93.11 1.25 0 2.37-.52 3.18-1.34.49.46.81 1.1.81 1.83a2.5 2.5 0 0 1-2.5 2.5Zm11.9-15.7h-.02c-.46-.17-.95-.27-1.47-.27-.47 0-.92.09-1.35.23-.03 0-.05.02-.08.02-1.78.6-3.07 2.26-3.07 4.25 0 2.49 2.01 4.5 4.5 4.5s4.5-2.01 4.5-4.5c0-1.96-1.26-3.61-3.01-4.23Zm-1.49 6.73a2.5 2.5 0 0 1-2.5-2.5c0-.21.03-.41.08-.6.3.07.61.11.93.11 1.25 0 2.37-.52 3.18-1.34.49.46.81 1.1.81 1.83a2.5 2.5 0 0 1-2.5 2.5Zm15.44-1.78h-.02c-.46-.17-.95-.27-1.47-.27-.47 0-.92.09-1.35.23-.03 0-.05.02-.08.02-1.78.6-3.07 2.26-3.07 4.25 0 2.49 2.01 4.5 4.5 4.5s4.5-2.01 4.5-4.5c0-1.96-1.26-3.61-3.01-4.23Zm-1.49 6.73a2.5 2.5 0 0 1-2.5-2.5c0-.21.03-.41.08-.6.3.07.61.11.93.11 1.25 0 2.37-.52 3.18-1.34.49.46.81 1.1.81 1.83a2.5 2.5 0 0 1-2.5 2.5Zm-7 3.24h-.02c-.46-.17-.95-.27-1.47-.27-.47 0-.92.09-1.35.23-.03 0-.05.02-.08.02-1.78.6-3.07 2.26-3.07 4.25 0 2.49 2.01 4.5 4.5 4.5s4.5-2.01 4.5-4.5c0-1.96-1.26-3.61-3.01-4.23Zm-1.49 6.73a2.5 2.5 0 0 1-2.5-2.5c0-.21.03-.41.08-.6.3.07.61.11.93.11 1.25 0 2.37-.52 3.18-1.34.49.46.81 1.1.81 1.83a2.5 2.5 0 0 1-2.5 2.5Zm-7.45.25h-.02c-.46-.17-.95-.27-1.47-.27-.47 0-.92.09-1.35.23-.03 0-.05.02-.08.02-1.78.6-3.07 2.26-3.07 4.25 0 2.49 2.01 4.5 4.5 4.5s4.5-2.01 4.5-4.5c0-1.96-1.26-3.61-3.01-4.23ZM19 34.92a2.5 2.5 0 0 1-2.5-2.5c0-.21.03-.41.08-.6.3.07.61.11.93.11 1.25 0 2.37-.52 3.18-1.34.49.46.81 1.1.81 1.83a2.5 2.5 0 0 1-2.5 2.5Z" }))));
  }
}, [1, "opengemeenten-icon-bevolking"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-bevolking", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-bevolking":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconBevolking$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconBevolking = OpengemeentenIconBevolking$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconBevolking, defineCustomElement };