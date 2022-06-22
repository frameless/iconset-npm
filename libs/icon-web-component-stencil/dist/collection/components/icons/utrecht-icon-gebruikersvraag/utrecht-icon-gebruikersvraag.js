import { Component, h, Prop } from '@stencil/core';
import { v4 } from 'uuid';
export class UtrechtIconGebruikersvraag {
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null,
      h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id },
        this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Gebruikersvraag"),
        h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M34 26.5L33.984 39H31v3H17V25.5h-.5c-4.528 0-8.5-3.738-8.5-8V15h4v2.5c0 2.094 2.145 4 4.5 4H29c2.812 0 5 2.188 5 5zM9.249 13.999C8.006 13.999 7 12.742 7 11.5 7 10.258 8.006 9.001 9.248 9l1.251-.001V6.75a.75.75 0 1 1 1.5 0L12 14l-2.751-.001zm9.344-1.985c.82.647 1.7.986 2.907.986 2 0 4-1 4.5-3 0 1.821 1.708 3.152 3.478 3.436C29.254 16.265 26.886 18.5 24 18.5a5.506 5.506 0 0 1-5.5-5.5c0-.337.035-.666.093-.986zM24 20c3.86 0 7-3.141 7-7s-3.14-7-7-7-7 3.141-7 7 3.14 7 7 7z" }))));
  }
  static get is() { return "utrecht-icon-gebruikersvraag"; }
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