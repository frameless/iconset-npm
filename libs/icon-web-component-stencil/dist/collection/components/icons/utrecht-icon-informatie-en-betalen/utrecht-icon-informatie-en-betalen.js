import { Component, h, Prop } from '@stencil/core';
import { v4 } from 'uuid';
export class UtrechtIconInformatieEnBetalen {
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null,
      h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id },
        this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Informatie En Betalen"),
        h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M24.952 20.142l-.479.786-.774-.473.396-.648s-.205-.096-.34-.18c-.116-.07-.337-.233-.337-.233l-.396.648-.725-.442.478-.786c-1.319-1.426-1.615-3.542-.555-5.278.34-.56.75-.974.75-.974l1.02 1.07s-.283.32-.52.709c-.61 1-.522 2.123.192 3.02l1.6-2.62.622.61-1.612 2.643s.158.125.315.22c.116.072.368.182.368.182l1.53-2.504.676.629-1.284 2.105c1.167.265 2.163-.24 2.754-1.208.334-.547.457-1.108.457-1.108l1.388.516s-.13.67-.573 1.397c-1.098 1.8-2.995 2.52-4.95 1.919zm.413 12.358c0 1.267.266 2.473.74 3.567l-1.96 3.215a1.5 1.5 0 0 1-2.062.499L6.718 30.405a1.498 1.498 0 0 1-.505-2.048L16.865 11h-3l-5.037 8h-.463a1.5 1.5 0 0 1-1.5-1.5v-8a1.5 1.5 0 0 1 1.5-1.5h31a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5H36.52l-2.764 4.53a8.954 8.954 0 0 0-4.448 1.53l3.7-6.06 1.86-3.05L26.752 11h-6.438l-3.74 6.129 2.516 1.535-1.563 2.56-2.515-1.534-5.453 8.936 12.805 7.813 3.074-5.04a9.084 9.084 0 0 0-.074 1.1zm-7.142-.894l4.166-6.83 2.561 1.564-4.167 6.829-2.56-1.563zm16.864-1.886c-.186.187-.426.28-.722.28s-.537-.093-.722-.28a.98.98 0 0 1-.278-.72.98.98 0 0 1 .278-.72c.185-.186.426-.28.722-.28s.536.094.722.28a.98.98 0 0 1 .278.72.98.98 0 0 1-.278.72zM33.365 37h2v-6h-2v6zm1-12a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15z" }))));
  }
  static get is() { return "utrecht-icon-informatie-en-betalen"; }
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