import { Component, h, Prop } from '@stencil/core';
import { v4 } from 'uuid';
export class UtrechtIconTemperatuurMelding {
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null,
      h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id },
        this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Temperatuur Melding"),
        h("path", { fill: "currentColor", d: "M33.51 6a7.5 7.5 0 1 0-.02 15 7.5 7.5 0 0 0 .02-15zm.72 11.72a1 1 0 0 1-.72.28.94.94 0 0 1-.72-.28 1.07 1.07 0 0 1 0-1.44.94.94 0 0 1 .72-.28 1 1 0 0 1 .72 1.72zm.28-2.72h-2V9h2v6zM15 5.986c2.106 0 3.95 1.704 3.95 3.806v21.597c1.954 1.606 2.552 4.265 1.697 6.645A6 6 0 0 1 15 42a6 6 0 0 1-5.647-3.966c-.855-2.38-.317-5.039 1.638-6.645V9.792c0-2.102 1.903-3.806 4.009-3.806zm-.022 13.01c-.592-.005-.982.532-.999.99l.005 12.967c-1.455.398-2.154 1.841-1.958 3.372C12.222 37.855 13.494 39 15 39c1.506 0 2.778-1.144 2.974-2.675.196-1.53-.473-2.974-1.927-3.372l-.042-12.959c-.003-.456-.435-.991-1.027-.997z" }))));
  }
  static get is() { return "utrecht-icon-temperatuur-melding"; }
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