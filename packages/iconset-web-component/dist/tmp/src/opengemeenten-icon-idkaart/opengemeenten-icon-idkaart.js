import { Component, h } from '@stencil/core';
export class OpengemeentenIconIdkaart {
  render() {
    return (h("opengemeenten-icon-container", null,
      h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" },
        h("path", { d: "M27 24h9v2h-9v-2Zm0-5h9v2h-9v-2Zm0 12h7v-2h-7v2Zm15-15.5v17c0 2.49-2.01 4.5-4.5 4.5h-27C8.01 37 6 34.99 6 32.5v-17c0-2.49 2.01-4.5 4.5-4.5h27c2.49 0 4.5 2.01 4.5 4.5Zm-3 0c0-.83-.67-1.5-1.5-1.5H26v3h-4v-3H10.5c-.83 0-1.5.67-1.5 1.5v17c0 .83.67 1.5 1.5 1.5h27c.83 0 1.5-.67 1.5-1.5v-17Zm-21 9.45c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3Zm0 1.55c-2 0-6 1.01-6 3V31h12v-1.5c0-1.99-4-3-6-3Z" }))));
  }
  static get is() { return "opengemeenten-icon-idkaart"; }
  static get encapsulation() { return "shadow"; }
}
