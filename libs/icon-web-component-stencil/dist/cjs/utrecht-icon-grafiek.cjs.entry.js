'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9258e066.js');
const v4 = require('./v4-8e8d6fbc.js');

const UtrechtIconGrafiek = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4.v4();
    return (index.h("utrecht-icon-container", null, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? index.h("title", { id: id }, this.iconTitle) : index.h("title", { id: id }, "Grafiek"), index.h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M36.054 26.434v15.047h-6.055V26.434h6.055zm-18.055 4.547v10.5H12v-10.5h5.999zm9-10.556v21.002l-5.944.054V20.48L27 20.425zM34.41 7v6.33l-2.415-2.415-6.648 6.638-4.221-4.222-6.331 6.33-1.488-1.487 7.819-7.83 4.22 4.222 5.15-5.15L28.079 7h6.33z" }))));
  }
};

exports.utrecht_icon_grafiek = UtrechtIconGrafiek;
