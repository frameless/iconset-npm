import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconParticipatieUitvoering$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M19.18 31.68c.23.56.37 1.17.38 1.8.02 1.36-.52 2.59-1.39 3.46-1.91 1.91-10 2.93-10 2.93s1.02-8.09 2.93-10c.87-.87 2.1-1.41 3.46-1.39.64 0 1.24.15 1.8.38l-3.16 3.16.71-.71c-1.41 1.41-1.63 2.88-2.12 4.94 2.07-.5 3.52-.71 4.93-2.11l2.48-2.46Zm15.85-7.39-2.88 2.88 2.47 6.01-7.57 7.57-2.24-5.31-.48-1.45-1.62-1.62-7.07-7.07-1.62-1.62-6.76-2.73 7.57-7.57 6.01 2.47 2.86-2.86c8.91-8.91 16.11-4.81 16.11-4.81s4.11 7.22-4.77 16.1Zm-19.4-3.23 2.83-2.83-2.83-1.41-2.83 2.83 2.83 1.41Zm15.56 11.31-1.41-2.83-2.83 2.83 1.41 2.83 2.83-2.83Zm1.72-10.2c7.02-7.02 4.64-11.72 4.64-11.72s-4.72-2.35-11.74 4.67l-8.06 8.06 7.07 7.07 8.08-8.08Zm-4.97-5.78c-1.02 1.02-1.02 2.66 0 3.68s2.66 1.02 3.68 0a2.595 2.595 0 0 0 0-3.68 2.595 2.595 0 0 0-3.68 0Z" }))));
  }
}, [1, "opengemeenten-icon-participatie-uitvoering"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-participatie-uitvoering", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-participatie-uitvoering":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconParticipatieUitvoering$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconParticipatieUitvoering = OpengemeentenIconParticipatieUitvoering$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconParticipatieUitvoering, defineCustomElement };
