import { Component, h, Prop } from '@stencil/core';
import { v4 } from 'uuid';
export class UtrechtIconKindEnFamilie {
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null,
      h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id },
        this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Kind En Familie"),
        h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M27 22a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm9 6h-1.5l1.5 7h-3v7h-6v-7h1.5v-7a1.5 1.5 0 0 0-1.5-1.5h-6a1.5 1.5 0 0 0-1.5 1.5H12V17.5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V28zm-6-15a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm-12 0a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm3 22v7h-6V30h4.5v5H21z" }))));
  }
  static get is() { return "utrecht-icon-kind-en-familie"; }
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
