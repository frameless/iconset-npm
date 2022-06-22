import { r as registerInstance, h } from './index-da88101a.js';
import { v as v4 } from './v4-fa4bb814.js';

const UtrechtIconEvenementen = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Evenementen"), h("path", { fill: "currentColor", d: "M29.92 6.06l-5.94 3.253V5.99zM42 19.35L40.89 19a52.64 52.64 0 0 1-16-7.74l-.89-.67-.91.71A52.78 52.78 0 0 1 7.07 19L6 19.35v5.692h2.69L7.44 42H40.5l-1-16.948H42V19.35zM9 21.61a56.38 56.38 0 0 0 15-7.27 56.38 56.38 0 0 0 15 7.27v.444H9v-.444zM37.32 39h-6.933a4.51 4.51 0 0 1-4.5-4.5V27s-3.717 9.22-3.757 9.31A4.52 4.52 0 0 1 18 39h-7.3l1-14.063h24.81L37.32 39z" }))));
  }
};

export { UtrechtIconEvenementen as utrecht_icon_evenementen };