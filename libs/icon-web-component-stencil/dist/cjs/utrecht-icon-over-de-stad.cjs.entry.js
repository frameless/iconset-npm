'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9258e066.js');
const v4 = require('./v4-8e8d6fbc.js');

const UtrechtIconOverDeStad = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4.v4();
    return (index.h("utrecht-icon-container", null, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? index.h("title", { id: id }, this.iconTitle) : index.h("title", { id: id }, "Over De Stad"), index.h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M12 7v10.5H6V41h10.5l.001-8.579-1.563 1.25-1.876-2.341L24 22.579l4.5 3.6V24h2.999v4.579l3.438 2.751-1.875 2.341-1.563-1.25V41H42V18h-4.172v-6.999h-10.8V19.5H25.5V7H12zm1.502 15.5h1.499V8.003h-1.499V22.5zM28.5 14H32v-1.5h-3.5V14zM21 36h5.999v-4H21v4z" }))));
  }
};

exports.utrecht_icon_over_de_stad = UtrechtIconOverDeStad;
