import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconMonitorVirus$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Monitor Virus"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M24.016 6a4.027 4.027 0 014.027 4.026 4.02 4.02 0 01-2.525 3.73v2.365a8.074 8.074 0 013.015 1.233l2.547-2.548a2.946 2.946 0 01-.123-.808 3.002 3.002 0 116.006 0 3.003 3.003 0 01-3.003 3.004c-.253 0-.495-.04-.729-.099l-2.56 2.56a8.026 8.026 0 011.293 3.051h4.453a2.99 2.99 0 012.607-1.539 3.004 3.004 0 010 6.007 2.99 2.99 0 01-2.567-1.464h-4.476a8.074 8.074 0 01-1.275 3.115l1.723 1.724a3.94 3.94 0 013.285.06 3.968 3.968 0 11-3.458 7.144c-1.894-.917-2.712-3.139-1.93-5.06l-1.746-1.747a8.03 8.03 0 01-3.062 1.27v4.948a2.744 2.744 0 01.976 3.492 2.754 2.754 0 11-4.957-2.399 2.72 2.72 0 01.978-1.099v-4.95A8.24 8.24 0 0121 31.566v-1.603c0-1.654-1.346-3-3-3h-1.526a7.925 7.925 0 01-.413-1.446h-2.383a3.975 3.975 0 01-1.04 1.446H7.5c-.038 0-.075.01-.114.012a3.966 3.966 0 01-1.381-2.997 3.986 3.986 0 017.697-1.465h2.386a8.079 8.079 0 011.251-3l-3.551-3.55a2.973 2.973 0 01-2.023-.2 3 3 0 01-1.393-4.01 2.999 2.999 0 014.008-1.393 2.994 2.994 0 011.573 3.52l3.509 3.51a8.028 8.028 0 013.053-1.27v-2.365a4.02 4.02 0 01-2.525-3.73A4.027 4.027 0 0124.016 6zM18 28.464a1.5 1.5 0 011.5 1.5v10.5a1.5 1.5 0 01-1.5 1.5H7.5a1.5 1.5 0 01-1.5-1.5v-10.5a1.5 1.5 0 011.5-1.5zm-1.445 7.556h-1.5v3h1.5v-3zm-6.037-1.51h-1.5v4.5h1.5v-4.5zm3.019-3.01h-1.5v7.5h1.5v-7.5z" }))));
  }
}, [1, "utrecht-icon-monitor-virus", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-monitor-virus", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-monitor-virus":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconMonitorVirus$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconMonitorVirus = UtrechtIconMonitorVirus$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconMonitorVirus, defineCustomElement };
