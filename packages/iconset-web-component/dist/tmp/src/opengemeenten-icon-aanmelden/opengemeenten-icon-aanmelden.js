import { Component, h } from '@stencil/core';
export class OpengemeentenIconAanmelden {
  render() {
    return (h("opengemeenten-icon-container", null,
      h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" },
        h("path", { d: "M22.03 22.03c4.41 0 8.01-3.59 8.01-8.01s-3.59-8.01-8.01-8.01-8.01 3.59-8.01 8.01 3.59 8.01 8.01 8.01Zm-4.75-9.26c.28.03.56.06.84.06 2.23 0 4.25-.86 5.78-2.25.05.06.09.12.15.17.78.78 1.68 1.34 2.64 1.72.16.49.27 1 .27 1.55 0 2.72-2.21 4.93-4.93 4.93s-4.93-2.21-4.93-4.93c0-.43.07-.85.18-1.25ZM39.01 9V6h-3v3h-3v3h3v3h3v-3h3V9h-3z" }),
        h("path", { d: "M27 22.98H14.43c-2.36 0-3.43-1.91-3.43-4v-1.89l-4-.06v1.95c0 4.26 2.9 8 7.43 8h.61v15.01l13.92-.08V39l3.03-.06.02-10.97c0-2.81-2.19-5-5-5Zm-16-7.99V7.74c0-.41-.34-.75-.75-.75s-.75.34-.75.75v2.25H8.25C7.01 9.99 6 11.25 6 12.49s1.01 2.5 2.25 2.5H11Z" }))));
  }
  static get is() { return "opengemeenten-icon-aanmelden"; }
  static get encapsulation() { return "shadow"; }
}
