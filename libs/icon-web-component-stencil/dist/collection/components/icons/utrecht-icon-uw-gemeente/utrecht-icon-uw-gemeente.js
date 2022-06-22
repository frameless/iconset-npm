import { Component, h, Prop } from '@stencil/core';
import { v4 } from 'uuid';
export class UtrechtIconUwGemeente {
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null,
      h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id },
        this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Uw Gemeente"),
        h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M22.5 32h3v-2h-3v2zM20 28.5l.001 6H28v-5.992L24 25l-4 3.5zM34.5 23v11.5h-5v-6.671l-.511-.448-2.363-2.073a2.005 2.005 0 0 1 1.381-1.24C28.006 24.045 28 24.023 28 24a2 2 0 0 1 2-2c.249 0 .484.051.704.134A1.996 1.996 0 0 1 34.5 23zm-18.75 1.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zm4.829 1.5H18v-3l-2.265-5-2.235 4.952V34.5h5.001l-.001-6v-.681l.513-.448L20.579 26zm10.592-11.508h-.864v-3.458h1.105l.756 2.357.754-2.357H34v3.458h-.864v-.829l.099-1.6-.798 2.429h-.539l-.814-2.432.087 1.603v.829zm-3.472-1.911c.023-.615.246-.922.656-.922.209 0 .384.088.497.262.113.175.197.43.197.767v.156c0 .328-.086.58-.197.756a.582.582 0 0 1-.505.262.54.54 0 0 1-.491-.267c-.11-.178-.163-.433-.163-.765l.006-.249zm-.121 1.72c.224.133.481.199.769.199.289 0 .548-.068.773-.206.226-.137.402-.333.526-.587.122-.255.189-.547.189-.877v-.156c-.079-.326-.071-.615-.196-.867a1.397 1.397 0 0 0-1.299-.787c-.29 0-.55.068-.778.207a1.36 1.36 0 0 0-.526.587 2 2 0 0 0-.187.878v.191c0 .32.077.602.202.849s.304.436.527.569zm-2.851.191h-.865v-3.458h.865v1.526l.27-.447.717-1.079h1.01l-1.145 1.533 1.145 1.925h-.968l-.708-1.281-.321.349v.932zm-1.258 0H21.19v-3.458h.865v2.75h1.414v.708zm-2.672 0h-2.358v-3.458h2.358v.707h-1.571v.707h1.336v.551h-1.336v.785h1.571v.708zm-6.075 0L14 11.034h.812l.388 2.124.466-2.124h.693l.472 2.124.389-2.124h.809l-.718 3.458h-.847l-.454-1.931-.445 1.931h-.843zM36 34.5c0 .827-.673 1.5-1.5 1.5h-21c-.827 0-1.5-.673-1.5-1.5v-24c0-.827.673-1.5 1.5-1.5h21c.827 0 1.5.673 1.5 1.5v24zM34.5 6h-21A4.505 4.505 0 0 0 9 10.5v24c0 2.481 2.019 4.5 4.5 4.5H21v3h6v-3h7.5c2.481 0 4.5-2.019 4.5-4.5v-24C39 8.019 36.981 6 34.5 6z" }))));
  }
  static get is() { return "utrecht-icon-uw-gemeente"; }
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
