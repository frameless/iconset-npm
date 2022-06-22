import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';

const UtrechtIconRecreatie$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("utrecht-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { "fill-rule": "evenodd", d: "M27.134 26.321c1.198-1.279 1.626-3.036 1.241-4.518.883-.794 1.453-2.046 1.453-3.458 0-1.43-.586-2.699-1.49-3.49a.059.059 0 0 0-.002-.015c.025-.208.038-.418.038-.633 0-2.25-1.213-5.758-5.942-6.07-.118-.007-.235.016-.349.034-.996-2.59-8.082-3.546-9.084 1.04a4.46 4.46 0 0 0-.798-.074c-2.622 0-4.748 2.27-4.748 5.07 0 .215.014.425.038.633 0 .004 0 .01-.002.014C6.586 15.646 6 16.915 6 18.345c0 1.412.571 2.664 1.453 3.458-.384 1.482.043 3.24 1.242 4.518 1.36 1.451 5.635 1.844 7.117 1.11l-.12 2.216-2.145-1.006-1.273 2.717 3.24 1.521-.5 9.121h6.073l-1.07-14.569c1.48.734 5.757.341 7.117-1.11m2.426 9.25.595-2.142h3.77l.483 2.141H29.56zm12.316 0h-4.538l-.482-2.142h2.175V30.57h-14.3v2.86h2.455l-.595 2.14h-4.706v2.86h3.912L24.806 42h2.968l.992-3.57h6.286l.805 3.57h2.93l-.804-3.57h3.893v-2.86z" }))));
  }
}, [1, "utrecht-icon-recreatie"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-recreatie", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-recreatie":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconRecreatie$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconRecreatie = UtrechtIconRecreatie$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconRecreatie, defineCustomElement };
