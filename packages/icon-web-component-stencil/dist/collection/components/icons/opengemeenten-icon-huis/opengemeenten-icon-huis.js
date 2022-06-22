import { Component, h } from '@stencil/core';
export class OpengemeentenIconHuis {
  render() {
    return (h("opengemeenten-icon-container", null,
      h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" },
        h("path", { "fill-rule": "evenodd", d: "M24 8 6 23.875l1.985 2.25 4.01-3.536V40h17.007v-2.999H14.996V19.942L24 12.001l10.003 8.824V40h3.003V23.471l3.009 2.654L42 23.875l-4.994-4.404v-7.47h-3.003v4.823L24 8zm-4.002 24h9.005v-6.5h-9.005V32z" }))));
  }
  static get is() { return "opengemeenten-icon-huis"; }
  static get encapsulation() { return "shadow"; }
}
