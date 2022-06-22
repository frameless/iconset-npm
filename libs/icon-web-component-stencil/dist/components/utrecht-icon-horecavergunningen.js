import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconHorecavergunningen$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Horecavergunningen"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M16 37.031v-2.03h-2.023L16 37.03zm3 1.97h8.5v3h-9.602a2.883 2.883 0 0 1-2.025-.846l-6.06-6.085C9.289 34.546 9 33.826 9 33.045V9c0-1.655 1.346-3 3-3h20c1.654 0 3 1.345 3 3v9.5h-3V9H12v23h5.5a1.5 1.5 0 0 1 1.5 1.5V39zm17.999-13l-.002-3H30l.001 3h6.998zM35 39h3v3h-9v-3h3v-6.182c-2.86-.68-4.998-3.249-4.999-6.314L26.999 20h12.997l.003 6.5C40 29.565 37.862 32.137 35 32.82V39zM21.974 20.363l2.655-5.974 2.742 1.22-4 9a1.5 1.5 0 0 1-1.36.89H22a1.5 1.5 0 0 1-1.362-.872l-3-6.5 2.724-1.257 1.612 3.493z" }))));
  }
}, [1, "utrecht-icon-horecavergunningen", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-horecavergunningen", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-horecavergunningen":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconHorecavergunningen$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconHorecavergunningen = UtrechtIconHorecavergunningen$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconHorecavergunningen, defineCustomElement };
