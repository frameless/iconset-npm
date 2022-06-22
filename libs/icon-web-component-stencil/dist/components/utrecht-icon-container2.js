import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const utrechtIconContainerCss = ".utrecht-icon-container{color:var(--utrecht-icon-color);height:var(--utrecht-icon-size);width:var(--utrecht-icon-size)}";

const UtrechtIconContainer = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("div", { class: "utrecht-icon-container" }, h("slot", null)));
  }
  static get style() { return utrechtIconContainerCss; }
}, [1, "utrecht-icon-container"]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconContainer);
      }
      break;
  } });
}

export { UtrechtIconContainer as U, defineCustomElement as d };
