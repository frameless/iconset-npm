import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconJeugd$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "M8.99 8.46C8.99 7.1 10.09 6 11.45 6s2.46 1.1 2.46 2.46-1.1 2.46-2.46 2.46-2.46-1.1-2.46-2.46ZM7.96 25.02c-1.1 0-1.99.89-1.99 1.99S6.86 29 7.96 29s1.99-.89 1.99-1.99-.89-1.99-1.99-1.99Zm29.57-6.15c1.36 0 2.46-1.1 2.46-2.46s-1.1-2.46-2.46-2.46-2.46 1.1-2.46 2.46 1.1 2.46 2.46 2.46Zm-1.39 6.4.06.1c.35.57 1.01 1.64 2.22 1.64H42v-3h-3.12c-.05-.08-.1-.15-.13-.21l-2.65-3.84c-.04-.06-.09-.12-.14-.18-.78-.82-2.06-.8-2.81-.78h-.46c-5.12 0-4.86 0-5.28.2-.2.09-.37.23-.48.41l-2.58 4.07 2.48 1.62 2.1-3.3h2.11l-.07.12-.03-.02-2.38 3.18a3.41 3.41 0 0 0-.56 2.93l.04 3.61-4.87 1.65.93 2.84 5.88-1.99c.62-.21 1.03-.79 1.02-1.44l-.04-3.7L35 31.73v5.28h-6.77c-.53 0-.97.45-.97 1s.43 1 .97 1h12.56c.53 0 .97-.45.97-1s-.43-1-.97-1H38v-5.58c0-.75-.33-1.46-.91-1.94-.06-.05-.12-.09-.18-.13l-3.93-2.4c.61-1.01 1.46-2.41 2.01-3.32l1.15 1.64ZM29.97 40c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1ZM40 40c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1ZM12.87 17.76l1.25-1.94 1.96 3.19-3.98 2.39c-.07.04-.13.08-.19.13-.58.48-.91 1.18-.91 1.93v5.53h3v-5.25l3.51-2.15-.94 2.54c-.18.49-.1 1.04.23 1.45l2.69 3.4h3.83l-3.63-4.61 1.44-3.86c.4-1.08.22-2.29-.47-3.21l-2.43-3.21-.03.02-.07-.12h2.15l2.13 3.33 2.52-1.63-2.63-4.1c-.12-.18-.29-.32-.49-.42-.42-.2-.16-.2-5.38-.2H16c-.78-.02-2.09-.05-2.89.79-.07.07-.13.15-.19.24l-2.51 3.97H7.02v3h3.61c.92 0 1.77-.47 2.26-1.24Z" }))));
  }
}, [1, "opengemeenten-icon-jeugd"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-jeugd", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-jeugd":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconJeugd$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconJeugd = OpengemeentenIconJeugd$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconJeugd, defineCustomElement };
