import { Component, h } from '@stencil/core';
export class UtrechtIconGebruikerCentraal {
  render() {
    return (h("utrecht-icon-container", null,
      h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" },
        h("path", { "fill-rule": "evenodd", d: "M18.54 12.014c.82.647 1.7.986 2.907.986 2 0 4-1 4.5-3 0 1.822 1.707 3.153 3.477 3.436a5.503 5.503 0 0 1-5.477 5.064 5.505 5.505 0 0 1-5.5-5.5c0-.337.035-.666.094-.986M23.946 20c3.86 0 7-3.14 7-7s-3.14-7-7-7c-3.859 0-7 3.14-7 7s3.141 7 7 7m.365 4.533-1.585 1.146.573.808-.008.005c.639.964.67 2.4-.296 3.127-.505.38-.835.64-1.16.743L19.3 26.305l4.133-2.987a.746.746 0 0 1 1.046.168.749.749 0 0 1-.168 1.047m4.636-3.033H18.922c-2.98.006-3.979 1.012-4.976 5L13 30.76l5.091-3.562 2.387 3.822-3.53 2.472V42h14v-3h2.985l.014-12.5c0-2.811-2.187-5-5-5" }))));
  }
  static get is() { return "utrecht-icon-gebruiker-centraal"; }
  static get encapsulation() { return "shadow"; }
}
