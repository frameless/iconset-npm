import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconSociaalZorgWelzijn$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M35 16H12.95C11.32 16 10 17.35 10 19.01L10.04 30H13v12h9V20h4v22h9V30h3V19c0-1.66-1.34-3-3-3Zm-.35 4.99-.16.17L33 22.72l-1.49-1.56-.16-.17c-.33-.35-.46-.88-.24-1.31.35-.71 1.2-.81 1.69-.3l.2.21.2-.21c.49-.51 1.34-.42 1.69.3.21.43.09.96-.24 1.31ZM18.99 6.27h-.02C18.51 6.1 18.02 6 17.5 6c-.47 0-.92.09-1.35.23-.03 0-.05.02-.08.02-1.78.6-3.07 2.26-3.07 4.25 0 2.49 2.01 4.5 4.5 4.5s4.5-2.01 4.5-4.5c0-1.96-1.26-3.61-3.01-4.23ZM17.5 13a2.5 2.5 0 0 1-2.5-2.5c0-.21.03-.41.08-.6.3.07.61.11.93.11 1.25 0 2.37-.52 3.18-1.34.49.46.81 1.1.81 1.83a2.5 2.5 0 0 1-2.5 2.5Zm14.49-6.73h-.02C31.51 6.1 31.02 6 30.5 6c-.47 0-.92.09-1.35.23-.03 0-.05.02-.08.02-1.78.6-3.07 2.26-3.07 4.25 0 2.49 2.01 4.5 4.5 4.5s4.5-2.01 4.5-4.5c0-1.96-1.26-3.61-3.01-4.23ZM30.5 13a2.5 2.5 0 0 1-2.5-2.5c0-.21.03-.41.08-.6.3.07.61.11.93.11 1.25 0 2.37-.52 3.18-1.34.49.46.81 1.1.81 1.83a2.5 2.5 0 0 1-2.5 2.5Z" }))));
  }
}, [1, "opengemeenten-icon-sociaal-zorg-welzijn"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-sociaal-zorg-welzijn", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-sociaal-zorg-welzijn":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconSociaalZorgWelzijn$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconSociaalZorgWelzijn = OpengemeentenIconSociaalZorgWelzijn$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconSociaalZorgWelzijn, defineCustomElement };
