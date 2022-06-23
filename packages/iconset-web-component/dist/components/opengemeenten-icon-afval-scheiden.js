import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconAfvalScheiden$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M11.31 40.49c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5Zm10.53-1.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5Zm11.94 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5ZM8.21 37.96c.46-.29 1.01-.47 1.6-.47 1.65 0 3 1.35 3 3 0 .55-.16 1.06-.42 1.5h1.97c.78 0 1.43-.6 1.49-1.38l1.06-12.62H7.93l.28 9.97Zm20.76-10.92h.98v1.95h-1l-1.06 11.62c-.06.78-.71 1.38-1.49 1.38h-1.97c.26-.44.42-.95.42-1.5 0-1.65-1.35-3-3-3-.59 0-1.13.18-1.6.47l-.28-8.94h-.02v-1.98c.01-.56.47-1.02 1.04-1.02h6.96c.56 0 1.02.46 1.02 1.02Zm-13.42-7.82-7.76 7.8-1.41-1.42h.02c-.4-.39-.4-1.04 0-1.44l4.92-4.92c.4-.4 1.05-.4 1.45 0l1.4-1.4 1.38 1.38Zm26.34 7.82v1.95h-1l-1.06 11.62c-.06.78-.71 1.38-1.49 1.38h-1.97c.26-.44.42-.95.42-1.5 0-1.65-1.35-3-3-3-.59 0-1.13.18-1.6.47l-.28-8.94h-.02v-1.98c.01-.56.47-1.02 1.04-1.02h6.96c.56 0 1.02.46 1.02 1.02h.98ZM20.9 20.55c-.01 3.3-2.63 4.88-4.01 5.25-.03 0-1.1.37-1.1.37l-.92-2.82s1.11-.38 1.24-.45c.16-.08 1.8-.59 1.8-2.39 0-3.09 2.34-4.38 3.6-4.38l5.34-.02c1.7 0 3.02 1.58 3.02 3.35v4.56h-8.9v-3.81c-.07.17-.08.33-.08.33Zm5.56-14.28h-.02c-.46-.17-.95-.27-1.47-.27-.47 0-.92.09-1.35.23-.03 0-.05.02-.08.02-1.78.6-3.07 2.26-3.07 4.25 0 2.49 2.01 4.5 4.5 4.5s4.5-2.01 4.5-4.5c0-1.96-1.26-3.61-3.01-4.23ZM24.97 13a2.5 2.5 0 0 1-2.5-2.5c0-.21.03-.41.08-.6.3.07.61.11.93.11 1.25 0 2.37-.52 3.18-1.34.49.46.81 1.1.81 1.83a2.5 2.5 0 0 1-2.5 2.5Z" }))));
  }
}, [1, "opengemeenten-icon-afval-scheiden"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-afval-scheiden", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-afval-scheiden":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconAfvalScheiden$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconAfvalScheiden = OpengemeentenIconAfvalScheiden$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconAfvalScheiden, defineCustomElement };
