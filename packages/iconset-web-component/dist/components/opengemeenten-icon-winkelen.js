import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconWinkelen$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M39.96 42.02H7.97L10 14.99l6.97.02.02-2.07c0-3.82 3.17-6.92 7.08-6.92.65 0 1.27.1 1.87.26.02 0 .03-.01.05-.02v.02c.66-.18 1.35-.27 2.05-.27 3.82 0 6.96 2.7 6.96 6.02v.95h-2v-.95c0-1.95-1.74-3.57-4-3.94a6.885 6.885 0 0 1 1.99 4.84l-.02 6.99a1.498 1.498 0 0 1-1.04 2.58c-.83 0-1.5-.67-1.5-1.5 0-.46.21-.87.54-1.14v-1.87h-8v-3h8l.02-2.06c0-2.09-1.24-3.84-3.05-4.56-1.73.64-2.95 2.08-2.95 3.66v.95h-2v-.95c0-1.43.61-2.74 1.57-3.78-2.07.62-3.58 2.47-3.58 4.68l-.02 6.96c.3.27.5.67.5 1.11 0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5c0-.44.2-.84.5-1.11V18l-4.19-.02L11.19 39h25.53L35.2 18H33v-3h4.99l1.95 27Zm-14.92-5.18c1.53 0 2.83-.54 3.74-1.3l-1.07-1.65c-.65.61-1.59.92-2.66.92-1.49 0-2.83-.67-3.54-2.07h3.08l.79-1.69h-4.33c-.02-.13-.04-.36-.04-.71 0-.31.02-.52.04-.67h4.9l.8-1.67h-5.27c.71-1.47 2.11-2.16 3.58-2.16.94 0 1.76.21 2.39.67l.88-1.78c-.86-.59-1.93-.88-3.28-.88-2.57 0-5.06 1.47-5.98 4.16h-1.8v1.67h1.47a5.824 5.824 0 0 0 0 1.38h-1.47v1.69h1.82c.92 2.64 3.35 4.1 5.94 4.1Z" }))));
  }
}, [1, "opengemeenten-icon-winkelen"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-winkelen", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-winkelen":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconWinkelen$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconWinkelen = OpengemeentenIconWinkelen$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconWinkelen, defineCustomElement };
