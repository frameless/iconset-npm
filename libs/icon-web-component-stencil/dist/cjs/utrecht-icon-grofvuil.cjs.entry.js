'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9258e066.js');
const v4 = require('./v4-8e8d6fbc.js');

const UtrechtIconGrofvuil = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4.v4();
    return (index.h("utrecht-icon-container", null, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? index.h("title", { id: id }, this.iconTitle) : index.h("title", { id: id }, "Grofvuil"), index.h("path", { fill: "currentColor", d: "M39.76 21.77v.69c-2.07982.011-3.76003 1.70015-3.76 3.78v.75h-4.53V24l2-6H36c2.0782.00551 3.76 1.69179 3.76 3.77zM27 28.49H10.53v-2.3c-.048-1.21622-1.04287-2.18027-2.26-2.19-1.17706-.06854-2.18973.82368-2.2701 2v6.16c-.01124 1.2439.97657 2.26732 2.2201 2.3H9v3h3v-3h15v-5.97zm15-2.46c-.08029-1.16811-1.08053-2.05722-2.25-2-1.21697.01527-2.2074.98368-2.25 2.2v2.3h-6.03v6H36v3h3v-3h.79c1.24353-.03268 2.23134-1.0561 2.22-2.3l.05-6.23-.06.03zM30 24h-1.5v16.49h-4.45V42h10.48v-1.5H30V24zm-18 2.24v.75h15V23.3l1.78-5.3h-8.71l1.43 4.49H18v3h-.57L15.59 21H19l-1-3h-6c-2.08764 0-3.78 1.69236-3.78 3.78v.69A3.77 3.77 0 0112 26.24zm16.76-3.71h1.57l3.36-9.69 5.76 2-2.22-7.27L33 6.09l-6.24 4.32 5.63 2-3.63 10.12z" }))));
  }
};

exports.utrecht_icon_grofvuil = UtrechtIconGrofvuil;
