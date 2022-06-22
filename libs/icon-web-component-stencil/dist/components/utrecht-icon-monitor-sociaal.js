import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconMonitorSociaal$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Monitor Sociaal"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M21.947 17.086a3 3 0 013 2.999 3 3 0 013-3h6c1.657 0 3 1.362 3 3.04V30.77H35.49l1.457 6.187h-3v5.98h-6v-7.483h1.5V29.45a1.5 1.5 0 00-1.5-1.5l-14.963-.03-.037-8.414c0-1.337 1.343-2.421 3-2.421zM19 29.422a1.5 1.5 0 011.5 1.5v10.5a1.5 1.5 0 01-1.5 1.5H8.5a1.5 1.5 0 01-1.5-1.5v-10.5a1.5 1.5 0 011.5-1.5zm-1.445 7.444h-1.5v3h1.5v-3zm-6.037-1.509h-1.5v4.5h1.5v-4.5zm3.019-3.009h-1.5v7.5h1.5v-7.5zM26.3 21.498c-.336 1.238-1.465 1.965-2.81 1.965-.566 0-1.071-.091-1.518-.317-.007.084-.025.164-.025.249a3 3 0 003 3 2.993 2.993 0 002.99-2.902 2.471 2.471 0 01-1.637-1.995zM30.925 7a4.481 4.481 0 014.476 4.476c0 2.467-2.008 4.476-4.476 4.476s-4.477-2.009-4.477-4.476A4.482 4.482 0 0130.925 7zM19.006 7a4.481 4.481 0 014.476 4.476c0 2.467-2.008 4.476-4.476 4.476s-4.477-2.009-4.477-4.476A4.482 4.482 0 0119.006 7zm13.195 2.677c-.329 1.213-1.434 1.925-2.751 1.925-.553 0-1.046-.09-1.483-.31-.004.062-.019.121-.019.184a2.98 2.98 0 002.977 2.976 2.972 2.972 0 002.958-2.797 2.42 2.42 0 01-1.682-1.978zm-11.919 0c-.329 1.213-1.434 1.925-2.751 1.925-.553 0-1.046-.09-1.483-.31-.004.062-.019.121-.019.184a2.98 2.98 0 002.977 2.976 2.972 2.972 0 002.958-2.797 2.42 2.42 0 01-1.682-1.978z" }))));
  }
}, [1, "utrecht-icon-monitor-sociaal", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-monitor-sociaal", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-monitor-sociaal":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconMonitorSociaal$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconMonitorSociaal = UtrechtIconMonitorSociaal$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconMonitorSociaal, defineCustomElement };
