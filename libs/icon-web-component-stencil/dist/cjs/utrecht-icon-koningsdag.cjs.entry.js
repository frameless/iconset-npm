'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9258e066.js');
const v4 = require('./v4-8e8d6fbc.js');

const UtrechtIconKoningsdag = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4.v4();
    return (index.h("utrecht-icon-container", null, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? index.h("title", { id: id }, this.iconTitle) : index.h("title", { id: id }, "Koningsdag"), index.h("path", { fill: "currentColor", d: "M32 32.05V22.5L28 27l-4-5.5-4 5.5-4-4.5V35h16zM19 32l-1-1 1-1 1 1zm5 0l-1-1 1-1 1 1zm5 0l-1-1 1-1 1 1zm2.5-21h-3V6h3zM27 10h-6V7h6zm-7.5 1h-3V6h3zM38 15V7h-5v3h2v3.5H13V10h2V7h-5v30.5a4.51 4.51 0 0 0 4.5 4.5h19a4.51 4.51 0 0 0 4.5-4.5V15zm-3 22.5a1.5 1.5 0 0 1-1.5 1.5h-19a1.5 1.5 0 0 1-1.5-1.5v-21h22z" }))));
  }
};

exports.utrecht_icon_koningsdag = UtrechtIconKoningsdag;