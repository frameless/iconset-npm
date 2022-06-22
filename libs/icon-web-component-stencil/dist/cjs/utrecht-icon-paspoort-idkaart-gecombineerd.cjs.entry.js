'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9258e066.js');
const v4 = require('./v4-8e8d6fbc.js');

const UtrechtIconPaspoortIdkaartGecombineerd = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4.v4();
    return (index.h("utrecht-icon-container", null, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? (index.h("title", { id: id }, this.iconTitle)) : (index.h("title", { id: id }, "Paspoort Idkaart Gecombineerd")), index.h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M13 35.987h3.5v-1.5H13v1.5zm10.84-28.47a.742.742 0 0 1 .63.149c.178.143.28.356.28.584v1.737H12.865l10.975-2.47zm-7.34 31.47H9v-26h16.5c.827 0 1.5.672 1.5 1.5v9h3v-9c0-2.225-1.626-4.065-3.75-4.424V8.25a2.24 2.24 0 0 0-.84-1.753 2.239 2.239 0 0 0-1.89-.444L6 9.987v32h11.669a4.466 4.466 0 0 1-1.169-2.998v-.002zm6-18.5v1h1v1l-.5 1h-2c-2.233 0-4.077 1.638-4.427 3.775H15.5L14 28.487l-2-1.5.5-1 1.5.5 1-1-.988-.56-.012-.94 2-5 1.5.5s-.122.733-.088.8c.033.068.504.954.504.954l-.605 1.05 1.648-.832.47-1.91-1.21-.216.201-1.616.907-.908 3.173-.322.5 1h1l-.5 3h-1zm1 10.99a1.5 1.5 0 1 1 3 .019 1.5 1.5 0 0 1-3-.018zm4 4.01v2h-5v-2a1.5 1.5 0 0 1 1.5-1.5h2a1.5 1.5 0 0 1 1.5 1.5zm3.5 2h5v-1.5h-5v1.5zm0-3h6.5v-1.5H31v1.5zm0-3h6.5v-1.5H31v1.5zm-10 7.502V27.987h7.5v2H30v-2h8.989l.01 11.023L21 38.989zm20.989-11.005a3.004 3.004 0 0 0-3-2.997H21c-1.654 0-3 1.345-3 3v11.002a3.004 3.004 0 0 0 2.996 3l17.999.02h.004c.8 0 1.553-.311 2.119-.877.569-.566.881-1.32.881-2.124l-.01-11.024z" }))));
  }
};

exports.utrecht_icon_paspoort_idkaart_gecombineerd = UtrechtIconPaspoortIdkaartGecombineerd;
