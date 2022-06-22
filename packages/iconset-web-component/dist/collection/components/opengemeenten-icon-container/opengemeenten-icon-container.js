import { Component, h } from '@stencil/core';
export class OpengemeentenIconContainer {
  render() {
    return (h("div", { class: "opengemeenten-icon-container" },
      h("slot", null)));
  }
  static get is() { return "opengemeenten-icon-container"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["opengemeenten-icon-container.css"]
  }; }
  static get styleUrls() { return {
    "$": ["opengemeenten-icon-container.css"]
  }; }
}
