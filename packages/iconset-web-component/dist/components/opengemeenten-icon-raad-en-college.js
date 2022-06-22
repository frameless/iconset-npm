import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconRaadEnCollege$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M23.99 22C28.4 22 32 18.41 32 13.99s-3.59-8.01-8.01-8.01-8.01 3.59-8.01 8.01S19.57 22 23.99 22Zm-4.75-9.26c.28.03.56.06.84.06 2.23 0 4.25-.86 5.78-2.25.05.06.09.12.15.17.78.78 1.68 1.34 2.64 1.72.16.49.27 1 .27 1.55 0 2.72-2.21 4.93-4.93 4.93s-4.93-2.21-4.93-4.93c0-.43.07-.85.18-1.25Zm17.19 7.08c2.06.39 3.83-1.38 3.44-3.44-.22-1.14-1.15-2.08-2.29-2.29a2.927 2.927 0 0 0-3.44 3.44c.22 1.14 1.15 2.08 2.29 2.29ZM39.5 21h-4.89c-.77 0-1.49.4-1.96.98 2.03 1.23 3.35 3.44 3.35 6.01V29h6l.03-5.5c0-1.33-1.2-2.5-2.53-2.5ZM26.48 35.06c0 .09.03.18.03.27 0 1.38-1.13 2.5-2.52 2.5s-2.52-1.12-2.52-2.5c0-.11.02-.21.03-.31-1.84-2.22-4.67-6.01-6.45-10.11-.65.84-1.05 1.88-1.05 3.06v11.04h3v3h14v-3h3l.02-11.04c0-1.17-.4-2.22-1.05-3.06-1.78 4.14-4.65 7.94-6.49 10.16ZM13.42 21H8.54c-1.34 0-2.53 1.17-2.53 2.5V29h5.98l.04-.99c0-2.58 1.32-4.79 3.35-6.02-.47-.59-1.18-.99-1.96-.99Zm-2.99-1.18c2.06.39 3.83-1.38 3.44-3.44-.22-1.14-1.15-2.08-2.29-2.29a2.927 2.927 0 0 0-3.44 3.44c.22 1.14 1.15 2.08 2.29 2.29Zm13.55 13c.49 0 .94.14 1.32.38.71-.88 3.79-4.84 6.02-9.64-.67-.36-2.26-.59-2.26-.59h-.55s-.77 2.73-3.02 5.56c0 0-.54-2.52-.55-2.54l1.02-1.01v-1.99h-3.95v1.99l.96.99-.46 2.58c-2.02-2.34-3.12-5.57-3.12-5.57h-.64s-1.45.26-2.08.59c2.22 4.77 5.29 8.73 6 9.63.38-.23.82-.37 1.3-.37Z" }))));
  }
}, [1, "opengemeenten-icon-raad-en-college"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-raad-en-college", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-raad-en-college":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconRaadEnCollege$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconRaadEnCollege = OpengemeentenIconRaadEnCollege$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconRaadEnCollege, defineCustomElement };