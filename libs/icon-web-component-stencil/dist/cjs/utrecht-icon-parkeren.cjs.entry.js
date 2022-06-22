'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9258e066.js');
const v4 = require('./v4-8e8d6fbc.js');

const UtrechtIconParkeren = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4.v4();
    return (index.h("utrecht-icon-container", null, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? index.h("title", { id: id }, this.iconTitle) : index.h("title", { id: id }, "Parkeren"), index.h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M25 23h-4v-7h4c1.654 0 3 1.57 3 3.5S26.654 23 25 23zm0-10h-7v19.5h3V26h4c3.309 0 6-2.916 6-6.5S28.309 13 25 13zm11 21.5c0 .827-.673 1.5-1.5 1.5h-21c-.827 0-1.5-.673-1.5-1.5v-24c0-.827.673-1.5 1.5-1.5h21c.827 0 1.5.673 1.5 1.5v24zM34.5 6h-21A4.505 4.505 0 0 0 9 10.5v24c0 2.481 2.019 4.5 4.5 4.5H21v3h6v-3h7.5c2.481 0 4.5-2.019 4.5-4.5v-24C39 8.019 36.981 6 34.5 6z" }))));
  }
};

exports.utrecht_icon_parkeren = UtrechtIconParkeren;