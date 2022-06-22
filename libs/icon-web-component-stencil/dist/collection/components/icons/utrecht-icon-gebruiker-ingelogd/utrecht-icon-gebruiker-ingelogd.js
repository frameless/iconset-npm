import { Component, h } from '@stencil/core';
export class UtrechtIconGebruikerIngelogd {
  render() {
    return (h("utrecht-icon-container", null,
      h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" },
        h("path", { "fill-rule": "evenodd", d: "M35 23.55c0-.84-.687-1.55-1.5-1.55h-18c-.813 0-1.5.71-1.5 1.55V39h21V23.55zm3 0V42H11V23.55c0-2.51 2.019-4.55 4.5-4.55h15v-3.925c0-3.35-2.691-6.075-6-6.075s-6 2.726-6 6.075V16h-3v-.925C15.5 10.07 19.537 6 24.5 6s9 4.07 9 9.075V19c2.481 0 4.5 2.04 4.5 4.55zM24.481 29.5a3 3 0 1 0 .038-6 3 3 0 0 0-.038 6zm5.019 4.463V37.5h-10v-3.537c0-1.657 1.314-2.963 2.893-2.963h4.286c1.578 0 2.821 1.306 2.821 2.963z" }))));
  }
  static get is() { return "utrecht-icon-gebruiker-ingelogd"; }
  static get encapsulation() { return "shadow"; }
}
