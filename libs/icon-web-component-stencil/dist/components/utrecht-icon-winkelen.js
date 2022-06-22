import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconWinkelen$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Winkelen"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M18.5 15H29v-2.325a5.093 5.093 0 0 0-3.717-4.949l-.029.006c-2.159.631-3.754 2.596-3.754 4.943v.825H20v-.825c0-1.932.835-3.669 2.158-4.89-2.117.685-3.658 2.606-3.658 4.89V15zM39 42H9l2-27h6v-2.325C17 8.994 20.062 6 23.826 6c.494 0 .975.058 1.439.16A6.76 6.76 0 0 1 26.712 6c.013 0 .025.003.038.003.013 0 .025-.003.038-.003 3.701 0 6.712 2.994 6.712 6.675v.825H32v-.825c0-2.32-1.559-4.265-3.679-4.92a6.654 6.654 0 0 1 2.179 4.92v7c.59.281 1 .878 1 1.575a1.75 1.75 0 1 1-3.5 0c0-.697.41-1.294 1-1.575V18H18.5v1.675c.59.281 1 .878 1 1.575a1.75 1.75 0 1 1-3.5 0c0-.697.41-1.294 1-1.575V18h-3.24l-1.5 21h23.48l-1.5-21H32v-3h5l2 27zM17.664 31.709h1.477a6.516 6.516 0 0 1-.038-.689c0-.308.018-.499.038-.691h-1.477v-1.668h1.803c.92-2.684 3.413-4.161 5.982-4.161 1.342 0 2.416.287 3.279.882l-.882 1.783c-.633-.46-1.457-.671-2.397-.671-1.476 0-2.876.691-3.586 2.167h5.274l-.806 1.668h-4.908c-.02.153-.039.364-.039.671 0 .345.019.575.039.709h4.333l-.786 1.687h-3.087c.709 1.401 2.052 2.072 3.547 2.072 1.074 0 2.013-.307 2.665-.921l1.074 1.649c-.901.767-2.205 1.304-3.739 1.304-2.588 0-5.024-1.457-5.944-4.104h-1.822v-1.687z" }))));
  }
}, [1, "utrecht-icon-winkelen", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-winkelen", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-winkelen":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconWinkelen$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconWinkelen = UtrechtIconWinkelen$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconWinkelen, defineCustomElement };