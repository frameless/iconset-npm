'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9258e066.js');
const v4 = require('./v4-8e8d6fbc.js');

const UtrechtIconAgenda = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4.v4();
    return (index.h("utrecht-icon-container", null, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? index.h("title", { id: id }, this.iconTitle) : index.h("title", { id: id }, "Agenda"), index.h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M21 10h6V7h-6v3zm14 6.5H13v21c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5v-21zm3 21c0 2.481-2.019 4.5-4.5 4.5h-19a4.505 4.505 0 0 1-4.5-4.5V7h5v3h-2v3.5h21.999V10H33V7h4.999L38 37.5zM16.5 11h3V6h-3v5zm12 0h3V6h-3v5zm.5 24h3v-3h-3v3zm-13 0h3v-3h-3v3zm13-6h3v-3h-3v3zm-6.5 0h3v-3h-3v3zM16 29h3v-3h-3v3zm13-6h3v-3h-3v3zm-6.5 0h3v-3h-3v3zM16 23h3v-3h-3v3zm7.415 12.469l-2-2.5 1.17-.938 1.36 1.699 2.431-3.646 1.248.832-3 4.5a.75.75 0 0 1-.591.333L24 35.75a.752.752 0 0 1-.585-.281z" }))));
  }
};

exports.utrecht_icon_agenda = UtrechtIconAgenda;
