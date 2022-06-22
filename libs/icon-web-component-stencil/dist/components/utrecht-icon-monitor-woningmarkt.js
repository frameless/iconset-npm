import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconMonitorWoningmarkt$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Monitor Woningmarkt"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M18 28.404a1.5 1.5 0 011.5 1.5v10.5a1.5 1.5 0 01-1.5 1.5H7.5a1.5 1.5 0 01-1.5-1.5v-10.5a1.5 1.5 0 011.5-1.5zM28.032 6c4.963 0 9 4.037 9 9 0 3.569-2.092 6.65-5.11 8.104v1.88l9.93 7.839-1.86 2.355-.943-.744v7.456H24.035v-7.281l-.653.544-1.92-2.305 2.573-2.145V26h3v2.203l3.887-3.24v-1.447a8.932 8.932 0 01-7.154-.592l-2.319 1.388-2.027-.812v2.024l-2.306 1.379h-1.689l-1.005-.403v.403h-2.5v-1.686L14.9 23.43l1.435.718.587-.375v-1.556L19.9 20.43l1.266.634 2.648-1.692.807.56A5.953 5.953 0 0028.032 21c1.047 0 2.032-.27 2.89-.744V16.49c-.419.316-.935.51-1.5.51a2.5 2.5 0 112.5-2.5v5.06a5.983 5.983 0 002.11-4.56c0-3.308-2.69-6-6-6s-6 2.692-6 6c0 .3.03.624.09.987l.167 1.012-13.257 7.856v2.048H6.04l-.008-3.757 13.012-7.711a8.033 8.033 0 01-.012-.435c0-4.963 4.037-9 9-9zm3.415 22.432l-4.412 3.677v6.78h9.014v-6.823l-4.602-3.634zm-14.892 7.416h-1.5v3h1.5v-3zm-6.036-1.508h-1.5v4.5h1.5v-4.5zm3.018-3.01h-1.5v7.5h1.5v-7.5z" }))));
  }
}, [1, "utrecht-icon-monitor-woningmarkt", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-monitor-woningmarkt", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-monitor-woningmarkt":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconMonitorWoningmarkt$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconMonitorWoningmarkt = UtrechtIconMonitorWoningmarkt$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconMonitorWoningmarkt, defineCustomElement };
