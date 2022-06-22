import { Component, h } from '@stencil/core';
export class UtrechtIconContainer {
  render() {
    return (h("div", { class: "utrecht-icon-container" },
      h("slot", null)));
  }
  static get is() { return "utrecht-icon-container"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["utrecht-icon-container.css"]
  }; }
  static get styleUrls() { return {
    "$": ["utrecht-icon-container.css"]
  }; }
}
