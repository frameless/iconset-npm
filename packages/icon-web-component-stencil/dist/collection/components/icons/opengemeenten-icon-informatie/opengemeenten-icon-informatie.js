import { Component, h } from '@stencil/core';
export class OpengemeentenIconInformatie {
  render() {
    return (h("opengemeenten-icon-container", null,
      h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" },
        h("path", { d: "M24 6a18 18 0 1 0 18 18A18 18 0 0 0 24 6zm0 6a2.25 2.25 0 1 1-2.25 2.25A2.25 2.25 0 0 1 24 12zm4.82 22.47h-9.3v-3h3v-8.94h-3v-3H24a1.49 1.49 0 0 1 1 .47 1.54 1.54 0 0 1 .46 1v10.47h3.31z" }))));
  }
  static get is() { return "opengemeenten-icon-informatie"; }
  static get encapsulation() { return "shadow"; }
}
