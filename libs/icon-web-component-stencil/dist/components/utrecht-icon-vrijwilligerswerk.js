import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconVrijwilligerswerk$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Vrijwilligerswerk"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M18.747 39.11L19.23 42h3.042l-.567-3.386a7.557 7.557 0 0 0-1.297-3.123l-7.2-9.876a1.499 1.499 0 0 0-.155-.182L9.07 21.484a.368.368 0 0 1 .544-.489c.032.028.065.056.099.083l4.636 3.548a39.734 39.734 0 0 1 2.71-1.756l-5.21-8.289a.597.597 0 0 1-.058-.459.601.601 0 0 1 .284-.368.597.597 0 0 1 .783.161l5.557 8.187c.979-.529 1.92-.99 2.8-1.384L18.374 9.74a.605.605 0 0 1 .444-.722c.319-.078.648.114.743.466l3.134 10.554.625-.186a34.11 34.11 0 0 1 3.2-1.04l.358-7.783a.56.56 0 0 1 1.12.024c.008 1.644.194 4.438.358 6.904.112 1.676.218 3.26.234 4.03a2.795 2.795 0 0 0 1.459 2.411 2.806 2.806 0 0 0 2.823-.052l4.532-2.718c.604-.206.912-.067 1.34.338L33.1 28.09a7.475 7.475 0 0 0-1.753 6.932l1.775 6.98h3.096l-1.964-7.72a4.48 4.48 0 0 1 1.052-4.158l6.162-6.692a2.333 2.333 0 0 0-.143-3.124l-.12-.12c-.684-.707-2.286-2.362-4.99-1.32a1.436 1.436 0 0 0-.232.113l-4.403 2.642c-.032-.879-.125-2.276-.23-3.866-.162-2.42-.345-5.167-.352-6.717a3.565 3.565 0 0 0-3.562-3.54 3.564 3.564 0 0 0-3.555 3.378l-.104 2.267-1.331-4.478c-.51-1.885-2.463-3.034-4.356-2.559-1.915.48-3.076 2.362-2.633 4.336l.82 3.165-.948-1.396a3.589 3.589 0 0 0-4.743-1.062 3.582 3.582 0 0 0-1.691 2.187c-.252.93-.127 1.903.385 2.79l1.244 1.98a3.361 3.361 0 0 0-3.54.777 3.375 3.375 0 0 0-.148 4.605c.023.025.046.051.07.075l3.95 3.915 7.119 9.766c.393.552.66 1.197.772 1.865m8.94-14.29a2.812 2.812 0 0 1 0 3.953L23 33.5l-4.688-4.727a2.814 2.814 0 0 1 0-3.954 2.755 2.755 0 0 1 3.922 0l.766.772.767-.772a2.754 2.754 0 0 1 3.92 0" }))));
  }
}, [1, "utrecht-icon-vrijwilligerswerk", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-vrijwilligerswerk", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-vrijwilligerswerk":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconVrijwilligerswerk$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconVrijwilligerswerk = UtrechtIconVrijwilligerswerk$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconVrijwilligerswerk, defineCustomElement };