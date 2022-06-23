import { Component, h } from '@stencil/core';
export class OpengemeentenIconEconomieWerkInkomen {
  render() {
    return (h("opengemeenten-icon-container", null,
      h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" },
        h("path", { d: "M31.94 22.01c4.41 0 8.01-3.59 8.01-8.01s-3.59-8.01-8.01-8.01-8.01 3.59-8.01 8.01 3.59 8.01 8.01 8.01Zm-4.75-9.26c.28.03.56.06.84.06 2.23 0 4.25-.86 5.78-2.25.05.06.09.12.15.17.78.78 1.68 1.34 2.64 1.72.16.49.27 1 .27 1.55 0 2.72-2.21 4.93-4.93 4.93s-4.93-2.21-4.93-4.93c0-.43.07-.85.18-1.25ZM42 27.98 41.98 39H39v3H26.63c.23-.46.37-.98.37-1.53V29.5c0-1.93-1.57-3.5-3.5-3.5h-.94c.71-1.7 2.34-2.89 4.3-3 0 0 2.05 5.16 3.12 6.93l1.03-3.91L29.99 25v-2h4v2l-1.02 1.02.96 3.94c1.08-1.78 3.2-6.97 3.2-6.97 2.74.06 4.87 2.22 4.87 4.98ZM23.5 28H19v-1.54c0-.81-.67-1.46-1.5-1.46h-3.96c-.85 0-1.54.66-1.54 1.49V28H7.5c-.83 0-1.5.67-1.5 1.5v11.01c0 .83.67 1.5 1.5 1.5h16c.83 0 1.5-.67 1.5-1.5V29.5c0-.83-.67-1.5-1.5-1.5ZM17 28h-3v-1h3v1ZM8.86 14.92H7v-2h1.52c-.02.13-.04-.14-.04-.39 0-.31.04-.61.04-.61H7v-2h1.85c.92-2.43 3.41-3.9 5.98-3.9 1.34 0 2.41.29 3.28.88l-.88 1.78c-.63-.46-1.46-.67-2.39-.67-1.48 0-2.87.69-3.58 1.91h5.27l-.8 2h-4.9s-.04.28-.04.59c0 .34.04.41.04.41h4.33l-.79 2h-3.08c.71 1.38 2.05 2.05 3.54 2.05 1.07 0 2.01-.31 2.66-.92l1.07 1.65c-.9.77-2.2 1.3-3.74 1.3-2.59 0-5.02-1.46-5.94-4.1v.02Z" }))));
  }
  static get is() { return "opengemeenten-icon-economie-werk-inkomen"; }
  static get encapsulation() { return "shadow"; }
}
