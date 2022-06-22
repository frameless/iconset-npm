import { r as registerInstance, h } from './index-da88101a.js';
import { v as v4 } from './v4-fa4bb814.js';

const UtrechtIconGezicht = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Gezicht"), h("path", { fill: "currentColor", d: "M24 6C14.059 6 6 14.059 6 24s8.059 18 18 18 18-8.059 18-18S33.941 6 24 6zm0 33A15 15 0 0 1 9.93 18.85a11.68 11.68 0 0 0 8.44 3.23c5.1 0 10.21-2.45 11.48-7.36 0 4.54 4.51 7.87 9.11 8.49V24c0 8.269-6.691 14.978-14.96 15z" }), h("ellipse", { fill: "currentColor", cx: "19.51", cy: "25.56", rx: "1.49", ry: "1.5" }), h("ellipse", { fill: "currentColor", cx: "28.51", cy: "25.5", rx: "1.49", ry: "1.5" }), h("path", { fill: "currentColor", d: "M24 35.16a9.81 9.81 0 0 1-5.32-1.56 1 1 0 0 1 .332-1.82 1 1 0 0 1 .758.14 8 8 0 0 0 8.6-.09 1.001 1.001 0 0 1 1.12 1.66A9.85 9.85 0 0 1 24 35.16z" }))));
  }
};

export { UtrechtIconGezicht as utrecht_icon_gezicht };