import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';

const UtrechtIconBladerenOpruimen$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("utrecht-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { "fill-rule": "evenodd", d: "M31.197 33.609c-3.86 3.313-10.505 4.373-16.005.214 1.282-2.014 6.075-8.804 14.26-12.078l-.556-1.393c-7.977 3.191-12.782 9.372-14.573 12.047-1.513-3.531-1.792-6.971-.775-10.021.947-2.846 2.998-5.146 5.774-6.477 3.986-1.91 6.896-2.212 9.977-2.531 2.933-.304 5.949-.616 9.79-2.346-.387 6.263-2.22 17.714-7.892 22.585zm8.749-26.372c-4.455 2.475-7.613 2.803-10.957 3.149-3.199.331-6.508.675-10.963 2.81-3.516 1.684-6.118 4.609-7.325 8.234-1.316 3.954-.899 8.355 1.16 12.788-2.209 2.801-4.268 6.68-4.861 7.83h3.402c.816-1.487 2.102-3.694 3.441-5.486 2.951 2.087 6.151 2.986 9.209 2.986 3.858 0 7.489-1.421 10.099-3.664 7.137-6.128 9.023-20.56 9.023-27.336V6l-2.228 1.237z" }))));
  }
}, [1, "utrecht-icon-bladeren-opruimen"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-bladeren-opruimen", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-bladeren-opruimen":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconBladerenOpruimen$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconBladerenOpruimen = UtrechtIconBladerenOpruimen$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconBladerenOpruimen, defineCustomElement };
