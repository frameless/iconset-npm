import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';

const UtrechtIconNieuwsbrief$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("utrecht-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { "fill-rule": "evenodd", d: "m40.874 18.657-4.176-3.34-.036-5.484h-6.818l-3.97-3.176a2.996 2.996 0 0 0-3.748 0l-3.97 3.176h-6.994l.036 5.567-4.072 3.257A3.001 3.001 0 0 0 6 21v18a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V21c0-.911-.414-1.773-1.126-2.343zM14.5 24H24v-7.5h-9.5V24zm12-6h7v-1.5h-7V18zm0 3h7v-1.5h-7V21zm0 3h7v-1.5h-7V24zm-12-9h19v-1.5h-19V15zM39 38.593l-10.302-8.251L39 21.832v16.76zM9.846 39l13.56-10.176a.95.95 0 0 1 1.145.012L37.243 39H9.846zM9 21.832l10.169 8.4L9 37.865V21.832zm2.224-2.61.017 2.624-1.623-1.341 1.606-1.283zm23.947-7.89.078 11.76-7.68 6.346-2.136-1.711a2.372 2.372 0 0 0-2.874-.038l-2.225 1.669-7.585-6.266-.078-11.76h22.5zM24 9l1.041.833h-2.082L24 9z" }))));
  }
}, [1, "utrecht-icon-nieuwsbrief"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-nieuwsbrief", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-nieuwsbrief":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconNieuwsbrief$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconNieuwsbrief = UtrechtIconNieuwsbrief$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconNieuwsbrief, defineCustomElement };
