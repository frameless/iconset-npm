'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9258e066.js');
const v4 = require('./v4-8e8d6fbc.js');

const UtrechtIconEvenementen = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4.v4();
    return (index.h("utrecht-icon-container", null, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? index.h("title", { id: id }, this.iconTitle) : index.h("title", { id: id }, "Evenementen"), index.h("path", { fill: "currentColor", d: "M29.92 6.06l-5.94 3.253V5.99zM42 19.35L40.89 19a52.64 52.64 0 0 1-16-7.74l-.89-.67-.91.71A52.78 52.78 0 0 1 7.07 19L6 19.35v5.692h2.69L7.44 42H40.5l-1-16.948H42V19.35zM9 21.61a56.38 56.38 0 0 0 15-7.27 56.38 56.38 0 0 0 15 7.27v.444H9v-.444zM37.32 39h-6.933a4.51 4.51 0 0 1-4.5-4.5V27s-3.717 9.22-3.757 9.31A4.52 4.52 0 0 1 18 39h-7.3l1-14.063h24.81L37.32 39z" }))));
  }
};

exports.utrecht_icon_evenementen = UtrechtIconEvenementen;