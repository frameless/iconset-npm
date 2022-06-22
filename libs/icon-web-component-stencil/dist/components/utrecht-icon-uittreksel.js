import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';

const UtrechtIconUittreksel$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("utrecht-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { "fill-rule": "evenodd", d: "M16 29h9v-1.5h-9V29zm0-4.5h14V23H16v1.5zm0-4.5h14v-1.5H16V20zm0-4.5h14V14H16v1.5zm1 21.531L14.977 35H17v2.031zm3-3.531a1.5 1.5 0 0 0-1.5-1.5H13V9h20v16h3V9c0-1.654-1.346-3-3-3H13c-1.654 0-3 1.346-3 3v24.045c0 .781.289 1.501.812 2.025l6.061 6.085a2.883 2.883 0 0 0 2.025.845H29v-3h-9v-5.5zm14.5-1c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zM39 31c0-2.481-2.019-4.5-4.5-4.5A4.505 4.505 0 0 0 30 31c0 1.791 1.059 3.328 2.577 4.052l-2 5.999 2.846.949 1.077-3.231L35.577 42l2.846-.949-2-5.999C37.941 34.328 39 32.791 39 31z" }))));
  }
}, [1, "utrecht-icon-uittreksel"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-uittreksel", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-uittreksel":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconUittreksel$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconUittreksel = UtrechtIconUittreksel$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconUittreksel, defineCustomElement };
