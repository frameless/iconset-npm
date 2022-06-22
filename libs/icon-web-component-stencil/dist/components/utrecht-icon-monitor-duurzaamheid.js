import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconMonitorDuurzaamheid$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Monitor Duurzaamheid"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M29.437 27.26a4.525 4.525 0 013.184-.13c.097.033.19.075.277.125L37.48 29.9h4.597v3h-5c-.263 0-.522-.069-.75-.2l-4.774-2.758a1.526 1.526 0 00-.936.075l-7.996 3.478 1.127.563c.286.144.822.116 1.303-.062l4.97-1.989 1.113 2.786-5 2c-.64.24-1.284.36-1.898.36a4.16 4.16 0 01-1.38-.253h-5.779c-.165 0-.329-.027-.485-.08l-5.506-1.885a1.515 1.515 0 00-1.86.755l8.137 3.21h9.16c.524 0 1.041-.092 1.534-.27l4.012-1.459a4.475 4.475 0 011.537-.27h8.471v3h-8.47c-.177 0-.349.03-.514.09l-4.01 1.457a7.474 7.474 0 01-2.56.451l-9.446.001a1.5 1.5 0 01-.55-.104l-8.87-3.5a2.516 2.516 0 01-1.42-3.202l.124-.33c.854-2.278 3.416-3.469 5.711-2.663l5.255 1.8h2.324a2.973 2.973 0 011.774-3.156zM12.17 21c.105 4.516 3.545 8.217 7.95 8.73a4.424 4.424 0 00-1.756 2.56h-.636c-4.89-1.46-8.466-5.948-8.56-11.29zm12.413-6.133c.66-.064 1.185.08 1.617.59.26.306.474.668.774.92.96.81.973 1.722.564 2.873-.611 1.723-.895 2.027-2.644 2.032-1.348.005-2.225 1.193-1.892 2.599.19.8.07 1.503-.456 2.13-.361.43-.725.863-1.046 1.325-.351.504-.67.49-1.085.082-.4-.391-.843-.733-1.274-1.088-.57-.47-.942-1.066-.847-1.83.159-1.27-.103-2.414-.583-3.5H18c1.654 0 3-1.346 3-3v-2.902a65.83 65.83 0 003.582-.231zm-3.416-6.085c6.632 0 12.007 5.375 12.007 12.007a11.96 11.96 0 01-.909 4.578 6.023 6.023 0 00-3.297.399l-.434.188a8.945 8.945 0 001.64-5.165c0-4.967-4.04-9.007-9.007-9.007-.056 0-.11.005-.166.008v-3zM18 6a1.5 1.5 0 011.5 1.5V18a1.5 1.5 0 01-1.5 1.5H7.5A1.5 1.5 0 016 18V7.5A1.5 1.5 0 017.5 6zm-1.445 7.002h-1.548v3.48h1.548v-3.48zm-6.037-1.066h-1.5v4.5h1.5v-4.5zm3.019-3.01h-1.5v7.5h1.5v-7.5z" }))));
  }
}, [1, "utrecht-icon-monitor-duurzaamheid", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-monitor-duurzaamheid", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-monitor-duurzaamheid":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconMonitorDuurzaamheid$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconMonitorDuurzaamheid = UtrechtIconMonitorDuurzaamheid$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconMonitorDuurzaamheid, defineCustomElement };
