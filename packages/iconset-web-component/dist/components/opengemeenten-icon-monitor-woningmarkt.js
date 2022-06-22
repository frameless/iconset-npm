import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconMonitorWoningmarkt$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M24 13.64V9.38c1.65-2.04 4.17-3.36 7-3.36 4.96 0 9 4.04 9 9 0 3.52-2.03 6.56-4.98 8.04v-3.62c1.21-1.1 1.98-2.66 1.98-4.42 0-3.31-2.69-6-6-6s-6 2.69-6 6c0 .3.03.62.09.99l.17 1.01-1.28.76c0-.1.03-.2.03-.3v-3.84Zm6.01 22.33h4v-3h-4v3Zm10.02-.82-1.04-.81.03 7.63h-14v-7.59l-1.02.8-1.82-2.38 8.83-6.86v-1.93c-.68 0-1.35-.09-2-.23s-.07-.01-.1-.02c-.19-.04-.37-.11-.55-.16-.2-.06-.4-.12-.6-.19-.02 0-.05-.02-.07-.03-.32-.13-.64-.26-.94-.42l-2.89 1.78-1.82-.73v1.85l-2.64 1.62-2.36-.94v2.4l-2.91 1.79-5.12-2.2v-5.34l3.67-2.18h5.88L12 24.9v1.66l1.88.8 1.15-.71v-1.24l2.01-1.19 1.07.54 1.94-1.19v-1.11l2.01-1.19.95.48.02-.02 3.76-2.32.81.56c.24.17.5.32.76.45.06.03.13.05.19.08.77.35 1.6.54 2.46.54v-4.18a2.522 2.522 0 0 1 .99-4.84c1.39 0 2.52 1.13 2.52 2.52 0 1.03-.62 1.91-1.51 2.3v3.86h.01v3.11h-.01v2.15l8.84 6.83-1.81 2.39Zm-4.02-3.18-4-3-4 3v7h8v-7ZM21.99 7.52v9.97c.01.83-.66 1.5-1.5 1.5H7.52c-.83 0-1.51-.67-1.51-1.5V7.52c-.01-.83.66-1.5 1.5-1.5h12.98c.83 0 1.51.67 1.51 1.5ZM11 12H9v4h2v-4Zm4 4-.02-7.01h-2V16h2.01Zm4-3h-2v3h2v-3Z" }))));
  }
}, [1, "opengemeenten-icon-monitor-woningmarkt"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-monitor-woningmarkt", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-monitor-woningmarkt":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconMonitorWoningmarkt$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconMonitorWoningmarkt = OpengemeentenIconMonitorWoningmarkt$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconMonitorWoningmarkt, defineCustomElement };
