import { Component, h } from '@stencil/core';
export class OpengemeentenIconGemivaLocatie {
  render() {
    return (h("opengemeenten-icon-container", null,
      h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" },
        h("path", { d: "M14 18h5v4h-5zm7 0h6v4h-6zm-7 7h5v4h-5zm15-7h2v4h-2zm0 7h2v4h-2z" }),
        h("path", { d: "M35 25h7v-7h-7c0-.55-.45-1-1-1s-1 .45-1 1v17h-2v-2h-4v-8h-6v8h-4v2h-6V16h31v-3h-4.01L36 10.04V13v-3H12l-2.01 3H6v3h2v19H6v3h36v-3h-2v-8h-3v8h-2V25Zm0-5h5v3h-5v-3Z" }))));
  }
  static get is() { return "opengemeenten-icon-gemiva-locatie"; }
  static get encapsulation() { return "shadow"; }
}
