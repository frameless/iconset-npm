'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9258e066.js');
const v4 = require('./v4-8e8d6fbc.js');

const UtrechtIconSportCultureleActiviteit = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4.v4();
    return (index.h("utrecht-icon-container", null, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? index.h("title", { id: id }, this.iconTitle) : index.h("title", { id: id }, "Sport Culturele Activiteit"), index.h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M37.081 34.5l-1.08-3.243v-6.701l4.003 3.565 1.992-2.242-4.457-3.962c-.598-.608-1.283-.917-2.04-.917l-2.49.001L33 21l-.009.001-8.992.003.002 3 6-.002v6.978l-3.914 9.916 2.791 1.102L33.02 31.5h.48v1.743l1.42 4.257H42v-3h-4.919zM21.501 37a2.5 2.5 0 1 0-.002 5 2.5 2.5 0 0 0 .001-5zm10-17.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm-22.51 5.313a1.073 1.073 0 0 0 1.516 1.516 1.073 1.073 0 0 0-1.516-1.516zM19.5 27.289L18 23.538V33h-3V16.454l-1.448 2.173-3.052 1.744v2.401c.906.197 1.607.752 1.73 1.539a2.26 2.26 0 0 1-.082 1.06c-.247.759-.062 1.494.473 2.101.548.62.88 1.479.88 2.356C13.5 32.05 12.258 33 9.775 33s-3.47-.975-3.724-2.379c-.203-1.132.208-2.403.9-3.173.525-.585.653-1.236.4-1.969a2.245 2.245 0 0 1-.125-.74c0-1.148.818-1.755 1.773-1.962V15.5h1.5v1.415l.948-.542 1.963-2.904c.608-.643 1.312-.969 2.09-.969l2.488.001L18 12.5l.011.001 1.84.001c.37 0 .725-.137 1.001-.385l4.638-4.225 2.02 2.216-4.644 4.231a4.477 4.477 0 0 1-1.883.999c.003.055.017.106.017.162v7.462l1.5 3.749V33h-3v-5.711zM15.407 8.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z" }))));
  }
};

exports.utrecht_icon_sport_culturele_activiteit = UtrechtIconSportCultureleActiviteit;