import { r as registerInstance, h } from './index-da88101a.js';
import { v as v4 } from './v4-fa4bb814.js';

const UtrechtIconVacatures = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Vacatures"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M10.5 37V26h11.25c0 1.24 1.01 2.25 2.25 2.25s2.25-1.01 2.25-2.25H37.5v11h-27zm14.25-14.25V26c0 .413-.337.75-.75.75a.752.752 0 0 1-.75-.75v-3.25h1.5zM9 16h30v7H26.25v-1a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75v1H9v-7zm12-3h6v-2h-6v2zm18 0h-9v-2c0-1.654-1.346-3-3-3h-6c-1.654 0-3 1.346-3 3v2H9c-1.654 0-3 1.346-3 3v7a2.99 2.99 0 0 0 1.5 2.583V37c0 1.654 1.346 3 3 3h27c1.654 0 3-1.346 3-3V25.583A2.99 2.99 0 0 0 42 23v-7c0-1.654-1.346-3-3-3z" }))));
  }
};

export { UtrechtIconVacatures as utrecht_icon_vacatures };