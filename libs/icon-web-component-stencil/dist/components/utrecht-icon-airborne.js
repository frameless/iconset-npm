import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';

const UtrechtIconAirborne$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("utrecht-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { "fill-rule": "evenodd", d: "M26.994 6c3.264 1.695 5.52 6.463 5.573 11.819 2.01-.104 3.272-.242 4.07-.375L25.989 36.988l6.578-19.169c-.338.018-.69.035-1.071.05L24.989 37l2.51-19.024-1 .011C26.499 10.603 25 6.5 24.25 6c-.75.5-2.247 4.604-2.25 11.991a252.751 252.751 0 0 0 4.492-.004L24 37l-2-19.009-1.006-.01 2.036 19.027-6.526-19.139c-.38-.015-.732-.032-1.07-.05L22 36.988 11.364 17.444c.798.133 2.059.271 4.07.375C15.486 12.477 17.749 7.709 21 6c-6.224 1.034-11 5.613-11 11 0 0 0 .016.024.042L23.562 41.74c.003.006.01.008.013.014a.485.485 0 0 0 .197.184.496.496 0 0 0 .223.062H24a.492.492 0 0 0 .273-.088l.03-.019a.497.497 0 0 0 .132-.149c0-.002.003-.002.004-.004v-.003l.003-.002 13.535-24.693C38 17.016 38 17 38 17c0-5.445-4.727-9.988-11.006-11m-1.5 0C27 8.5 27.498 14.527 27.5 17.976c1.55-.023 2.87-.06 3.996-.107-.04-5.288-2.8-10.598-6.002-11.869M21 17.981c-1.765-.021-3.252-.06-4.496-.112C16.546 12.231 19.477 6.898 23 6c-1.5 2.5-1.998 7.512-2 11.981" }))));
  }
}, [1, "utrecht-icon-airborne"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-airborne", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-airborne":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconAirborne$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconAirborne = UtrechtIconAirborne$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconAirborne, defineCustomElement };
