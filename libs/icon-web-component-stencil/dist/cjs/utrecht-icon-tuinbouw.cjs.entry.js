'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9258e066.js');
const v4 = require('./v4-8e8d6fbc.js');

const UtrechtIconTuinbouw = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4.v4();
    return (index.h("utrecht-icon-container", null, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? index.h("title", { id: id }, this.iconTitle) : index.h("title", { id: id }, "Tuinbouw"), index.h("path", { fill: "currentColor", d: "M24 5.9L6 16.4V42h36V16.4L24 5.9zm9 8.8l3.2 1.9H33v-1.9zm-7.5-4.5l2.9 1.7h-2.9v-1.7zm0 3.2H31l.5.3v2.7h-6v-3zm-3-3.2v1.7h-2.9l2.9-1.7zm-5.9 3.5l.5-.3h5.5v3.1h-6v-2.8zm-1.5.9v1.9h-3.3l3.3-1.9zM9 39V19.5L13.5 39H9zm1.5-19.5H15V39l-4.5-19.5zM16.6 39V19.5h6V39h-6zm8.9 0V19.5h6V39h-6zm7.5 0V19.5L37.5 39H33zm1.5-19.5H39V39l-4.5-19.5z" }))));
  }
};

exports.utrecht_icon_tuinbouw = UtrechtIconTuinbouw;
