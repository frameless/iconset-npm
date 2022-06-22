'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9258e066.js');
const v4 = require('./v4-8e8d6fbc.js');

const UtrechtIconIdkaart = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4.v4();
    return (index.h("utrecht-icon-container", null, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? index.h("title", { id: id }, this.iconTitle) : index.h("title", { id: id }, "Idkaart"), index.h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M27 30h6v-1.5h-6V30zm-10.518-6a3 3 0 1 0 .036-6 3 3 0 0 0-.036 6zM18 25.5h-3a3 3 0 0 0-3 3V30h9v-1.5a3 3 0 0 0-3-3zm21-11c0-.827-.673-1.5-1.5-1.5h-12v3h-3v-3h-12c-.827 0-1.5.673-1.5 1.5v17c0 .827.673 1.5 1.5 1.5h27c.827 0 1.5-.673 1.5-1.5v-17zm3 0v17c0 2.481-2.019 4.5-4.5 4.5h-27A4.505 4.505 0 0 1 6 31.5v-17c0-2.481 2.019-4.5 4.5-4.5h27c2.481 0 4.5 2.019 4.5 4.5zm-15 11h9V24h-9v1.5zm0-4.5h9v-1.5h-9V21z" }))));
  }
};

exports.utrecht_icon_idkaart = UtrechtIconIdkaart;