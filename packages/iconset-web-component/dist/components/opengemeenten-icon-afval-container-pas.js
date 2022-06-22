import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconAfvalContainerPas$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M14.47 33.44h.04c.96 0 1.74-.78 1.74-1.75s-.78-1.75-1.74-1.75h-.04c-.96 0-1.74.78-1.74 1.75s.78 1.75 1.74 1.75ZM16.03 20c0-3.87 3.15-7.01 7.01-7.01h6.21c3.87.12 6.76 3.28 6.76 7.46v13.56H32v3h7V20.44c.01-5.77-4.2-10.46-9.97-10.46V7.46c0-.81-.67-1.46-1.51-1.46h-2.94c-.86 0-1.54.66-1.54 1.49v2.49c-5.53 0-10.01 4.48-10.01 10.01v3h3v-3Zm9.02-12.02H27v2h-1.95v-2ZM14.51 34.32h-.04c-1.16 0-3.47.59-3.47 1.75v.88h6.99v-.88c0-1.17-2.31-1.75-3.47-1.75Z" }), h("path", { d: "M31.03 16.01h-9.94l-1 6h11.94l-1-6zm-4.07 8.97H9c-1.68 0-3.04 1.35-3.04 3.01v10.97c0 1.66 1.37 3.02 3.05 3.02h17.97c1.67 0 3.04-1.35 3.04-3.01V28c0-1.66-1.37-3.02-3.05-3.02Zm-.03 13.99-17.94-.02.04-10.98h17.89l.05.02-.04 10.98Zm5.09.04c0 1.13-.4 2.16-1.05 3h11.06v-3H32.02Z" }), h("path", { d: "M20.06 35.08h-.04v1.88h3.95v-1.88h-3.91zm0-4.01h-.04v1.88H25v-1.88h-4.94z" }))));
  }
}, [1, "opengemeenten-icon-afval-container-pas"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-afval-container-pas", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-afval-container-pas":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconAfvalContainerPas$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconAfvalContainerPas = OpengemeentenIconAfvalContainerPas$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconAfvalContainerPas, defineCustomElement };
