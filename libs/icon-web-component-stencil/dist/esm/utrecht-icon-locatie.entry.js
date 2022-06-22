import { r as registerInstance, h } from './index-da88101a.js';
import { v as v4 } from './v4-fa4bb814.js';

const UtrechtIconLocatie = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Locatie"), h("path", { fill: "currentColor", d: "M31.4 13.7C31.4 9 28.5 6 23.9 6s-7.5 2.9-7.5 7.7c0 5.9 7.5 15.4 7.5 15.4s7.5-9.5 7.5-15.4zm-10.5-.2c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3zM42 17.9v24.2L29.9 39l-12 3L6 39V14.5l9.6 2.7c.4 1.2.8 2.3 1.4 3.5l-8-2.2v18.3l9 2.2 12-3 9 2.2v-18l-7.1-1.8c.4-1 .6-1.9.8-2.9l9.3 2.4z" }))));
  }
};

export { UtrechtIconLocatie as utrecht_icon_locatie };
