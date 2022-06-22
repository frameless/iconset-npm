import { Component, h, Prop } from '@stencil/core';
import { v4 } from 'uuid';
export class UtrechtIconActueel {
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null,
      h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id },
        this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Actueel"),
        h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M29 27.5h7V26h-7v1.5zm0-3h7V23h-7v1.5zm0-3h7V20h-7v1.5zM17 18h19v-1.5H17V18zm22-4H14v23c0 .348-.04.683-.116 1H37.5c.827 0 1.5-.673 1.5-1.5V14zm-28 5h-1a1 1 0 0 0-1 1v16.5c0 .685.174 1.5 1 1.5.461 0 1-.262 1-1V19zm31-6.5v24c0 2.481-2.019 4.5-4.5 4.5H10c-2.355 0-4-1.851-4-4.5V20c0-2.206 1.794-4 4-4h1v-3.5a1.5 1.5 0 0 1 1.5-1.5h28a1.5 1.5 0 0 1 1.5 1.5zM17 28h10.478v-8H17v8zm0 7h19v-1.5H17V35zm0-3.5h19V30H17v1.5z" }))));
  }
  static get is() { return "utrecht-icon-actueel"; }
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