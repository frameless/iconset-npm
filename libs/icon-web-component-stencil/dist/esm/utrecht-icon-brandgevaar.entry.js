import { r as registerInstance, h } from './index-da88101a.js';
import { v as v4 } from './v4-fa4bb814.js';

const UtrechtIconBrandgevaar = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Brandgevaar"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M30.352 15c.525 1.298.564 4.962-1.013 6-.526-2.855-2.094-9.664-7.09-12 .224 3.547.76 7.956-5.062 14 0-3-2.025-5-2.025-5 0 7-7.352 15.917 5.063 19-3.154-5.71-.112-6.925 1.202-11.856.789 1.038 1.355 2.877 1.092 3.916 1.84-2.336 1.8-6.951 1.8-9.028 3.942 2.596 7.425 10.48 4.008 16.968 12.15-5 7.545-16.55 2.025-22zM17 42.003h14v-3H17v3z" }))));
  }
};

export { UtrechtIconBrandgevaar as utrecht_icon_brandgevaar };
