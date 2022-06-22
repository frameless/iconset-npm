'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9258e066.js');
const v4 = require('./v4-8e8d6fbc.js');

const UtrechtIconKerstbomen = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4.v4();
    return (index.h("utrecht-icon-container", null, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? index.h("title", { id: id }, this.iconTitle) : index.h("title", { id: id }, "Kerstbomen"), index.h("path", { fill: "currentColor", d: "M8.63 20.04l-.96 1.49h16.71l-1.02-2.07 1.64.27-1.74-3.87 1.13.18-2.36-5.24-3.79 4.26 1.14.18-2.8 3.15 1.65.26-2.59 2.62-1.87-1.95 1.65-.24-2.74-3.19 1.13-.16-3.71-4.33-2.45 5.19 1.14-.16-1.81 3.84z" }), index.h("path", { fill: "currentColor", d: "M37.48 23l-2.69-7.5h-2.27v-.74a.75.75 0 1 0-1.5 0v.74h-4.55V23H7v7.5h.81a6 6 0 0 1 10.38 0h13.6a6 6 0 0 1 10.38 0H43V24l-5.52-1zm-8 .05v-5.39h3.36L34.63 23l-5.15.05zM18.78 32a5.73 5.73 0 0 1 0 3h12.4a5.73 5.73 0 0 1 0-3h-12.4z" }), index.h("path", { fill: "currentColor", d: "M13 29a4.5 4.5 0 1 0 4.5 4.5A4.51 4.51 0 0 0 13 29zm0 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm24-6a4.5 4.5 0 1 0 4.5 4.5A4.51 4.51 0 0 0 37 29zm0 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" }))));
  }
};

exports.utrecht_icon_kerstbomen = UtrechtIconKerstbomen;
