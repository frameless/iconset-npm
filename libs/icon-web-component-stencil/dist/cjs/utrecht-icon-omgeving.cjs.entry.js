'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9258e066.js');
const v4 = require('./v4-8e8d6fbc.js');

const UtrechtIconOmgeving = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4.v4();
    return (index.h("utrecht-icon-container", null, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? index.h("title", { id: id }, this.iconTitle) : index.h("title", { id: id }, "Omgeving"), index.h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M31.337 27.72c6.591 1.052 10.477 3.375 10.477 6.334 0 4.527-9.008 6.896-17.907 6.896C15.01 40.95 6 38.58 6 34.054c0-2.942 3.843-5.255 10.364-6.314l.011 2.74.001.284c-5.08.816-7.184 2.034-7.184 3.273 0 1.619 4.88 3.913 14.716 3.913 9.834 0 14.612-2.408 14.612-3.896 0-1.171-2.048-2.47-7.182-3.303zm-4.5-9.933a3 3 0 013 3v9.688h-1.486v3.892s-2.322.396-4.555.396c-2.233 0-4.472-.396-4.472-.396v-3.892h-1.45l-.036-9.688a3 3 0 013-3zM23.765 8a4.5 4.5 0 014.495 4.495 4.5 4.5 0 01-4.495 4.495 4.5 4.5 0 01-4.495-4.495A4.5 4.5 0 0123.764 8zm1.281 2.689c-.33 1.217-1.44 1.932-2.761 1.932-.566 0-1.069-.091-1.513-.32-.004.065-.02.128-.02.194a3.016 3.016 0 003.013 3.012 3.006 3.006 0 002.992-2.825 2.43 2.43 0 01-1.711-1.993z" }))));
  }
};

exports.utrecht_icon_omgeving = UtrechtIconOmgeving;