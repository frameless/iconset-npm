import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconTrouwenEnGeregistreerdPartnerschap$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? (h("title", { id: id }, this.iconTitle)) : (h("title", { id: id }, "Trouwen En Geregistreerd Partnerschap")), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M25.96 31.165c-2.375-1.51-3.96-4.156-3.96-7.173 0-.224.032-.44.05-.66C24.42 24.843 26 27.489 26 30.5c0 .226-.021.445-.04.665zm5.386-18.63c-.281-.02-.561-.043-.846-.043-.284 0-.559.035-.837.055l-1.871-2.618.558-.93h4.3l.558.93-1.862 2.606zm3.186.7l1.689-2.362a1.503 1.503 0 0 0 .065-1.645l-1.5-2.5A1.5 1.5 0 0 0 33.5 6h-6a1.5 1.5 0 0 0-1.286.728l-1.5 2.5a1.503 1.503 0 0 0 .065 1.645l1.693 2.369a11.56 11.56 0 0 0-5.724 4.684c1.005.26 1.963.633 2.858 1.113 1.545-2.144 4.056-3.547 6.894-3.547 4.687 0 8.5 3.813 8.5 8.5 0 4.687-3.813 8.5-8.5 8.5a8.565 8.565 0 0 1-1.66-.165c.097-.597.16-1.204.16-1.827C29 24.159 23.841 19 17.5 19S6 24.159 6 30.5C6 36.842 11.159 42 17.5 42c4.115 0 7.721-2.18 9.754-5.437a12.862 12.862 0 0 1-2.857-1.114c-1.544 2.146-4.057 3.55-6.897 3.55-4.687 0-8.5-3.812-8.5-8.5 0-4.686 3.813-8.5 8.5-8.5.571 0 1.128.06 1.668.168A11.097 11.097 0 0 0 19 23.992c0 6.34 5.159 11.5 11.5 11.5s11.5-5.16 11.5-11.5c0-4.921-3.112-9.118-7.468-10.756z" }))));
  }
}, [1, "utrecht-icon-trouwen-en-geregistreerd-partnerschap", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-trouwen-en-geregistreerd-partnerschap", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-trouwen-en-geregistreerd-partnerschap":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconTrouwenEnGeregistreerdPartnerschap$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconTrouwenEnGeregistreerdPartnerschap = UtrechtIconTrouwenEnGeregistreerdPartnerschap$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconTrouwenEnGeregistreerdPartnerschap, defineCustomElement };
