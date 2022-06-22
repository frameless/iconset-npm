import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconGrofvuil$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M13.46 20H26v3h-4.7l.7 4h-3v2h-.44l-1.87-4H20l-.65-2h-5.86c-.82 0-1.48.67-1.48 1.48v.73c1.72.56 3 2.1 3 4.1v.68l11 .02v2.98H12v-3.56c-.01-.82-.7-1.47-1.51-1.47S9 28.63 9 29.45v4.05c0 .82.67 1.49 1.49 1.49H26v3H13v2h-3v-1.96c-2.24-.26-4-2.14-4-4.42v-4.14c0-1.94 1.27-3.58 3.01-4.22v-.8c0-2.45 2-4.46 4.46-4.46ZM39 25.23v-.78c0-2.45-2-4.46-4.46-4.46H33v3h1.51c.82 0 1.49.67 1.49 1.49v.74c-1.71.56-2.99 2.09-2.99 4.09V33h2.98v-3.58c.01-.82.7-1.47 1.52-1.47s1.49.67 1.49 1.49v4.06c0 .82-.67 1.49-1.49 1.49H33v3h2v2h3v-2.03c2.24-.26 3.99-2.16 3.99-4.46v-4.11c0-1.92-1.27-3.54-3-4.17Zm-3-10.2h-5v27h-3v-27h-5L25 6h8.97L36 15.03Zm-3.75-3L31.57 9h-4.16l-.67 3.03h5.51Z" }))));
  }
}, [1, "opengemeenten-icon-grofvuil"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-grofvuil", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-grofvuil":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconGrofvuil$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconGrofvuil = OpengemeentenIconGrofvuil$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconGrofvuil, defineCustomElement };
