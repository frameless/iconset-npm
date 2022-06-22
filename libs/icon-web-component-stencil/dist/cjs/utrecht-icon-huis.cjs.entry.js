'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9258e066.js');
const v4 = require('./v4-8e8d6fbc.js');

const UtrechtIconHuis = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4.v4();
    return (index.h("utrecht-icon-container", null, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? index.h("title", { id: id }, this.iconTitle) : index.h("title", { id: id }, "Huis"), index.h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M24 8L6 23.875l1.985 2.25 4.01-3.536V40h17.007v-2.999H14.996V19.942L24 12.001l10.003 8.824V40h3.003V23.471l3.009 2.654L42 23.875l-4.994-4.404v-7.47h-3.003v4.823L24 8zm-4.002 24h9.005v-6.5h-9.005V32z" }))));
  }
};

exports.utrecht_icon_huis = UtrechtIconHuis;
