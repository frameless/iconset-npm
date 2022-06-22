'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9258e066.js');
const v4 = require('./v4-8e8d6fbc.js');

const UtrechtIconVergunningAlgemeen = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4.v4();
    return (index.h("utrecht-icon-container", null, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? index.h("title", { id: id }, this.iconTitle) : index.h("title", { id: id }, "Vergunning Algemeen"), index.h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M25.577 14.526l2.846.948-3 9a1.5 1.5 0 0 1-1.34 1.024L24 25.5a1.5 1.5 0 0 1-1.36-.871l-3-6.5 2.723-1.257 1.413 3.06 1.802-5.406zM21 39v-5.5a1.5 1.5 0 0 0-1.5-1.5H14V9h20l.002 30H21zm-5.024-4H18v2.032L15.976 35zM34 6H14c-1.654 0-3 1.346-3 3v24.102c0 .742.288 1.44.812 1.968l6.067 6.092A2.873 2.873 0 0 0 19.9 42H34c1.654 0 3-1.346 3-3V9c0-1.654-1.346-3-3-3z" }))));
  }
};

exports.utrecht_icon_vergunning_algemeen = UtrechtIconVergunningAlgemeen;
