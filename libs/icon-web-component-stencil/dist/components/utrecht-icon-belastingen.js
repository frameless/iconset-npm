import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';

const UtrechtIconBelastingen$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("utrecht-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { "fill-rule": "evenodd", d: "M35.866 15.95 27.753 11h-6.438l-3.74 6.129 2.516 1.535-1.563 2.56-2.516-1.534-5.452 8.936 12.805 7.813 10.641-17.44 1.86-3.048zm6-6.45v8a1.5 1.5 0 0 1-1.5 1.5h-2.847L25.144 39.282a1.5 1.5 0 0 1-2.06.499L7.717 30.405a1.497 1.497 0 0 1-.505-2.048L17.865 11h-3l-5.037 8h-.463a1.5 1.5 0 0 1-1.5-1.5v-8a1.5 1.5 0 0 1 1.5-1.5h31a1.5 1.5 0 0 1 1.5 1.5zm-14.382 6.39-1.529 2.506s-.252-.111-.368-.181a3.79 3.79 0 0 1-.315-.221l1.612-2.642-.622-.611-1.6 2.62c-.714-.897-.803-2.02-.192-3.02.237-.39.52-.708.52-.708l-1.02-1.071s-.41.415-.75.973c-1.06 1.737-.764 3.853.555 5.279l-.478.786.725.442.396-.648s.22.163.336.234c.136.083.341.179.341.179l-.396.648.773.473.48-.786c1.956.6 3.852-.12 4.951-1.92a4.74 4.74 0 0 0 .573-1.396l-1.388-.516s-.123.56-.457 1.108c-.59.969-1.587 1.472-2.754 1.208l1.284-2.105-.677-.63zm-4.095 8.887 2.561 1.563-4.167 6.829-2.56-1.563 4.166-6.83z" }))));
  }
}, [1, "utrecht-icon-belastingen"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-belastingen", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-belastingen":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconBelastingen$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconBelastingen = UtrechtIconBelastingen$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconBelastingen, defineCustomElement };
