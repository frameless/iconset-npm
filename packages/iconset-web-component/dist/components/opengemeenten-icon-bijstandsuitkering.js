import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconBijstandsuitkering$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M42.01 9v3h-3v3h-3v-3h-3V9h3V6h3v3h3Zm0 17v8.01c0 1.1-.89 1.99-1.99 2h-1.01v2c0 2.21-1.79 3.99-3.99 3.99H8a2 2 0 0 1-2-2V19.99a2 2 0 0 1 2-2h11.85a6.002 6.002 0 0 1-5.71-7.3c.48-2.25 2.3-4.07 4.55-4.55C22.57 5.32 26 8.27 26 12c3.3 0 5.99 2.68 6 5.98h3c2.21 0 4 1.79 4 4V24h1a2 2 0 0 1 2 2Zm-19-8.01h6c0-1.65-1.35-2.98-3-2.98s-2.99 1.34-3 2.98ZM20.02 15c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3Zm15.99 21.01h-4.93c-1.66 0-3-1.34-3-3V27c0-1.66 1.34-3 3-3h4.93v-2.01c0-.55-.45-1-1-1H9V39h26.01c.55 0 .99-.44.99-.99v-2Zm3-9.01h-8.02v6.01h8.02V27Zm-5 4.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5Zm-10.96 1.85c-.59.56-1.44.83-2.42.83-1.36 0-2.57-.61-3.22-1.88h2.8l.71-1.53h-3.93c-.02-.12-.03-.33-.03-.64 0-.28.02-.47.03-.61h4.45l.73-1.51h-4.78c.64-1.34 1.91-1.97 3.25-1.97.85 0 1.6.19 2.17.61l.8-1.62c-.78-.54-1.76-.8-2.97-.8-2.33 0-4.59 1.34-5.43 3.77h-1.64v1.51h1.34c-.02.17-.03.35-.03.63 0 .23.02.47.03.63h-1.34v1.53h1.65c.83 2.4 3.04 3.72 5.39 3.72 1.39 0 2.57-.49 3.39-1.18l-.97-1.5Z" }))));
  }
}, [1, "opengemeenten-icon-bijstandsuitkering"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-bijstandsuitkering", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-bijstandsuitkering":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconBijstandsuitkering$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconBijstandsuitkering = OpengemeentenIconBijstandsuitkering$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconBijstandsuitkering, defineCustomElement };