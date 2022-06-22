import { Component, h, Prop } from '@stencil/core';
import { v4 } from 'uuid';
export class UtrechtIconVeiligeWijk {
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null,
      h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id },
        this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Veilige Wijk"),
        h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M34 19v-6l-3.5-7-3.5 7v6h-3.5l-5-5H6l6.022 6.949-.005 4.522.296.073 4.184 1.038L24 20.579l4.5 3.6V22h3v4.579l3.437 2.75-1.874 2.342-1.563-1.25V39H42V19h-8zM15.349 30.589l-4.263 4.264-2.118-2.119-1.061 1.061 2.592 2.592a.826.826 0 0 0 1.173 0l4.738-4.738-1.061-1.06zM11.951 27L18 28.5v6c0 3.428-2.205 5.824-6 7.5-3.795-1.676-6-3.95-6-7.378V28.5l5.951-1.5zM21 34h6v-4h-6v4z" }))));
  }
  static get is() { return "utrecht-icon-veilige-wijk"; }
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
