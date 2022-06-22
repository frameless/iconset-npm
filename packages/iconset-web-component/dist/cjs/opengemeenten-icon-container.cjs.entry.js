'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5495a336.js');

const opengemeentenIconContainerCss = ".opengemeenten-icon-container{color:var(--opengemeenten-icon-color);height:var(--opengemeenten-icon-size);width:var(--opengemeenten-icon-size)}";

const OpengemeentenIconContainer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { class: "opengemeenten-icon-container" }, index.h("slot", null)));
  }
};
OpengemeentenIconContainer.style = opengemeentenIconContainerCss;

exports.opengemeenten_icon_container = OpengemeentenIconContainer;
