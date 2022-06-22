import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconMonitorDuurzaamheid$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M23.84 18.57c.03-.1.05-.2.07-.29.01-.05.03-.1.04-.15.04-.2.07-.4.07-.61v-.94c.55-.27 1.15-.99 1.08-1.48-.09-.71-.63-.59-1.09-.62V7.47c-.01-.23-.04-.45-.08-.66.03-.01.07-.03.1-.04.05-.02.09-.03.14-.05.36-.11.74-.21 1.12-.29.07-.02.14-.03.22-.04.69-.14 1.4-.22 2.13-.24v.02c.12 0 .24-.02.36-.02 7.18 0 13 5.82 13 13 0 5.17-3.02 9.62-7.39 11.71-.36-.95-.96-1.81-1.73-2.5 3.59-1.52 6.12-5.08 6.12-9.21 0-5.51-4.48-10-10-10-.12 0-.24.01-.36.02l-.54.12c-1.08.59-1.14 2.24-.67 3.36.08.2.44.4.66.39 1.56-.06 3.12-.13 4.68-.29.72-.07 1.29.09 1.76.64.28.33.52.73.84 1 1.05.88 1.06 1.88.61 3.13-.67 1.88-.98 2.21-2.88 2.21-1.47 0-2.42 1.3-2.06 2.83.21.87.08 1.64-.5 2.32-.39.47-.79.94-1.14 1.44-.07.1-.14.16-.21.23l-1.31-.44c-.34-.31-.7-.6-1.06-.89-.62-.51-1.03-1.16-.92-1.99.22-1.73-.28-3.24-1.07-4.69ZM42 36.97v1.35l-14.57 3.33c-.42.1-.85.14-1.29.14-.51 0-1.02-.07-1.52-.2l-9.6-2.62v2H6.01v-15l9 .05v.88l4.27-.79c.18-.03.36-.05.55-.05.3 0 .6.05.89.14l8.39 2.79c1.73.57 2.9 2.29 2.9 3.92h5.35c2.57 0 4.65 1.81 4.65 4.06Zm-29.98-8h-3v9h3v-9Zm26.73 7.41c-.25-.45-.79-.76-1.39-.76H27.4c-.84 0-1.66-.12-2.45-.35l-3.69-1.07.98-2.57 3.69 1.07c.48.14 2.99.2 2.99.2 0-.5-.36-1.21-.88-1.39l-8.13-2.43-4.88.88v6l11 3 12.73-2.59Zm-22.5-11.75 2.67-.5c.14-.03.28-.03.42-.04-.54-.95-.93-2-1.13-3.11h-3.04c.18 1.28.54 2.51 1.07 3.64ZM6.02 17.51V7.55c-.01-.83.66-1.5 1.5-1.5H20.5c.83 0 1.51.67 1.51 1.5v9.97c.01.83-.66 1.5-1.5 1.5H7.53c-.83 0-1.51-.67-1.51-1.5Zm11-1.5h2v-3h-2v3ZM13.01 9v7.01h2.01L15 9h-2Zm-3.99 7.01h2v-4h-2v4Z" }))));
  }
}, [1, "opengemeenten-icon-monitor-duurzaamheid"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-monitor-duurzaamheid", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-monitor-duurzaamheid":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconMonitorDuurzaamheid$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconMonitorDuurzaamheid = OpengemeentenIconMonitorDuurzaamheid$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconMonitorDuurzaamheid, defineCustomElement };
