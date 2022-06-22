'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9258e066.js');
const v4 = require('./v4-8e8d6fbc.js');

const UtrechtIconNieuwsbrief = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4.v4();
    return (index.h("utrecht-icon-container", null, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? index.h("title", { id: id }, this.iconTitle) : index.h("title", { id: id }, "Nieuwsbrief"), index.h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M40.874 18.657l-4.176-3.34-.036-5.484h-6.818l-3.97-3.176a2.996 2.996 0 0 0-3.748 0l-3.97 3.176h-6.994l.036 5.567-4.072 3.257A3.001 3.001 0 0 0 6 21v18a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V21c0-.911-.414-1.773-1.126-2.343zM14.5 24H24v-7.5h-9.5V24zm12-6h7v-1.5h-7V18zm0 3h7v-1.5h-7V21zm0 3h7v-1.5h-7V24zm-12-9h19v-1.5h-19V15zM39 38.593l-10.302-8.251L39 21.832v16.76zM9.846 39l13.56-10.176a.95.95 0 0 1 1.145.012L37.243 39H9.846zM9 21.832l10.169 8.4L9 37.865V21.832zm2.224-2.61l.017 2.624-1.623-1.341 1.606-1.283zm23.947-7.89l.078 11.76-7.68 6.346-2.136-1.711a2.372 2.372 0 0 0-2.874-.038l-2.225 1.669-7.585-6.266-.078-11.76h22.5zM24 9l1.041.833h-2.082L24 9z" }))));
  }
};

exports.utrecht_icon_nieuwsbrief = UtrechtIconNieuwsbrief;