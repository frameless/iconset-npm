import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconAfvalScheiden$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("circle", { cx: "8.8", cy: "40.73", r: "1.27" }), h("path", { d: "m13.83 20.12-1.07 1.07a1.53 1.53 0 0 0-2.12 0l-4.1 4.1a1.53 1.53 0 0 0 0 2.12l1 1.05 7.34-7.34zm7.07 19.35a1.27 1.27 0 1 0 1.27 1.26 1.26 1.26 0 0 0-1.27-1.26z" }), h("ellipse", { cx: "32.84", cy: "40.74", rx: "1.27", ry: "1.26" }), h("path", { d: "M28.48 14.94A4.49 4.49 0 1 0 24 10.46a4.49 4.49 0 0 0 4.48 4.48zm-3-4.67a3.26 3.26 0 0 0 1.49.31 2.69 2.69 0 0 0 2.75-1.93 2.43 2.43 0 0 0 1.69 2 3 3 0 0 1-5.95-.18 1.11 1.11 0 0 1 .06-.2zm-2.22 10.67a.73.73 0 0 1 .74-.75v5.32h10.41v-5.64a3.23 3.23 0 0 0-3-3.36h-7.54a4.09 4.09 0 0 0-3.6 4.38 2.55 2.55 0 0 1-1.8 2.39c-.13.07-1.24.45-1.24.45l.92 2.82s1.07-.37 1.11-.37a5.53 5.53 0 0 0 4-5.24zm17.2 7.57A1.55 1.55 0 0 0 38.92 27h-5.8a1.54 1.54 0 0 0-1.53 1.48V30l.52 8.08a3 3 0 0 1 .74-.11 2.77 2.77 0 0 1 2.77 2.76 2.68 2.68 0 0 1-.33 1.27h3a1.33 1.33 0 0 0 1.33-1.19L40.44 30H42v-1.5zM8.07 38.08A2.48 2.48 0 0 1 8.8 38a2.77 2.77 0 0 1 2.76 2.76 2.72 2.72 0 0 1-.32 1.24h3a1.31 1.31 0 0 0 1.33-1.19l.9-12.3H7.53zM27 27h-5.8a1.54 1.54 0 0 0-1.53 1.48V30l.52 8a3 3 0 0 1 .71 0 2.77 2.77 0 0 1 2.77 2.76 2.72 2.72 0 0 1-.32 1.24h3a1.33 1.33 0 0 0 1.33-1.19L28.5 30H30v-1.49h-1.5A1.55 1.55 0 0 0 27 27z" }))));
  }
}, [1, "opengemeenten-icon-afval-scheiden"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-afval-scheiden", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-afval-scheiden":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconAfvalScheiden$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconAfvalScheiden = OpengemeentenIconAfvalScheiden$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconAfvalScheiden, defineCustomElement };
