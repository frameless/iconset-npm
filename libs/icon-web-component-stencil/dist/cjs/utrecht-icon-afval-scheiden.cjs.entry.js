'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9258e066.js');
const v4 = require('./v4-8e8d6fbc.js');

const UtrechtIconAfvalScheiden = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4.v4();
    return (index.h("utrecht-icon-container", null, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? index.h("title", { id: id }, this.iconTitle) : index.h("title", { id: id }, "Afval Scheiden"), index.h("circle", { fill: "currentColor", cx: "8.8", cy: "40.73", r: "1.27" }), index.h("path", { fill: "currentColor", d: "M13.83 20.12l-1.07 1.07a1.53 1.53 0 00-2.12 0l-4.1 4.1a1.53 1.53 0 000 2.12l1 1.05 7.34-7.34zM20.9 39.47a1.27 1.27 0 101.27 1.26 1.26 1.26 0 00-1.27-1.26z" }), index.h("ellipse", { fill: "currentColor", cx: "32.84", cy: "40.74", rx: "1.27", ry: "1.26" }), index.h("path", { fill: "currentColor", d: "M28.48 14.94A4.49 4.49 0 1024 10.46a4.49 4.49 0 004.48 4.48zm-3-4.67a3.26 3.26 0 001.49.31 2.69 2.69 0 002.75-1.93 2.43 2.43 0 001.69 2 3 3 0 01-5.95-.18 1.11 1.11 0 01.06-.2zM23.26 20.94a.73.73 0 01.74-.75v5.32h10.41v-5.64a3.23 3.23 0 00-3-3.36h-7.54a4.09 4.09 0 00-3.6 4.38 2.55 2.55 0 01-1.8 2.39c-.13.07-1.24.45-1.24.45l.92 2.82s1.07-.37 1.11-.37a5.53 5.53 0 004-5.24zM40.46 28.51A1.55 1.55 0 0038.92 27h-5.8a1.54 1.54 0 00-1.53 1.48V30l.52 8.08a3 3 0 01.74-.11 2.77 2.77 0 012.77 2.76 2.68 2.68 0 01-.33 1.27h3a1.33 1.33 0 001.33-1.19L40.44 30H42v-1.5zM8.07 38.08A2.48 2.48 0 018.8 38a2.77 2.77 0 012.76 2.76 2.72 2.72 0 01-.32 1.24h3a1.31 1.31 0 001.33-1.19l.9-12.3H7.53zM27 27h-5.8a1.54 1.54 0 00-1.53 1.48V30l.52 8a3 3 0 01.71 0 2.77 2.77 0 012.77 2.76 2.72 2.72 0 01-.32 1.24h3a1.33 1.33 0 001.33-1.19L28.5 30H30v-1.49h-1.5A1.55 1.55 0 0027 27z" }))));
  }
};

exports.utrecht_icon_afval_scheiden = UtrechtIconAfvalScheiden;