import { r as registerInstance, h } from './index-da88101a.js';
import { v as v4 } from './v4-fa4bb814.js';

const UtrechtIconDocumenten = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Documenten"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M16 27.5h12V26H16v1.5zm0-4.5h12v-1.5H16V23zm0-4.5h12V17H16v1.5zM31.002 39L31 13.5H13V32h6a1.5 1.5 0 0 1 1.5 1.5V39h10.502zM17.5 38.457V35h-3.736l3.736 3.457zM34 13.5V39c0 1.654-1.346 3-3 3H17.5c-.378 0-.741-.143-1.019-.398l-6-5.55A1.505 1.505 0 0 1 10 34.95V13.5c0-1.654 1.346-3 3-3h18c1.654 0 3 1.346 3 3zM38.5 9v25.5c0 1.654-1.346 3-3 3V9h-21c0-1.654 1.346-3 3-3h18c1.654 0 3 1.346 3 3z" }))));
  }
};

export { UtrechtIconDocumenten as utrecht_icon_documenten };
