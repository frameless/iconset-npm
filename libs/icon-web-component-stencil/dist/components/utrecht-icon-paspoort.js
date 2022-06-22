import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconPaspoort$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Paspoort"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M19 35.997h10v-1.5H19v1.5zm10-18.5h1l-.5 3h-1v1h1v1l-1 2-3 .3v.7l1.5 1.331v1.427l-1 .742v.5l1 .5-.5 1H25v-1l.5-1.5-1.5-.5-.5-.725h-2L20 28.497l-2-1.5.5-1 1.5.5 1-1-.988-.559-.012-.94 2-5 1.5.5s-.122.732-.088.8c.033.067.504.954.504.954l-.605 1.05 1.648-.832.47-1.91-1.21-.217.201-1.616.908-.908 3.172-.322.5 1zm4 20c0 .827-.673 1.5-1.5 1.5H15v-26h16.5c.827 0 1.5.673 1.5 1.5v23zm-3.34-29.98c.252-.056.553.027.785.214.194.156.305.357.305.552v1.714H18.765l10.895-2.48zm2.59 2.556v-1.79c0-.65-.315-1.278-.864-1.72-.588-.473-1.354-.665-2.053-.51L12.006 9.996H12v32.001h19.5c2.481 0 4.5-2.02 4.5-4.5v-23c0-2.226-1.626-4.065-3.75-4.425z" }))));
  }
}, [1, "utrecht-icon-paspoort", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-paspoort", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-paspoort":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconPaspoort$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconPaspoort = UtrechtIconPaspoort$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconPaspoort, defineCustomElement };
