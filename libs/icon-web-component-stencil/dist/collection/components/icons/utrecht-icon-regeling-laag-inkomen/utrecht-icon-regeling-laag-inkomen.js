import { Component, h, Prop } from '@stencil/core';
import { v4 } from 'uuid';
export class UtrechtIconRegelingLaagInkomen {
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null,
      h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id },
        this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Regeling Laag Inkomen"),
        h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M21.361 22.014c.046-.004.091-.014.14-.014h5a1.5 1.5 0 0 1 1.5 1.5v2.839l5-1.84v-9c0-1.156-1.345-2-3-2h-3c-1.658 0-3 .844-3 2.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5c0-1.656-1.345-2.5-3-2.5h-3c-1.393 0-2.553.604-2.89 1.777a8.514 8.514 0 0 1 6.25 6.738zm10.112 8.027l4.774 2.757c.228.132.487.2.75.2h5v-3H37.4l-4.58-2.643a1.468 1.468 0 0 0-.278-.125 4.514 4.514 0 0 0-3.184.129l-8.014 3.484a2.973 2.973 0 0 0-1.774 3.156h-2.323L11.991 32.2c-2.295-.807-4.856.384-5.71 2.663l-.125.33a2.517 2.517 0 0 0 1.42 3.2l8.871 3.5a1.5 1.5 0 0 0 .55.105l9.445-.001c.876 0 1.737-.152 2.56-.451l4.011-1.457c.165-.06.337-.091.513-.091h8.471v-3h-8.47c-.527 0-1.044.09-1.539.27l-4.01 1.459c-.494.18-1.01.27-1.536.27h-9.16l-8.137-3.21a1.516 1.516 0 0 1 1.861-.753l5.505 1.883c.157.054.321.08.486.08h5.78c.432.153.89.253 1.38.253.613 0 1.257-.12 1.897-.36l5-2-1.113-2.784-4.97 1.988c-.48.179-1.017.206-1.303.063l-1.127-.564 7.996-3.477c.297-.125.626-.148.936-.076zM9.06 24.577h.822c.454 1.773 1.891 2.923 3.78 2.923.763 0 1.338-.181 1.338-.181l-.255-1.313s-.486.15-1.06.15c-1.017 0-1.868-.5-2.21-1.58h2.21l.165-.771h-2.63s-.033-.198-.033-.32c0-.165.022-.297.022-.297h2.774l.177-.772h-2.752c.353-1.003 1.171-1.58 2.221-1.58.41 0 .785.044.785.044l.343-1.274s-.509-.106-1.095-.106c-1.823 0-3.304 1.143-3.78 2.916H9.06v.772h.68s-.024.198-.024.319c0 .144.023.298.023.298H9.06v.772zM6 23.5a7 7 0 1 1 14 0 7 7 0 0 1-14 0zM28.482 12a3 3 0 0 0 .036-6 3.001 3.001 0 0 0-.036 6zm-11.98-2.965a2.999 2.999 0 1 1 5.997-.037 2.999 2.999 0 0 1-5.998.037z" }))));
  }
  static get is() { return "utrecht-icon-regeling-laag-inkomen"; }
  static get encapsulation() { return "shadow"; }
  static get properties() { return {
    "iconTitle": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "icon-title",
      "reflect": true
    },
    "iconTitleId": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "icon-title-id",
      "reflect": true
    }
  }; }
}
