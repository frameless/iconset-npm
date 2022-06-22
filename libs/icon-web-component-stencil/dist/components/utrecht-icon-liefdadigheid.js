import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconLiefdadigheid$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Liefdadigheid"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M18.593 12.014c.82.647 1.7.986 2.907.986 2 0 4-1 4.5-3 0 1.822 1.708 3.153 3.478 3.436C29.254 16.265 26.885 18.5 24 18.5a5.505 5.505 0 0 1-5.5-5.5c0-.337.035-.666.093-.986M24 20c3.86 0 7-3.14 7-7s-3.14-7-7-7-7 3.14-7 7 3.14 7 7 7m5.537 7.833l-.304.32L27 30.5l-2.233-2.346-.305-.321a1.718 1.718 0 0 1 0-2.346 1.524 1.524 0 0 1 2.233 0l.305.32.304-.32a1.524 1.524 0 0 1 2.233 0 1.718 1.718 0 0 1 0 2.346M29 21.5H19c-2.812 0-5 2.189-5 5l.016 12.5H17v3h14v-3h2.984L34 26.5c0-2.811-2.189-5-5-5" }))));
  }
}, [1, "utrecht-icon-liefdadigheid", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-liefdadigheid", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-liefdadigheid":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconLiefdadigheid$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconLiefdadigheid = UtrechtIconLiefdadigheid$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconLiefdadigheid, defineCustomElement };
