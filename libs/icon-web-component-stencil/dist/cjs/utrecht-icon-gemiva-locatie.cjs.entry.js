'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9258e066.js');
const v4 = require('./v4-8e8d6fbc.js');

const UtrechtIconGemivaLocatie = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4.v4();
    return (index.h("utrecht-icon-container", null, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? index.h("title", { id: id }, this.iconTitle) : index.h("title", { id: id }, "Gemiva Locatie"), index.h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M34 26.5h6.5V23H34v3.5zm2-6.5H12v19h5v-1.5h3.5V29h7v8.5H31V39h1.5V21.75a.75.75 0 0 1 .75-.75c.326 0 .596.21.7.5H42V28h-8v11h2v-9.5h3V39h3v3H6v-3h3V20H6v-3h4l2-3h24l2 3h4v3h-6zm-22 6.5h5V22h-5v4.5zm7.5 0h5V22h-5v4.5zm7.5 0h2V22h-2v4.5zm0 7h2V29h-2v4.5zm-15 0h5V29h-5v4.5z" }))));
  }
};

exports.utrecht_icon_gemiva_locatie = UtrechtIconGemivaLocatie;