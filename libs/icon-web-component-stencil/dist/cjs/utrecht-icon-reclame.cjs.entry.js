'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9258e066.js');
const v4 = require('./v4-8e8d6fbc.js');

const UtrechtIconReclame = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4.v4();
    return (index.h("utrecht-icon-container", null, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? index.h("title", { id: id }, this.iconTitle) : index.h("title", { id: id }, "Reclame"), index.h("path", { fill: "currentColor", d: "M34 9H14l-3.8 24.08027L9.3 39h3l.9-5.91973h14L26.3 39h3l3.2-20.06689L34 30.07023h-1.7l-.5 3.01004h2.7L35.3 39h3L34 9zm-6.4 21.07023H13.7l1.5-9.53177 1.3-8.52843h13.9l-2.8 18.0602zm-1-12.04013h-8.1l.5-3.01003h8.1l-.5 3.01003zm-4 6.02007h-5.1l.5-3.01004h5.1l-.5 3.01004z" }))));
  }
};

exports.utrecht_icon_reclame = UtrechtIconReclame;
