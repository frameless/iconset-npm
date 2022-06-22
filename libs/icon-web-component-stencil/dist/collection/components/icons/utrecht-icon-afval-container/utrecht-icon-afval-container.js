import { Component, h, Prop } from '@stencil/core';
import { v4 } from 'uuid';
export class UtrechtIconAfvalContainer {
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null,
      h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id },
        this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Afval Container"),
        h("path", { fill: "currentColor", d: "M37.44 23.15V19a8.33 8.33 0 00-8.29-8.47H27V9a1.48 1.48 0 00-1.48-1.48h-3A1.48 1.48 0 0021 9v1.48h-2A8.48 8.48 0 0010.55 19V37.4h26.89zM25.47 9v1.48h-3V9zm3 12h-9v-6h9zM6.01 39H42v3H6.01z" }))));
  }
  static get is() { return "utrecht-icon-afval-container"; }
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
