import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconLeerlingenvervoer$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("circle", { cx: "11.02", cy: "21", r: "3" }), h("path", { d: "M15.99 20v.5c0 3.1-1.83 4.88-5.02 4.88H8.86c-1.61.1-2.84 1.37-2.84 3.01L6 34l2.04-.03v8.04H14v-14c3.09-1.09 4.98-3.84 4.98-7.5v-.5h-2.99ZM38.67 6H24.34c-1.84-.01-3.33 1.5-3.33 3.37v24.56c0 .59.47 1.07 1.07 1.07h1.87c.59 0 1.07-.48 1.07-1.07V32h13v1.93c0 .59.48 1.07 1.07 1.07h1.86c.59 0 1.07-.48 1.07-1.07V9.39c0-1.87-1.49-3.38-3.33-3.39ZM26 8h11v2H26V8Zm-2 4h15v9H24v-9Zm1.67 16.25c-.92 0-1.67-.73-1.67-1.64s.75-1.64 1.67-1.64 1.67.73 1.67 1.64-.75 1.64-1.67 1.64Zm11.7-.03c-.92 0-1.67-.73-1.67-1.64s.75-1.64 1.67-1.64 1.67.73 1.67 1.64-.75 1.64-1.67 1.64Z" }))));
  }
}, [1, "opengemeenten-icon-leerlingenvervoer"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-leerlingenvervoer", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-leerlingenvervoer":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconLeerlingenvervoer$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconLeerlingenvervoer = OpengemeentenIconLeerlingenvervoer$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconLeerlingenvervoer, defineCustomElement };
