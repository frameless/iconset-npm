import { r as registerInstance, h } from './index-da88101a.js';
import { v as v4 } from './v4-fa4bb814.js';

const UtrechtIconOverDeStad = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Over De Stad"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M12 7v10.5H6V41h10.5l.001-8.579-1.563 1.25-1.876-2.341L24 22.579l4.5 3.6V24h2.999v4.579l3.438 2.751-1.875 2.341-1.563-1.25V41H42V18h-4.172v-6.999h-10.8V19.5H25.5V7H12zm1.502 15.5h1.499V8.003h-1.499V22.5zM28.5 14H32v-1.5h-3.5V14zM21 36h5.999v-4H21v4z" }))));
  }
};

export { UtrechtIconOverDeStad as utrecht_icon_over_de_stad };