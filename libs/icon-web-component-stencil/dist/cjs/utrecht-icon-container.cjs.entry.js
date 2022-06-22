'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5495a336.js');

const utrechtIconContainerCss = ".utrecht-icon-container{color:var(--utrecht-icon-color);height:var(--utrecht-icon-size);width:var(--utrecht-icon-size)}";

const UtrechtIconContainer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { class: "utrecht-icon-container" }, index.h("slot", null)));
  }
};
UtrechtIconContainer.style = utrechtIconContainerCss;

exports.utrecht_icon_container = UtrechtIconContainer;
