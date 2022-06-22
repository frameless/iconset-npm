import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconOndernemen$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { d: "m39.83 24.22-1.03-.62 3.2-.8v-3.09l-6.21 1.55c-.37.09-.76.04-1.1-.15l-6.36-3.57c-.2-.11-.37-.27-.5-.46l-1.86-2.69c-.37-.53-1.04-.77-1.66-.59l-6.12 1.79c-.64.17-1.33-.1-1.63-.6l-.06-.11 8.92-4.8c.33-.17 1.26-.11 1.83.21l4.35 2.48c.99.56 2.15.72 3.3.44l7.09-1.9V8.2l-7.83 2.1c-.37.09-.76.04-1.08-.15l-4.35-2.48c-1.25-.7-3.27-1.02-4.72-.25l-1.16.63-10.71 1.36c-.25.02-.52-.02-.78-.13L5.99 6.99v3.26l4.17 1.78c.57.26 1.19.39 1.84.39.15 0 .31 0 .47-.02l3.02-.38-1.71.92c-.72.39-1 1.28-.62 2.01l.79 1.51a4.516 4.516 0 0 0 5.07 2.02l5.11-1.5 1.24 1.79c.39.56.9 1.03 1.5 1.37l6.36 3.57c.17.1.35.18.53.26l-.03.06 4.55 2.75c.7.42.93 1.32.53 2.03l-.02.03c-.21.34-.53.58-.92.68-.39.1-.79.03-1.13-.17l-1.26-.76s-.02-.02-.04-.03l-6-3.63c-.71-.43-1.63-.2-2.06.51-.43.71-.2 1.63.51 2.06l1.3.79 4.72 2.86c.33.21.57.53.67.91.1.39.04.79-.17 1.14l-.02.03a1.5 1.5 0 0 1-2.04.49l-1.63-.98s-.07-.06-.12-.09l-.12-.06-4.13-2.5c-.71-.43-1.63-.2-2.06.51-.43.71-.2 1.63.51 2.06l4.32 2.61c.31.21.54.51.63.87.1.39.04.79-.17 1.14l-.02.03c-.43.69-1.34.91-2.04.49l-5.02-3.04c.01-.11.03-.22.03-.33v-2.85c-.02-1.97-1.62-3.57-3.59-3.57h-.36c-.22 0-.43.03-.64.07a3.55 3.55 0 0 0-.97-1.79 3.534 3.534 0 0 0-2.5-1.03h-.43c-.25 0-.5.03-.74.08a3.487 3.487 0 0 0-3.29-2.33h-.5c-1.93 0-3.5 1.57-3.5 3.5v3c0 1.93 1.57 3.5 3.5 3.5h.5c.28 0 .55-.04.81-.11a3.534 3.534 0 0 0 3.24 2.11h.43c.2 0 .39-.03.58-.06a3.565 3.565 0 0 0 3.52 3.06h.36c.74 0 1.44-.23 2.04-.65l4.96 3.01c.72.44 1.52.64 2.31.64 1.53 0 3.02-.78 3.86-2.18l.07-.12c.32-.56.49-1.18.55-1.8.12 0 .24.02.36.02 1.53 0 3.02-.78 3.86-2.18l.07-.12c.36-.64.54-1.34.56-2.06.33 0 .67-.05 1-.13 1.13-.28 2.09-.97 2.71-1.95l.06-.1c1.28-2.13.59-4.9-1.53-6.17Zm-29.32 4.54v.75c0 .27-.22.49-.5.49h-.5c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5h.5c.28 0 .5.22.5.5v2.26ZM14.48 32h-.42a.54.54 0 0 1-.38-.16.54.54 0 0 1-.16-.38v-2.69c0-.29.24-.52.53-.52h.42c.19 0 .32.1.38.16s.16.19.16.38v2.67c0 .3-.23.54-.53.54Zm5 2.63s-.02.02-.03.04c-.02.04-.04.08-.05.12-.01.02-.03.04-.04.06-.06.06-.2.17-.41.17h-.35c-.32 0-.58-.26-.58-.57V31.6c0-.32.25-.58.57-.58h.35c.32 0 .58.26.58.57v2.85c0 .08-.01.14-.04.2Z" }))));
  }
}, [1, "opengemeenten-icon-ondernemen"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-ondernemen", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-ondernemen":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconOndernemen$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconOndernemen = OpengemeentenIconOndernemen$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconOndernemen, defineCustomElement };
