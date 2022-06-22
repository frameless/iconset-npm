import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';
import { v as v4 } from './v4.js';

const UtrechtIconBevolking$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Bevolking"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M39.043 34.509l1.5 7.487h-6.011v-7.487h4.51zm-17.484 3.954c1.981 0 3.586 1.552 3.586 3.533H13.191c0-1.981 1.606-3.533 3.586-3.533zm7.996-7.473c1.911.085 3.437 1.62 3.437 3.517v7.49H26.64c-.02-1.965-1.28-3.76-3.069-4.535a5.973 5.973 0 001.93-4.392c0-.622-.143-1.483-.32-2.047zM19.508 28.5A4.496 4.496 0 0124 32.994c0 2.475-2.015 4.49-4.492 4.49s-4.492-2.014-4.492-4.49a4.496 4.496 0 014.492-4.493zm1.28 2.687c-.329 1.217-1.439 1.93-2.759 1.93-.558 0-1.055-.09-1.494-.312-.004.063-.019.122-.019.187a2.995 2.995 0 002.992 2.992 2.987 2.987 0 002.973-2.812 2.43 2.43 0 01-1.693-1.985zm-7.152-6.37l.003.014.831-.006c.02 0 .04.004.06.005a3.575 3.575 0 013.215 2.443 7.62 7.62 0 00-1.24.54 5.999 5.999 0 00-2.989 5.18V33H6v-4.589a3.595 3.595 0 013.594-3.594zM38.4 20.415c1.989 0 3.6 1.69 3.6 3.775v8.803l-7.724-.008c-.46-1.484-1.61-2.668-3.075-3.218a5.976 5.976 0 00.084-8.448c.627-.556 1.428-.904 2.313-.904zM27 21.008c2.476 0 4.492 2.015 4.492 4.492S29.476 29.992 27 29.992c-2.477 0-4.492-2.015-4.492-4.492s2.015-4.492 4.492-4.492zm1.28 2.686c-.33 1.217-1.439 1.932-2.76 1.932-.557 0-1.054-.09-1.493-.313-.004.063-.019.123-.019.187A2.996 2.996 0 0027 28.492a2.986 2.986 0 002.973-2.81 2.43 2.43 0 01-1.693-1.988zm-7.766-7.877l.815.943 1.142 1.322 1.142-1.322.816-.943h.47c1.986 0 3.597 1.61 3.584 3.137v.748A5.953 5.953 0 0027 19.508a6 6 0 00-5.992 5.993c0 .456.067.894.164 1.32l-1.96-.001c-.42-1.356-1.42-2.456-2.708-3.057v-.36a5.96 5.96 0 00.925-6.377 3.577 3.577 0 012.673-1.21h.412zm-12.87 4.895a4.507 4.507 0 015.55-5.55 4.433 4.433 0 013.11 3.11 4.508 4.508 0 01-5.55 5.55 4.433 4.433 0 01-3.11-3.11zm5.61-3.025c-.33 1.217-1.438 1.93-2.758 1.93-.559 0-1.056-.09-1.495-.311-.003.062-.018.122-.018.187a2.995 2.995 0 002.991 2.99 2.985 2.985 0 002.973-2.81 2.43 2.43 0 01-1.693-1.986zM36.008 10.5a4.511 4.511 0 014.507 4.506c0 2.486-2.022 4.507-4.507 4.507S31.5 17.492 31.5 15.007a4.511 4.511 0 014.507-4.506zm1.285 2.695c-.331 1.22-1.444 1.937-2.77 1.937-.561 0-1.061-.09-1.503-.315-.004.063-.019.125-.019.189a3.01 3.01 0 003.007 3.007 3.003 3.003 0 002.989-2.823 2.438 2.438 0 01-1.704-1.995zM22.505 6a4.511 4.511 0 014.507 4.506c0 2.486-2.022 4.507-4.507 4.507s-4.507-2.021-4.507-4.507A4.511 4.511 0 0122.505 6zm1.285 2.695c-.332 1.22-1.444 1.937-2.77 1.937-.561 0-1.061-.09-1.503-.315-.004.063-.02.125-.02.189a3.01 3.01 0 003.008 3.007 3.003 3.003 0 002.989-2.823 2.438 2.438 0 01-1.704-1.995z" }))));
  }
}, [1, "utrecht-icon-bevolking", {
    "iconTitle": [513, "icon-title"],
    "iconTitleId": [513, "icon-title-id"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-bevolking", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-bevolking":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconBevolking$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconBevolking = UtrechtIconBevolking$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconBevolking, defineCustomElement };
