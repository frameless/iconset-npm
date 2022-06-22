import { Component, h, Prop } from '@stencil/core';
import { v4 } from 'uuid';
export class UtrechtIconParkeervoorzieningGehandicapten {
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null,
      h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id },
        this.iconTitle ? (h("title", { id: id }, this.iconTitle)) : (h("title", { id: id }, "Parkeervoorziening Gehandicapten")),
        h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M30.519 30.253l.575 1.994c-.963 1.21-2.43 2.003-4.094 2.003A5.256 5.256 0 0 1 21.75 29 5.255 5.255 0 0 1 25 24.15v1.69A3.744 3.744 0 0 0 23.25 29 3.755 3.755 0 0 0 27 32.75c1.626 0 3-1.047 3.519-2.497zM26.999 19.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm5.873 8.084L34 31.5l-1.441.415L31.43 28h-3.432a1.5 1.5 0 0 1-1.5-1.5V23a1 1 0 0 1 1-1H29a1 1 0 0 1 1 1v3.5h1.56c.668 0 1.128.442 1.313 1.084zM36 34.5c0 .827-.672 1.5-1.5 1.5h-21c-.827 0-1.5-.673-1.5-1.5v-24c0-.828.673-1.5 1.5-1.5h21a1.5 1.5 0 0 1 1.5 1.5v24zM34.5 6h-21A4.505 4.505 0 0 0 9 10.5v24c0 2.481 2.019 4.5 4.5 4.5H21v3h6v-3h7.5c2.482 0 4.5-2.019 4.5-4.5v-24C39 8.018 36.982 6 34.5 6zM17 14h2.654c1.018 0 1.846.995 1.846 2.217 0 1.238-.845 2.283-1.846 2.283H17V14zm7.5 2.217C24.5 13.34 22.327 11 19.654 11H14v14.5h3v-4h2.654c2.673 0 4.846-2.37 4.846-5.283z" }))));
  }
  static get is() { return "utrecht-icon-parkeervoorziening-gehandicapten"; }
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
