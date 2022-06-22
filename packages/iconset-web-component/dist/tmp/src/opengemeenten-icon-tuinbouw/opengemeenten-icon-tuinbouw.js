import { Component, h } from '@stencil/core';
export class OpengemeentenIconTuinbouw {
  render() {
    return (h("opengemeenten-icon-container", null,
      h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" },
        h("path", { d: "M24 5.9 6 16.4V42h36V16.4L24 5.9zm9 8.8 3.2 1.9H33v-1.9zm-7.5-4.5 2.9 1.7h-2.9v-1.7zm0 3.2H31l.5.3v2.7h-6v-3zm-3-3.2v1.7h-2.9l2.9-1.7zm-5.9 3.5.5-.3h5.5v3.1h-6v-2.8zm-1.5.9v1.9h-3.3l3.3-1.9zM9 39V19.5L13.5 39H9zm1.5-19.5H15V39l-4.5-19.5zM16.6 39V19.5h6V39h-6zm8.9 0V19.5h6V39h-6zm7.5 0V19.5L37.5 39H33zm1.5-19.5H39V39l-4.5-19.5z" }))));
  }
  static get is() { return "opengemeenten-icon-tuinbouw"; }
  static get encapsulation() { return "shadow"; }
}
