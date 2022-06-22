import { r as registerInstance, h } from './index-da88101a.js';

const utrechtIconContainerCss = ".utrecht-icon-container{color:var(--utrecht-icon-color);height:var(--utrecht-icon-size);width:var(--utrecht-icon-size)}";

const UtrechtIconContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "utrecht-icon-container" }, h("slot", null)));
  }
};
UtrechtIconContainer.style = utrechtIconContainerCss;

export { UtrechtIconContainer as utrecht_icon_container };
