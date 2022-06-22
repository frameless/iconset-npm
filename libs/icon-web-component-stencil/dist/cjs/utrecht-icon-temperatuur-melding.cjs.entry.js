'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9258e066.js');
const v4 = require('./v4-8e8d6fbc.js');

const UtrechtIconTemperatuurMelding = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4.v4();
    return (index.h("utrecht-icon-container", null, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? index.h("title", { id: id }, this.iconTitle) : index.h("title", { id: id }, "Temperatuur Melding"), index.h("path", { fill: "currentColor", d: "M33.51 6a7.5 7.5 0 1 0-.02 15 7.5 7.5 0 0 0 .02-15zm.72 11.72a1 1 0 0 1-.72.28.94.94 0 0 1-.72-.28 1.07 1.07 0 0 1 0-1.44.94.94 0 0 1 .72-.28 1 1 0 0 1 .72 1.72zm.28-2.72h-2V9h2v6zM15 5.986c2.106 0 3.95 1.704 3.95 3.806v21.597c1.954 1.606 2.552 4.265 1.697 6.645A6 6 0 0 1 15 42a6 6 0 0 1-5.647-3.966c-.855-2.38-.317-5.039 1.638-6.645V9.792c0-2.102 1.903-3.806 4.009-3.806zm-.022 13.01c-.592-.005-.982.532-.999.99l.005 12.967c-1.455.398-2.154 1.841-1.958 3.372C12.222 37.855 13.494 39 15 39c1.506 0 2.778-1.144 2.974-2.675.196-1.53-.473-2.974-1.927-3.372l-.042-12.959c-.003-.456-.435-.991-1.027-.997z" }))));
  }
};

exports.utrecht_icon_temperatuur_melding = UtrechtIconTemperatuurMelding;