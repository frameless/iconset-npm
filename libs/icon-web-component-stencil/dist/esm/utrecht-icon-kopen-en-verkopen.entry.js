import { r as registerInstance, h } from './index-da88101a.js';
import { v as v4 } from './v4-fa4bb814.js';

const UtrechtIconKopenEnVerkopen = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Kopen En Verkopen"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M32.75 19H39v-3.5h-6.25V19zM12.5 30h23v-8h-23v8zm21.55 9H12.5v-6h23v6h-1.45zM9 19h6.25v-3.5H9V19zm2.955-10h4.869l-1.334 5H9.622l2.333-5zm4.795 10h6.5v-3.5h-6.5V19zm8-10h4.874l1.333 5H24.75V9zm-1.5 5h-6.207l1.333-5h4.874v5zm1.5 5h6.5v-3.5h-6.5V19zm13.628-5H32.51l-1.334-5h4.869l2.333 5zm-.423-8h-27.91L6 14.667V19c0 1.654 1.346 3 3 3h.5v17H8v3h32v-3h-1.5V22h.5c1.654 0 3-1.346 3-3v-4.333L37.955 6z" }))));
  }
};

export { UtrechtIconKopenEnVerkopen as utrecht_icon_kopen_en_verkopen };