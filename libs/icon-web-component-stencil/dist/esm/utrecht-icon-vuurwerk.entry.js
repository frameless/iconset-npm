import { r as registerInstance, h } from './index-da88101a.js';
import { v as v4 } from './v4-fa4bb814.js';

const UtrechtIconVuurwerk = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Vuurwerk"), h("path", { fill: "currentColor", d: "M41.25 10.1H33a.56.56 0 0 0-.21 1l.9.89-12 12 4.24 4.25L13.15 41h4.24l12.2-12.2 10.46-10.46 1 1a.55.55 0 0 0 1-.21v-8.27a.66.66 0 0 0-.8-.76zm-5.76 4.31l2.09 2.09H33.4l2.09-2.09zM30.4 19.5l1.5-1.5h4.24l-1.5 1.5H30.4zm2.74 1.5l-1.5 1.5H27.4l1.5-1.5h4.24zM28 26.13L25.89 24h4.25L28 26.13z" }), h("path", { fill: "currentColor", d: "M17 30.5v4.3l3-3V27l-6.05 1.09 4.5-5.1-1.95-.49 1.03-.45L15 17.5l5.32 2.18v-2.59l1.77 2.26 1.94-1.77v-4.37l-1.65 1.71L17 8v7l-8.5-3.5 4.8 8.85L6.5 23l6.63 1.55L6 32.63z" }))));
  }
};

export { UtrechtIconVuurwerk as utrecht_icon_vuurwerk };
