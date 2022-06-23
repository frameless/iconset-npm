import { Component, h } from '@stencil/core';
export class OpengemeentenIconEnergietransitie {
  render() {
    return (h("opengemeenten-icon-container", null,
      h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" },
        h("path", { d: "M10.54 28.95 6.01 22h3.01c.53-3.79 2.47-7.25 5.47-9.64 6.47-5.17 15.91-4.13 21.08 2.34l-2.52 1.63a12.01 12.01 0 0 0-7.66-4.2c-6.41-.83-12.27 3.56-13.36 9.87H15l-4.47 6.95ZM42 26h-2.96c-.52 3.76-2.44 7.19-5.4 9.59-6.44 5.22-15.88 4.22-21.1-2.21l2.53-1.63c1.92 2.24 4.59 3.69 7.51 4.08 6.41.86 12.3-3.51 13.4-9.83h-2.99l4.48-6.93L41.99 26Zm-14-4h-3.84l2.5-5H22l-2 8h2.8l-2 6h2.17L28 22Z" }))));
  }
  static get is() { return "opengemeenten-icon-energietransitie"; }
  static get encapsulation() { return "shadow"; }
}
