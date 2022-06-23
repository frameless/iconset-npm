import { Component, h } from '@stencil/core';
export class OpengemeentenIconDocumenten {
  render() {
    return (h("opengemeenten-icon-container", null,
      h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" },
        h("path", { d: "M39 9v25c0 1.66-1.34 3-3 3V12.01C36 10.35 34.65 9 32.99 9L14 9.02V9c0-1.66 1.34-3 3-3h19c1.66 0 3 1.34 3 3Zm-8 2c1.66 0 3 1.34 3 3v25c0 1.66-1.35 3-3.01 3l-13.03-.05L8.99 33V14c0-1.66 1.34-3 3-3H31Zm0 3-19 .02.02 16.98 7.98-.02V39h11V14ZM15 27h9v-2h-9v2Zm13-10H15v2h13v-2Zm-13 6h13v-2H15v2Z" }))));
  }
  static get is() { return "opengemeenten-icon-documenten"; }
  static get encapsulation() { return "shadow"; }
}
