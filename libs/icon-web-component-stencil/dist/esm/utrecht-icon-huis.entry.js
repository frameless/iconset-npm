import { r as registerInstance, h } from './index-da88101a.js';
import { v as v4 } from './v4-fa4bb814.js';

const UtrechtIconHuis = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Huis"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M24 8L6 23.875l1.985 2.25 4.01-3.536V40h17.007v-2.999H14.996V19.942L24 12.001l10.003 8.824V40h3.003V23.471l3.009 2.654L42 23.875l-4.994-4.404v-7.47h-3.003v4.823L24 8zm-4.002 24h9.005v-6.5h-9.005V32z" }))));
  }
};

export { UtrechtIconHuis as utrecht_icon_huis };