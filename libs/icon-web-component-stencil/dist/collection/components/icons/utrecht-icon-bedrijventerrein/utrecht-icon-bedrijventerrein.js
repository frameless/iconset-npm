import { Component, h, Prop } from '@stencil/core';
import { v4 } from 'uuid';
export class UtrechtIconBedrijventerrein {
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null,
      h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id },
        this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Bedrijventerrein"),
        h("path", { fill: "currentColor", d: "M42 42H6V19.4h6V7.5h13.5v13.4H27v-9h10.5v7.5H42V42zm-24-6c-.8 0-1.5.7-1.5 1.5S17.1 39 18 39c.8 0 1.5-.7 1.5-1.5S18.8 36 18 36zm12.5 0c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zm5.5-4.5c0-.8-.7-1.5-1.5-1.5L33 25.5H12v12h1.9c0-2.2 1.8-4 4.1-4s4 1.8 4.1 4h4.4c0-2.2 1.8-4 4.1-4s4 1.8 4.1 4H36v-6zm-4.5-18h-2.9V15h2.9v-1.5zm-13.4-3.1h-3v3h3v-3zm4.5 0h-3v3h3v-3zM18.1 15h-3v3h3v-3zm4.5 0h-3v3h3v-3zM33 30l-1-3h-3.6v3H33z" }))));
  }
  static get is() { return "utrecht-icon-bedrijventerrein"; }
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
