import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const opengemeentenIconContainerCss = ".opengemeenten-icon-container{color:var(--opengemeenten-icon-color);height:var(--opengemeenten-icon-size);width:var(--opengemeenten-icon-size)}";

const OpengemeentenIconContainer = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("div", { class: "opengemeenten-icon-container" }, h("slot", null)));
  }
  static get style() { return opengemeentenIconContainerCss; }
}, [1, "opengemeenten-icon-container"]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconContainer);
      }
      break;
  } });
}

export { OpengemeentenIconContainer as O, defineCustomElement as d };
