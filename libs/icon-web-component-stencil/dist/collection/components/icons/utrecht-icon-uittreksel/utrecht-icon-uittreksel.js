import { Component, h, Prop } from '@stencil/core';
import { v4 } from 'uuid';
export class UtrechtIconUittreksel {
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null,
      h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id },
        this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Uittreksel"),
        h("path", { fill: "currentColor", "fill-rule": "evenodd", d: "M16 29h9v-1.5h-9V29zm0-4.5h14V23H16v1.5zm0-4.5h14v-1.5H16V20zm0-4.5h14V14H16v1.5zm1 21.531L14.977 35H17v2.031zm3-3.531a1.5 1.5 0 0 0-1.5-1.5H13V9h20v16h3V9c0-1.654-1.346-3-3-3H13c-1.654 0-3 1.346-3 3v24.045c0 .781.289 1.501.812 2.025l6.061 6.085a2.883 2.883 0 0 0 2.025.845H29v-3h-9v-5.5zm14.5-1c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zM39 31c0-2.481-2.019-4.5-4.5-4.5A4.505 4.505 0 0 0 30 31c0 1.791 1.059 3.328 2.577 4.052l-2 5.999 2.846.949 1.077-3.231L35.577 42l2.846-.949-2-5.999C37.941 34.328 39 32.791 39 31z" }))));
  }
  static get is() { return "utrecht-icon-uittreksel"; }
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
