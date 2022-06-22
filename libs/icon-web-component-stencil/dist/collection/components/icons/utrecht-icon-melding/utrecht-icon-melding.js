import { Component, h, Prop } from '@stencil/core';
import { v4 } from 'uuid';
export class UtrechtIconMelding {
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null,
      h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id },
        this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Melding"),
        h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M21 30.5H11c-2.812 0-5 2.188-5 5l.016 6.5h19.968L26 35.5c0-2.812-2.188-5-5-5m-5-3a5.506 5.506 0 0 1-5.5-5.5c0-.337.035-.666.094-.986.82.647 1.7.986 2.906.986 2 0 4-1 4.5-3 0 1.821 1.708 3.152 3.478 3.436A5.503 5.503 0 0 1 16 27.5M16 15c-3.86 0-7 3.141-7 7s3.14 7 7 7 7-3.141 7-7-3.14-7-7-7m17.5 0h2V9h-2v6zm1.722 2.72a.977.977 0 0 1-.722.28c-.296 0-.537-.094-.722-.28A.982.982 0 0 1 33.5 17c0-.293.093-.532.278-.72.185-.186.426-.28.722-.28s.536.094.722.28a.978.978 0 0 1 .278.72.978.978 0 0 1-.278.72zM34.5 6a7.5 7.5 0 0 0-6.617 11.028L25.5 21l4.51-1.503A7.45 7.45 0 0 0 34.5 21a7.5 7.5 0 0 0 7.5-7.5A7.5 7.5 0 0 0 34.5 6z" }))));
  }
  static get is() { return "utrecht-icon-melding"; }
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