'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9258e066.js');
const v4 = require('./v4-8e8d6fbc.js');

const UtrechtIconGladheid = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4.v4();
    return (index.h("utrecht-icon-container", null, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? index.h("title", { id: id }, this.iconTitle) : index.h("title", { id: id }, "Gladheid"), index.h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M25 20.45L21.69 17a1.45 1.45 0 0 0-1-.45 1.48 1.48 0 0 0-1.1.53l-.36.42-2-1.95a1.47 1.47 0 0 0-1-.47 1.48 1.48 0 0 0-1.1.53l-4.63 5.86H25v-1.02zM18 29a4.5 4.5 0 1 0 4.5 4.5A4.51 4.51 0 0 0 18 29zm0 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm19-6a4.5 4.5 0 1 0 4.5 4.5A4.51 4.51 0 0 0 37 29zm0 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" }), index.h("circle", { fill: "currentColor", cx: "8.75", cy: "34.72", r: "1" }), index.h("circle", { fill: "currentColor", cx: "7.75", cy: "37.22", r: "1" }), index.h("circle", { fill: "currentColor", cx: "10.25", cy: "32.22", r: "1" }), index.h("circle", { fill: "currentColor", cx: "11.25", cy: "34.72", r: "1" }), index.h("circle", { fill: "currentColor", cx: "10.25", cy: "37.22", r: "1" }), index.h("path", { fill: "currentColor", d: "M31.18 32h-7.37c.122.48.186.974.19 1.47a6 6 0 0 1-.21 1.53h7.42a6 6 0 0 1-.21-1.53c0-.495.061-.989.18-1.47zm6.32-9l-2.69-7.46h-2.32v-.74a.76.76 0 1 0-1.51 0v.74h-4.35V23H10v7.56h2.77a6 6 0 0 1 10.43 0h8.58a6 6 0 0 1 10.43 0H43V24l-5.5-1zm-8 .05v-5.39h3.36L34.63 23l-5.13.05z" }))));
  }
};

exports.utrecht_icon_gladheid = UtrechtIconGladheid;
