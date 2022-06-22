import { Component, h, Prop } from '@stencil/core';
import { v4 } from 'uuid';
export class UtrechtIconMobiliteit {
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null,
      h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id },
        this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Mobiliteit"),
        h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M30.495 23.59c.396 0 .778.12 1.104.346.323.223.57.539.71.91l2.514 6.33-.003.002.008.012.303.81c.395-.09.803-.14 1.225-.14a5.54 5.54 0 015.54 5.54 5.54 5.54 0 11-8.17-4.877l-.3-.8-.717-1.806-3.178 7.768a.752.752 0 01-.695.465h-4.41a5.537 5.537 0 01-11.024-.75 5.54 5.54 0 017.115-5.31l1.567-3.467-.427-.64h1.803l.915 1.372 7.36-1.89-.825-2.078a.445.445 0 00-.415-.297h-1.96v-1.5zm5.86 9.77c-.235 0-.463.03-.687.068l1.39 3.709a.75.75 0 01-1.404.528l-1.39-3.704a4.027 4.027 0 00-1.95 3.439 4.045 4.045 0 004.042 4.04 4.044 4.044 0 004.04-4.04 4.044 4.044 0 00-4.04-4.04zm-17.413 0a4.044 4.044 0 00-4.04 4.04 4.044 4.044 0 004.04 4.04 4.042 4.042 0 003.965-3.29h-3.965a.749.749 0 01-.684-1.059l1.63-3.609a4.04 4.04 0 00-.946-.123zm4.123-3.266l-1.182 2.616a5.532 5.532 0 012.543 3.94h3.009l-4.37-6.556zm-1.808 4.003l-1.153 2.553h2.803a4.035 4.035 0 00-1.65-2.553zm10.166-5.004l-6.168 1.583 3.422 5.132 2.746-6.715zm5.723-1.983v2.374H35.96a1.187 1.187 0 010-2.374h1.187zm-13.968-2.015a.76.76 0 110 1.52h-3.033v-1.52zM20.39 7c.886 0 1.935.79 2.245 1.687l.807 2.787h1.24c.46 0 .835.312.835.7v.371c0 .328-.272.612-.653.683l-.33.061.512 1.23c.31.713.47 1.487.47 2.27v5.663c0 .567-.46 1.026-1.025 1.026h-1.762a1.026 1.026 0 01-1.026-1.026v-.412h.783v-1.543H8.972v1.543h.84v.412c0 .567-.458 1.026-1.025 1.026H7.026A1.026 1.026 0 016 22.452v-2.444l.006-3.23a5.702 5.702 0 01.465-2.252l.512-1.236-.33-.062c-.381-.07-.653-.355-.653-.683v-.372c0-.387.373-.699.834-.699h1.138l.703-2.729C9.012 7.715 9.98 7 10.989 7zm-2.378 10.565h-4.486v1.441h4.486v-1.44zm-9.08-3.072a1.506 1.506 0 000 3.011 1.505 1.505 0 000-3.01zm13.514 0a1.506 1.506 0 000 3.011 1.505 1.505 0 000-3.01zM20.39 8.5h-9.401c-.368 0-.752.293-.874.667l-.981 3.81h13.182l-1.111-3.836c-.096-.278-.581-.64-.815-.64z" }))));
  }
  static get is() { return "utrecht-icon-mobiliteit"; }
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
