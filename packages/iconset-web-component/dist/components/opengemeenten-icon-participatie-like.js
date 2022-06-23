import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconParticipatieLike$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M39.56 21.29c-.73-.83-1.77-1.29-2.93-1.29l-4.52-.04c-.01-2.11-.12-3.28-.53-5.18-.86-4-2.89-4.8-4.54-4.8S23 11.19 23 13.57v.71c0 4.36-2.63 7.56-6 7.69V21H6v16h11v-.99c.94 0 2.1.27 3.12.65 1.5.55 3.36 1.34 6.52 1.34h7.97c2.25 0 4.25-1.7 4.55-3.93.08-.56.04-1.11-.12-1.63.29-.5.47-1.04.55-1.6.07-.56.04-1.11-.12-1.63.29-.5.47-1.04.55-1.6.08-.56.04-1.11-.12-1.63.29-.5.47-1.04.55-1.6.15-1.14-.18-2.27-.9-3.09ZM14 34H9V24h5v10Zm22.92-9.18c-.44.5-.51 1.23-.15 1.8.11.18.15.38.12.61-.05.35-.24.64-.4.81-.44.5-.51 1.24-.15 1.8.11.18.15.38.12.61-.05.35-.24.64-.4.81-.44.5-.5 1.23-.15 1.8.11.18.15.38.12.61-.1.73-.82 1.32-1.54 1.32h-7.86c-2.61 0-4.06-.64-5.46-1.16-1.11-.41-2.25-.84-3.73-.84h-.43v-8.11c5.38-.11 9-4.77 9-10.79v-.11c0-.51.38-1.01.96-1.01.31 0 1.1 0 1.6 2.46.33 1.62.31 2.51.32 4.56L27 19.96v3.03h9.49c.27 0 .5.13.65.3.15.17.22.43.18.71-.05.35-.24.64-.4.81Z" }))));
  }
}, [1, "opengemeenten-icon-participatie-like"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-participatie-like", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-participatie-like":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconParticipatieLike$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconParticipatieLike = OpengemeentenIconParticipatieLike$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconParticipatieLike, defineCustomElement };
