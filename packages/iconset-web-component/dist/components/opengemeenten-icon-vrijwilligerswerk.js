import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconVrijwilligerswerk$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M27.65 24.81a2.795 2.795 0 0 1 0 3.92L23 33.42l-4.65-4.69a2.795 2.795 0 0 1 0-3.92 2.74 2.74 0 0 1 3.89 0l.76.77.76-.77a2.74 2.74 0 0 1 3.89 0Zm13.63-4.58-.12-.12c-.7-.72-2.34-2.41-5.1-1.34-.09.03-.18.08-.25.12l-4.15 2.49c-.04-.87-.12-2.13-.22-3.58v-.07c-.16-2.37-.34-5.06-.35-6.58 0-2.02-1.66-3.66-3.68-3.66s-3.57 1.53-3.67 3.49l-.06 1.37-1.07-3.59c-.53-1.95-2.55-3.13-4.5-2.64-1.98.49-3.17 2.46-2.72 4.47l.58 2.26-.44-.63a3.707 3.707 0 0 0-4.9-1.1c-.87.5-1.49 1.3-1.75 2.26-.27.97-.13 1.97.4 2.88l1.02 1.63c-1.17-.28-2.42.06-3.28.92a3.494 3.494 0 0 0-.15 4.77c.03.03.05.06.08.08l4.39 4.35 6.57 9.19c.38.53.63 1.15.74 1.79l.5 2.99h2.91l-.58-3.46c-.18-1.07-.61-2.1-1.24-2.98l-6.64-9.29a1.07 1.07 0 0 0-.14-.16l-4.45-4.41c-.2-.27-.18-.61.03-.83.23-.23.6-.24.85-.02.03.02.05.05.08.07l3.87 2.97c.82-.58 1.67-1.11 2.57-1.62l-4.69-7.46a.853.853 0 0 1 .31-1.17c.39-.22.87-.11 1.12.25l5.16 7.37c.78-.38 1.55-.72 2.31-1.02l-.03-.04.17-.06-2.61-10.2c-.1-.46.17-.9.62-1.02.45-.11.91.17 1.04.64l2.95 9.92c1.46-.47 2.66-.75 3.48-.91l.34-7.42c.02-.43.38-.76.8-.76s.8.36.8.8c0 1.63.19 4.39.35 6.83.11 1.59.22 3.22.23 4.01.02.92.51 1.73 1.32 2.18.81.44 1.76.43 2.55-.05l4.49-2.7c.77-.27 1.17-.06 1.63.37l.18.17-5.76 6.25a7.172 7.172 0 0 0-1.68 6.64L33.3 42h2.97l-1.99-7.84c-.36-1.42.02-2.91 1.01-3.98l6.11-6.63c.8-.98.74-2.4-.15-3.3Z" }))));
  }
}, [1, "opengemeenten-icon-vrijwilligerswerk"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-vrijwilligerswerk", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-vrijwilligerswerk":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconVrijwilligerswerk$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconVrijwilligerswerk = OpengemeentenIconVrijwilligerswerk$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconVrijwilligerswerk, defineCustomElement };
