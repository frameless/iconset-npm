import { r as registerInstance, h } from './index-120a4e09.js';

const opengemeentenIconContainerCss = ".opengemeenten-icon-container{color:var(--opengemeenten-icon-color);height:var(--opengemeenten-icon-size);width:var(--opengemeenten-icon-size)}";

const OpengemeentenIconContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "opengemeenten-icon-container" }, h("slot", null)));
  }
};
OpengemeentenIconContainer.style = opengemeentenIconContainerCss;

export { OpengemeentenIconContainer as opengemeenten_icon_container };
