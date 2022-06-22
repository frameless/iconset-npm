import { Component, h } from '@stencil/core';
export class UtrechtIconAuto {
  render() {
    return (h("utrecht-icon-container", null,
      h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" },
        h("path", { "fill-rule": "evenodd", d: "M35 28.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1-5 0zm-16 6h10V32H19v2.5zm-8.5-4a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5zm4.9-17.81c.14-.41.52-.69.94-.69h15.31c.43 0 .81.28.98.78l3.1 8.22H12.27l3.13-8.31zM42 20.297V19.5a1.5 1.5 0 0 0-1.5-1.5h-1.63l-2.47-6.55A5 5 0 0 0 31.66 8H16.33c-2.16.01-4.06 1.4-4.7 3.37L9.13 18H7.5A1.5 1.5 0 0 0 6 19.5v.797a1.5 1.5 0 0 0 1.175 1.464l.445.099-.77 1.75a9.798 9.798 0 0 0-.84 3.95L6 39.38c0 .89.73 1.62 1.62 1.62h2.76c.89 0 1.62-.73 1.62-1.62V37.5h-1.5V36h27v1.5H36v1.88c0 .89.73 1.62 1.62 1.62h2.76c.89 0 1.62-.73 1.62-1.62v-11.8c0-1.37-.29-2.73-.85-3.98l-.77-1.74.445-.099A1.5 1.5 0 0 0 42 20.297z" }))));
  }
  static get is() { return "utrecht-icon-auto"; }
  static get encapsulation() { return "shadow"; }
}
