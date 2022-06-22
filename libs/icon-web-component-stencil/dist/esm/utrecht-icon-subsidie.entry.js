import { r as registerInstance, h } from './index-da88101a.js';
import { v as v4 } from './v4-fa4bb814.js';

const UtrechtIconSubsidie = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Subsidie"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M13.764 29H6.037L6 23.5a3 3 0 0 1 3-3h6.5a2.999 2.999 0 0 1 2.999 2.989A11.052 11.052 0 0 0 13.764 29M42 23.5V29h-7.763a11.049 11.049 0 0 0-4.736-5.511A3 3 0 0 1 32.5 20.5H39a3 3 0 0 1 3 3m-33-8a3.5 3.5 0 1 1 7.001.001A3.5 3.5 0 0 1 9 15.5m11.5-6a3.5 3.5 0 1 1 7.001.001A3.5 3.5 0 0 1 20.5 9.5m-2.986 9.997L17.5 17.5a3 3 0 0 1 3-3H27a3 3 0 0 1 3 3v2.262c-1.016.682-1.705 1.779-1.904 3.037A10.925 10.925 0 0 0 24 22c-1.444 0-2.821.287-4.087.796a4.476 4.476 0 0 0-2.4-3.299M32.5 15.5a3.5 3.5 0 1 1 7.001.001A3.5 3.5 0 0 1 32.5 15.5m-7.503 23c-2.601 0-4.58-1.543-5.203-4.012h-1.132v-1.036h.934s-.03-.224-.03-.422c0-.168.03-.454.03-.454h-.934v-1.035h1.132c.655-2.442 2.693-4.041 5.203-4.041.807 0 1.507.133 1.507.133l-.471 1.747s-.518-.038-1.081-.038c-1.446 0-2.572.819-3.058 2.199h3.788l-.243 1.035h-3.82s-.03.195-.03.423c0 .168.046.453.046.453h3.62l-.227 1.036h-3.043c.47 1.513 1.643 2.161 3.043 2.161.79 0 1.46-.212 1.46-.212l.35 1.809s-.791.254-1.841.254M24 24a9 9 0 1 0 0 18 9 9 0 0 0 0-18" }))));
  }
};

export { UtrechtIconSubsidie as utrecht_icon_subsidie };