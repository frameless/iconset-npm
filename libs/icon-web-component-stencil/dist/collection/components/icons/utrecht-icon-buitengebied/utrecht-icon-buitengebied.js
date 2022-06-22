import { Component, h, Prop } from '@stencil/core';
import { v4 } from 'uuid';
export class UtrechtIconBuitengebied {
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null,
      h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id },
        this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Buitengebied"),
        h("path", { fill: "currentColor", d: "M41.9 41.9h-17s-4.7-2.6-4.7-7.6c0-2.5 3.1-6.5 8.2-7.4 2.4-.4 2.7-2.3 1.5-2.9 3 0 5.7 1.3 5.7 3.6 0 2.6-6.2 1.4-6.2 5s12.5 9.3 12.5 9.3zM23.3 22.6c1-1 1.3-2.5 1-3.7.7-.6 1.2-1.7 1.2-2.8 0-1.2-.5-2.2-1.2-2.9v-.5c0-1.8-1-4.7-4.9-5h-.3c-.8-2.1-6.6-2.9-7.4.8-.2 0-.4-.1-.7-.1-2.1 0-3.9 1.9-3.9 4.1v.5c-.6.9-1.1 1.9-1.1 3.1 0 1.2.5 2.2 1.2 2.8-.3 1.2 0 2.6 1 3.7 1.1 1.2 4.6 1.5 5.8.9l-.1 2.9-1.9-.9-1.3 2.7 3.1 1.4-.3 6.4H18l-.5-12.5c1.2.6 4.7.3 5.8-.9zM29 18l-.9-1.2 6.5-4.8 3 2.3V13H39v2.4l2 1.5-.9 1.1-1-.8v5.3H30v-5.2l-1 .7zm4 1.5h3v-2.3h-3v2.3z" }))));
  }
  static get is() { return "utrecht-icon-buitengebied"; }
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
