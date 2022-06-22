import { Component, h, Prop } from '@stencil/core';
import { v4 } from 'uuid';
export class UtrechtIconKoningsdag {
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null,
      h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id },
        this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Koningsdag"),
        h("path", { fill: "currentColor", d: "M32 32.05V22.5L28 27l-4-5.5-4 5.5-4-4.5V35h16zM19 32l-1-1 1-1 1 1zm5 0l-1-1 1-1 1 1zm5 0l-1-1 1-1 1 1zm2.5-21h-3V6h3zM27 10h-6V7h6zm-7.5 1h-3V6h3zM38 15V7h-5v3h2v3.5H13V10h2V7h-5v30.5a4.51 4.51 0 0 0 4.5 4.5h19a4.51 4.51 0 0 0 4.5-4.5V15zm-3 22.5a1.5 1.5 0 0 1-1.5 1.5h-19a1.5 1.5 0 0 1-1.5-1.5v-21h22z" }))));
  }
  static get is() { return "utrecht-icon-koningsdag"; }
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
