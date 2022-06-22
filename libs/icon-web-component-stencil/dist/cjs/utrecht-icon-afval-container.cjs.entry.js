'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9258e066.js');
const v4 = require('./v4-8e8d6fbc.js');

const UtrechtIconAfvalContainer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4.v4();
    return (index.h("utrecht-icon-container", null, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? index.h("title", { id: id }, this.iconTitle) : index.h("title", { id: id }, "Afval Container"), index.h("path", { fill: "currentColor", d: "M37.44 23.15V19a8.33 8.33 0 00-8.29-8.47H27V9a1.48 1.48 0 00-1.48-1.48h-3A1.48 1.48 0 0021 9v1.48h-2A8.48 8.48 0 0010.55 19V37.4h26.89zM25.47 9v1.48h-3V9zm3 12h-9v-6h9zM6.01 39H42v3H6.01z" }))));
  }
};

exports.utrecht_icon_afval_container = UtrechtIconAfvalContainer;
