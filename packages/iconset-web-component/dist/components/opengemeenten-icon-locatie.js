import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconLocatie$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M42.03 24 36 39H5.98l6.04-15h3.87c.5 1.04 1.05 2.05 1.61 3H14l-3.51 9H24.1l.06.07.06-.07H34l3.51-9h-6.68c.56-.95 1.12-1.96 1.61-3h9.59Zm-16.87 7.49c.23-.29 5.66-7.05 6.77-12.37.05-.19.08-.38.13-.65l.02-.14c.06-.42.09-.78.09-1.13 0-4.51-3.67-8.17-8.17-8.17s-8.17 3.67-8.17 8.17c0 .35.03.71.08 1.13l.03.22c.03.19.07.39.11.53 1.12 5.36 6.55 12.12 6.78 12.41L24 32.93l1.17-1.44Zm4-14.29c0 .24-.02.48-.06.72l-.02.13c-.02.12-.05.25-.08.41-.68 3.26-3.42 7.39-5.01 9.59-1.59-2.2-4.33-6.34-5.02-9.64-.03-.12-.05-.24-.07-.37l-.02-.13c-.03-.24-.06-.47-.06-.72 0-2.85 2.32-5.17 5.17-5.17s5.17 2.32 5.17 5.17ZM23.99 14c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3Z" }))));
  }
}, [1, "opengemeenten-icon-locatie"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-locatie", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-locatie":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconLocatie$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconLocatie = OpengemeentenIconLocatie$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconLocatie, defineCustomElement };
