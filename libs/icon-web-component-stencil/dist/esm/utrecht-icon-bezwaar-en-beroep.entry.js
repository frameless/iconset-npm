import { r as registerInstance, h } from './index-da88101a.js';
import { v as v4 } from './v4-fa4bb814.js';

const UtrechtIconBezwaarEnBeroep = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Bezwaar En Beroep"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M42 42H24a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3zm-30.826-3.053l-2.111-2.132 14.102-14.124 2.122 2.122-14.113 14.134zm19.062-13.426l-.709-.709-3.078-3.08-3.977-3.976 2.836-2.82 7.764 7.764-2.836 2.821zm-13.07-8.829l7.07-7.071 1.061 1.061-7.071 7.071-1.06-1.061zm21.213 7.072l-7.071 7.071-1.061-1.062 5.833-5.834.174-.172.005-.006 1.059-1.059 1.061 1.062zm-10.253 3.888l-1.06 1.06a1.5 1.5 0 0 0 0 2.122l3.181 3.183a1.5 1.5 0 0 0 2.121 0l9.193-9.193a1.501 1.501 0 0 0 0-2.121l-3.183-3.182a1.495 1.495 0 0 0-2.12 0l-1.062 1.06-7.778-7.778 1.061-1.061a1.5 1.5 0 0 0 0-2.121l-3.182-3.182a1.501 1.501 0 0 0-2.12 0l-9.194 9.193a1.5 1.5 0 0 0 0 2.12l3.183 3.183c.292.293.676.439 1.06.439s.768-.146 1.061-.44l1.061-1.06.696.696L6.807 34.829A2.742 2.742 0 0 0 6 36.778c0 .798.332 1.569.932 2.168l2.121 2.122a3.104 3.104 0 0 0 1.992.927 2.713 2.713 0 0 0 2.126-.803l14.237-14.257.718.717z" }))));
  }
};

export { UtrechtIconBezwaarEnBeroep as utrecht_icon_bezwaar_en_beroep };