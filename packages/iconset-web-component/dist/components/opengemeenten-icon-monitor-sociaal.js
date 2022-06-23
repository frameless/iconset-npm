import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconMonitorSociaal$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M36 19c0-1.66-1.34-3-3-3h-5.95c-1.66 0-3 1.34-3 3 0-1.66-1.34-3-3-3H15c-1.66 0-3 1.34-3 3l.03 8 14.91.02c1.14 0 2.07.92 2.07 2.06V35h-2v7h6V30h3V19Zm-12.06 6.99c-1.36 0-2.47-1.11-2.47-2.47 0-.26.05-.5.12-.74.16.02.31.03.47.03 1.15 0 2.19-.44 2.98-1.16.03.03.05.06.08.09.32.32.69.56 1.07.75.15.32.23.66.23 1.03 0 1.36-1.11 2.47-2.48 2.47Zm-3.47 3.02H7.51c-.83 0-1.51.67-1.51 1.51v9.99c.01.83.69 1.51 1.52 1.51h12.97c.83 0 1.51-.67 1.51-1.51v-9.99a1.53 1.53 0 0 0-1.52-1.51Zm-9.48 10h-2v-4h2v4Zm2 0v-7h2l.02 7h-2.02Zm6 0h-2v-3h2v3Zm.43-32.71h-.02c-.46-.17-.95-.27-1.47-.27-.47 0-.92.09-1.35.23-.03 0-.05.02-.08.02-1.78.6-3.07 2.26-3.07 4.25 0 2.49 2.01 4.5 4.5 4.5s4.5-2.01 4.5-4.5c0-1.96-1.26-3.61-3.01-4.23Zm-1.49 6.73a2.5 2.5 0 0 1-2.5-2.5c0-.21.03-.41.08-.6.3.07.61.11.93.11 1.25 0 2.37-.52 3.18-1.34.49.46.81 1.1.81 1.83a2.5 2.5 0 0 1-2.5 2.5ZM31.45 6.3h-.02c-.46-.17-.95-.27-1.47-.27-.47 0-.92.09-1.35.23-.03 0-.05.02-.08.02-1.78.6-3.07 2.26-3.07 4.25 0 2.49 2.01 4.5 4.5 4.5s4.5-2.01 4.5-4.5c0-1.96-1.26-3.61-3.01-4.23Zm-1.49 6.73a2.5 2.5 0 0 1-2.5-2.5c0-.21.03-.41.08-.6.3.07.61.11.93.11 1.25 0 2.37-.52 3.18-1.34.49.46.81 1.1.81 1.83a2.5 2.5 0 0 1-2.5 2.5Z" }))));
  }
}, [1, "opengemeenten-icon-monitor-sociaal"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-monitor-sociaal", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-monitor-sociaal":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconMonitorSociaal$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconMonitorSociaal = OpengemeentenIconMonitorSociaal$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconMonitorSociaal, defineCustomElement };
