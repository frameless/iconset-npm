import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconGeboorte$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M17.97 23.71c0-.83.67-1.5 1.49-1.5s1.49.67 1.49 1.5-.67 1.5-1.49 1.5-1.49-.67-1.49-1.5Zm10.49-1.56c-.82 0-1.49.67-1.49 1.5s.67 1.5 1.49 1.5 1.49-.67 1.49-1.5-.67-1.5-1.49-1.5Zm-.18 6.59c-2.54 1.72-6.03 1.75-8.61.09a.993.993 0 0 0-1.38.3c-.3.46-.17 1.08.3 1.38 1.58 1.02 3.42 1.56 5.31 1.56s3.87-.58 5.49-1.68c.46-.31.58-.93.27-1.39a.999.999 0 0 0-1.39-.27ZM42 23.65c0 2.27-1.44 4.31-3.52 5.15C36.44 34.95 30.6 39.17 24 39.17s-12.11-3.92-14.31-9.85C7.51 28.53 6 26.46 6 24.11s1.51-4.42 3.69-5.21c1.96-5.28 6.67-8.97 12.24-9.71 2.28-.28 4.49 1.07 5.17 3.31.37 1.21.24 2.48-.37 3.59a4.707 4.707 0 0 1-2.83 2.28c-.12.03-.23.05-.35.06-.68.04-1.31-.38-1.52-1.05-.24-.78.21-1.61 1-1.85a1.75 1.75 0 0 0 1.19-2.18c-.14-.45-.44-.82-.86-1.04-.28-.15-.58-.21-.89-.2-.16.02-.32.04-.47.07-.11.03-.23.05-.34.05-4.4.83-8.03 3.95-9.38 8.31l-.27.85-.89.16c-1.24.23-2.14 1.3-2.14 2.54s.9 2.31 2.14 2.54l.89.16.27.85c1.59 5.11 6.3 8.54 11.71 8.54s10.38-3.69 11.82-8.96l.24-.87.89-.19c1.19-.26 2.06-1.32 2.06-2.53 0-1.27-.96-2.36-2.25-2.55l-.9-.13-.3-.85a12.174 12.174 0 0 0-6.11-6.85c-.03-.36-.08-.73-.17-1.09a6.75 6.75 0 0 0-1.3-2.61c4.51 1.21 8.29 4.43 10.11 8.8 2.28.73 3.91 2.85 3.91 5.27Z" }))));
  }
}, [1, "opengemeenten-icon-geboorte"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-geboorte", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-geboorte":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconGeboorte$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconGeboorte = OpengemeentenIconGeboorte$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconGeboorte, defineCustomElement };
