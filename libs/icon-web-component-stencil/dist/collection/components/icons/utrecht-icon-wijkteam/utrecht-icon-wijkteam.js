import { Component, h, Prop } from '@stencil/core';
import { v4 } from 'uuid';
export class UtrechtIconWijkteam {
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null,
      h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id },
        this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Wijkteam"),
        h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M14 17a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm3.73 8.58c.3-.91 1.02-3.07 2.75-4.41a2.993 2.993 0 0 0-2.98-2.67H11c-1.66 0-3 1.34-3 3l.04 5.5h9.32l.27-1.09c.03-.11.06-.22.1-.33M29 18.5a5.51 5.51 0 0 1-5.5-5.5c0-.34.03-.66.09-.98.82.66 1.7.98 2.91.98 2 0 4-1 4.5-3 0 1.82 1.71 3.16 3.48 3.44A5.503 5.503 0 0 1 29 18.5m0 1.5c3.86 0 7-3.14 7-7s-3.14-7-7-7-7 3.14-7 7 3.14 7 7 7m-4.01 7.53c1.04.1 2.51.47 2.51.47l-.48.24-1.48.76-1.04.34-2 .66s-.06-.29-.04-.67c.03-.75.37-1.83 2.04-1.83.14 0 .31.01.49.03zm6.97-.23c.31-.16.66-.26 1.04-.28.36-.02.76.04 1.17.21.19.08.36.17.5.27 1.17.8.54 2 .54 2L33 29.03l-2.5-.53s.05-.07.16-.19c.17-.2.49-.53.92-.81.12-.07.24-.14.38-.2zm8.03-.73c-.01-.15-.04-.3-.07-.45a5.973 5.973 0 0 0-5.84-4.62H24c-.78 0-1.45.19-2 .49a3.26 3.26 0 0 0-.75.51 4.6 4.6 0 0 0-.75.79c-.75.99-1.14 2.14-1.35 2.76l-.06.22-.18.73-.19.75-.19.75-.94 3.77c-.24.96.01 1.98.66 2.72a3.017 3.017 0 0 0 2.62.99l1.13-.14V42h14v-6.27l.81.19c.23.05.46.08.69.08.71 0 1.41-.25 1.96-.73a2.995 2.995 0 0 0 1.03-2.51l-.5-6.19z" }))));
  }
  static get is() { return "utrecht-icon-wijkteam"; }
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
