import { Component, h, Prop } from '@stencil/core';
import { v4 } from 'uuid';
export class UtrechtIconOverDeGemeente {
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null,
      h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id },
        this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Over De Gemeente"),
        h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M25.75 16.5c0-.965-.785-1.75-1.75-1.75s-1.75.785-1.75 1.75.785 1.75 1.75 1.75 1.75-.785 1.75-1.75zm1.5 0A3.254 3.254 0 0 1 24 19.75a3.254 3.254 0 0 1-3.25-3.25A3.254 3.254 0 0 1 24 13.25a3.254 3.254 0 0 1 3.25 3.25zM29.5 19h5v-5h-5v5zm0 8h5v-5h-5v5zm-16-8h5v-5h-5v5zm0 8h5v-5h-5v5zm0 7.5h5v-5h-5v5zM36 39V11.4H12V39h5v-1.5h3v-8h3v8h2v-8h3v8h3V39h5zm6 0v3H6v-3h3V8.4h5V6h20v2.4h5V39h3zM21.5 27h5v-5h-5v5zm8 7.5h5v-5h-5v5z" }))));
  }
  static get is() { return "utrecht-icon-over-de-gemeente"; }
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
