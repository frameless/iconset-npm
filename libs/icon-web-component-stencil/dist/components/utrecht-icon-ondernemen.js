import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconOndernemen$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Ondernemen"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M19.462 34.626c-.008.013-.02.022-.026.035-.023.037-.036.077-.055.116-.014.016-.028.043-.04.055a.576.576 0 0 1-.407.17h-.348a.578.578 0 0 1-.577-.574l-.01-2.846a.578.578 0 0 1 .575-.58h.347c.319 0 .578.258.579.575l.009 2.846c0 .082-.024.143-.047.203zM14.467 32h-.422a.537.537 0 0 1-.54-.537l-.007-1.947.002-.015v-.726a.538.538 0 0 1 .534-.523l.42-.001h.002a.537.537 0 0 1 .54.538l.009 2.669a.54.54 0 0 1-.538.542zM10.5 28.765c0 .013-.004.026-.004.039l.002.706a.499.499 0 0 1-.498.492h-.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5v2.263zm29.325-4.542l-1.03-.624L42 22.798v-3.092l-6.206 1.55a1.49 1.49 0 0 1-1.1-.147l-6.355-3.574a1.517 1.517 0 0 1-.498-.455l-1.857-2.687a1.5 1.5 0 0 0-1.656-.587l-6.122 1.793c-.644.175-1.335-.103-1.635-.596l-.058-.112 8.917-4.797c.329-.175 1.26-.108 1.829.212l4.353 2.476c.993.558 2.15.72 3.297.444l7.09-1.903V8.217l-7.83 2.102a1.49 1.49 0 0 1-1.08-.148l-4.354-2.476c-1.25-.703-3.267-1.015-4.717-.248l-1.162.625-10.711 1.362a1.53 1.53 0 0 1-.778-.134L6 7.01v3.262l4.167 1.777a4.486 4.486 0 0 0 1.843.389c.153 0 .308-.008.466-.023l3.02-.384-1.707.918a1.5 1.5 0 0 0-.62 2.012l.785 1.506a4.522 4.522 0 0 0 5.068 2.019l5.11-1.497 1.24 1.795c.386.56.903 1.03 1.496 1.365l6.357 3.575c.173.097.35.182.533.255l-.034.057 4.55 2.755c.698.42.93 1.324.528 2.029l-.02.033a1.484 1.484 0 0 1-.923.68 1.48 1.48 0 0 1-1.132-.17l-1.261-.762c-.013-.008-.024-.02-.036-.027l-5.998-3.633a1.5 1.5 0 0 0-1.555 2.566l1.299.787-.002.004 4.72 2.859a1.49 1.49 0 0 1 .495 2.044l-.017.028a1.502 1.502 0 0 1-2.04.487l-1.625-.985c-.042-.026-.075-.061-.117-.086-.04-.024-.082-.04-.122-.06l-4.135-2.502a1.5 1.5 0 0 0-1.555 2.566l4.318 2.615c.309.208.537.509.628.874a1.49 1.49 0 0 1-.172 1.135l-.017.028a1.498 1.498 0 0 1-2.04.487l-5.017-3.04c.009-.111.03-.22.03-.334l-.008-2.846a3.582 3.582 0 0 0-3.577-3.566h-.357a3.587 3.587 0 0 0-.644.068 3.519 3.519 0 0 0-.97-1.79 3.515 3.515 0 0 0-2.496-1.028h-.431a3.54 3.54 0 0 0-.74.084A3.494 3.494 0 0 0 10 23.002h-.5c-1.93 0-3.5 1.57-3.5 3.5v3c0 1.93 1.57 3.5 3.5 3.5h.5c.28 0 .55-.042.814-.105a3.517 3.517 0 0 0 3.231 2.105h.01l.422-.001c.2-.001.393-.03.585-.062.252 1.729 1.729 3.064 3.523 3.064h.012l.346-.001a3.55 3.55 0 0 0 2.038-.651l4.962 3.005a4.502 4.502 0 0 0 6.177-1.532l.069-.117a4.457 4.457 0 0 0 .548-1.803c.12.01.239.024.358.024a4.503 4.503 0 0 0 3.862-2.176l.068-.118a4.434 4.434 0 0 0 .559-2.06 4.468 4.468 0 0 0 3.711-2.081l.06-.096a4.506 4.506 0 0 0-1.53-6.174z" }))));
  }
}, [1, "utrecht-icon-ondernemen", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-ondernemen", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-ondernemen":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconOndernemen$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconOndernemen = UtrechtIconOndernemen$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconOndernemen, defineCustomElement };