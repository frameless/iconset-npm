import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconMonitorVirus$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M41.99 23.97c0 1.66-1.34 3-3 3-1.09 0-2.04-.59-2.56-1.46H32.8a9.15 9.15 0 0 1-1.52 3.71l1.13 1.13a3.92 3.92 0 0 1 3.28.06 3.96 3.96 0 0 1-3.45 7.13 3.952 3.952 0 0 1-1.93-5.05l-1.14-1.14c-1.07.77-2.31 1.3-3.66 1.54v4.07c1.14.75 1.58 2.23.97 3.49a2.748 2.748 0 1 1-4.95-2.39c.23-.47.57-.83.98-1.1v-4.04a8.93 8.93 0 0 1-3.76-1.54l-2.79 2.79c.11.52.11 1.08-.06 1.63a3.213 3.213 0 0 1-4.02 2.11 3.213 3.213 0 0 1-2.11-4.02 3.213 3.213 0 0 1 4.02-2.11c.08.02.15.06.22.09l2.61-2.61a8.94 8.94 0 0 1-1.55-3.74h-1.39a3.988 3.988 0 0 1-7.67-1.54c0-1.19.53-2.24 1.35-2.97.06 0 .12.02.18.02h5.12c.45.41.81.91 1.04 1.49h1.37c.09-.52.23-1.01.41-1.49h3.36c-.51.88-.82 1.9-.82 2.99 0 3.31 2.68 5.99 5.99 5.99S30 27.33 30 24.02s-2.68-5.99-5.99-5.99h-.04c.03-.17.05-.34.05-.51v-10c-.01-.53-.14-1.02-.35-1.47.11-.01.21-.03.33-.03a4.02 4.02 0 0 1 1.5 7.75v1.41c1.34.24 2.58.77 3.65 1.54l1.9-1.9a3.11 3.11 0 0 1-.12-.81c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3c-.25 0-.49-.04-.73-.1l-1.93 1.93a8.924 8.924 0 0 1 1.52 3.67h3.59c.51-.91 1.48-1.54 2.6-1.54 1.66 0 3 1.34 3 3ZM22.01 7.54v9.97c.01.83-.66 1.5-1.5 1.5H7.53c-.83 0-1.51-.67-1.51-1.5V7.54c-.01-.83.66-1.5 1.5-1.5H20.5c.83 0 1.51.67 1.51 1.5Zm-10.99 4.48h-2v4h2v-4Zm4 4L15 9.01h-2v7.01h2.01Zm4-3h-2v3h2v-3Z" }))));
  }
}, [1, "opengemeenten-icon-monitor-virus"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-monitor-virus", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-monitor-virus":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconMonitorVirus$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconMonitorVirus = OpengemeentenIconMonitorVirus$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconMonitorVirus, defineCustomElement };
