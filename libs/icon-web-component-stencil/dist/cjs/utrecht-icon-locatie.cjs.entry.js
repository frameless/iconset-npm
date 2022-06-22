'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9258e066.js');
const v4 = require('./v4-8e8d6fbc.js');

const UtrechtIconLocatie = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4.v4();
    return (index.h("utrecht-icon-container", null, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? index.h("title", { id: id }, this.iconTitle) : index.h("title", { id: id }, "Locatie"), index.h("path", { fill: "currentColor", d: "M31.4 13.7C31.4 9 28.5 6 23.9 6s-7.5 2.9-7.5 7.7c0 5.9 7.5 15.4 7.5 15.4s7.5-9.5 7.5-15.4zm-10.5-.2c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3zM42 17.9v24.2L29.9 39l-12 3L6 39V14.5l9.6 2.7c.4 1.2.8 2.3 1.4 3.5l-8-2.2v18.3l9 2.2 12-3 9 2.2v-18l-7.1-1.8c.4-1 .6-1.9.8-2.9l9.3 2.4z" }))));
  }
};

exports.utrecht_icon_locatie = UtrechtIconLocatie;
