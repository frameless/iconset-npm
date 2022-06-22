import { Component, h, Prop } from '@stencil/core';
import { v4 } from 'uuid';
export class UtrechtIconNatuurLandschap {
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null,
      h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id },
        this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Natuur Landschap"),
        h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M28.411 24.022c3.433 0 7.256.967 7.256 3.614 0 2.646-6.203 1.411-6.203 4.991 0 3.581 12.405 9.353 12.405 9.353h-17s-4.709-2.647-4.709-7.627c0-.204.028-.419.068-.639a5.4 5.4 0 002.315-.965 5.39 5.39 0 002.173-3.547c.05-.313.063-.627.06-.938a11.638 11.638 0 013.633-1.289c2.918-.517 2.844-2.953.002-2.953zm-12.658 8.255c.227.203.473.38.728.543v9.14h-1.5v-9.107c.272-.17.532-.36.772-.576zm-9.489.97a5.593 5.593 0 016.996 6.995 5.593 5.593 0 01-6.996-6.996zm9.49-20.043a3.933 3.933 0 013.843 4.76 3.947 3.947 0 011.975-.534 3.935 3.935 0 01.402 7.847 3.933 3.933 0 11-6.221 4.52 3.929 3.929 0 01-3.6 2.342 3.934 3.934 0 01-2.621-6.862 3.933 3.933 0 112.376-7.314 3.934 3.934 0 013.845-4.759zm0 6.993a3.059 3.059 0 10-.003 6.118 3.059 3.059 0 00.002-6.118zM35.253 6l3.593 5.494H37.05l3.592 5.495h-2.694l4.04 5.496h-5.982v1.494h-1.501v-1.494h-5.983l4.04-5.496h-2.693l3.59-5.495h-1.795l3.59-5.494z" }))));
  }
  static get is() { return "utrecht-icon-natuur-landschap"; }
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