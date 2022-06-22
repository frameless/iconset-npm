import { Component, h, Prop } from '@stencil/core';
import { v4 } from 'uuid';
export class UtrechtIconJeugd {
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null,
      h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id },
        this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Jeugd"),
        h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M36.5 28.5V22a3 3 0 0 0-3-3h-1.336c-.791 0-1.538.305-2.106.863l-3.612 3.57 2.108 2.134 1.946-1.923v4.361L27.78 35h3.218l2.514-6.464.988 2.964H42v-3h-5.5zM31.9 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm-7 20h12v-1.5h-12V38zm9.75 1.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zm-7.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zm-5.211-17.937l2.122-2.122-4.471-4.47c-.609-.643-1.312-.969-2.09-.969l-2.491.001-.009-.001-.01.001-8.99.003v3l6-.002v6.979l-3.913 9.915L10.878 35l4.088-10.358 1.953 5.86H24v-3h-4.919L18 24.259v-6.636l3.939 3.94zM11 10.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z" }))));
  }
  static get is() { return "utrecht-icon-jeugd"; }
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