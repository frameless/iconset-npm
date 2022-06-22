'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9258e066.js');
const v4 = require('./v4-8e8d6fbc.js');

const UtrechtIconAfval = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4.v4();
    return (index.h("utrecht-icon-container", null, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? index.h("title", { id: id }, this.iconTitle) : index.h("title", { id: id }, "Afval"), index.h("path", { fill: "currentColor", "fill-rule": "evenodd", d: "M17.01 37.995c0-.554-.451-1.005-1.005-1.005-.554 0-1.005.451-1.005 1.005 0 .554.451 1.005 1.005 1.005.554 0 1.005-.451 1.005-1.005zm3 0A4.01 4.01 0 0 1 16.005 42 4.01 4.01 0 0 1 12 37.995a4.01 4.01 0 0 1 4.005-4.005 4.01 4.01 0 0 1 4.005 4.005zm9.386-1.275A1.51 1.51 0 0 1 27.912 38H21.51a5.472 5.472 0 0 1-.898 3h7.3a4.526 4.526 0 0 0 4.451-3.841L35.794 14h-3.032l-3.366 22.72zM36 9.5V9c0-1.654-1.345-3-3-3H16c-1.654 0-3 1.346-3 3v.5h-3v3h6V9h17v3.392l-.015.108H38v-3h-2zM13.091 17H10v-3h3.091a3.005 3.005 0 0 1 2.994 2.812l.987 15.784a5.438 5.438 0 0 0-1.067-.106c-.678 0-1.324.129-1.924.354L13.091 17z" }))));
  }
};

exports.utrecht_icon_afval = UtrechtIconAfval;
