'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9258e066.js');
const v4 = require('./v4-8e8d6fbc.js');

const UtrechtIconOverDeGemeente = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4.v4();
    return (index.h("utrecht-icon-container", null, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? index.h("title", { id: id }, this.iconTitle) : index.h("title", { id: id }, "Over De Gemeente"), index.h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M25.75 16.5c0-.965-.785-1.75-1.75-1.75s-1.75.785-1.75 1.75.785 1.75 1.75 1.75 1.75-.785 1.75-1.75zm1.5 0A3.254 3.254 0 0 1 24 19.75a3.254 3.254 0 0 1-3.25-3.25A3.254 3.254 0 0 1 24 13.25a3.254 3.254 0 0 1 3.25 3.25zM29.5 19h5v-5h-5v5zm0 8h5v-5h-5v5zm-16-8h5v-5h-5v5zm0 8h5v-5h-5v5zm0 7.5h5v-5h-5v5zM36 39V11.4H12V39h5v-1.5h3v-8h3v8h2v-8h3v8h3V39h5zm6 0v3H6v-3h3V8.4h5V6h20v2.4h5V39h3zM21.5 27h5v-5h-5v5zm8 7.5h5v-5h-5v5z" }))));
  }
};

exports.utrecht_icon_over_de_gemeente = UtrechtIconOverDeGemeente;
