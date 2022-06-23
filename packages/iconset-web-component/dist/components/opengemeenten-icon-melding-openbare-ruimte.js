import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconMeldingOpenbareRuimte$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M20 18.89h3V12h-3v6.89Zm0 3.61c0 .44.14.8.42 1.08.28.28.64.42 1.08.42s.8-.14 1.08-.42c.28-.28.42-.64.42-1.08s-.14-.8-.42-1.08c-.28-.28-.64-.42-1.08-.42s-.8.14-1.08.42c-.28.28-.42.64-.42 1.08ZM39 30c0 .28-.03.56-.06.83 0 .05-.02.1-.02.16-.02.14-.05.28-.09.42C37.88 35.97 33 42 33 42s-4.87-6.03-5.83-10.59l-.09-.42c0-.05-.02-.1-.02-.16A5.69 5.69 0 0 1 27 30c0-3.31 2.69-6 6-6s6 2.69 6 6Zm-3 0c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3Zm-10.99-.02h-3.76l-8.24 7.41v-7.44c-2.25-.25-4-2.16-4-4.47V10.5c0-2.49 2.01-4.5 4.5-4.5H29.5c2.49 0 4.5 2.01 4.5 4.5v11.39c-.33-.04-.66-.07-1-.07-.69 0-1.36.1-2 .26V10.5c0-.83-.67-1.5-1.5-1.5h-16c-.83 0-1.5.67-1.5 1.5v14.98c0 .83.67 1.5 1.5 1.5H16v4l4-4h5.53c-.34.88-.53 1.84-.53 2.84v.16Z" }))));
  }
}, [1, "opengemeenten-icon-melding-openbare-ruimte"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-melding-openbare-ruimte", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-melding-openbare-ruimte":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconMeldingOpenbareRuimte$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconMeldingOpenbareRuimte = OpengemeentenIconMeldingOpenbareRuimte$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconMeldingOpenbareRuimte, defineCustomElement };
