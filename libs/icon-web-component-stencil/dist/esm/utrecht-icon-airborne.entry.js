import { r as registerInstance, h } from './index-da88101a.js';
import { v as v4 } from './v4-fa4bb814.js';

const UtrechtIconAirborne = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Airborne"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M26.994 6c3.264 1.695 5.52 6.463 5.573 11.819 2.01-.104 3.272-.242 4.07-.375L25.989 36.988l6.578-19.169c-.338.018-.69.035-1.071.05L24.989 37l2.51-19.024-1 .011C26.499 10.603 25 6.5 24.25 6c-.75.5-2.247 4.604-2.25 11.991a252.751 252.751 0 0 0 4.492-.004L24 37l-2-19.009-1.006-.01 2.036 19.027-6.526-19.139c-.38-.015-.732-.032-1.07-.05L22 36.988 11.364 17.444c.798.133 2.059.271 4.07.375C15.486 12.477 17.749 7.709 21 6c-6.224 1.034-11 5.613-11 11 0 0 0 .016.024.042L23.562 41.74c.003.006.01.008.013.014a.485.485 0 0 0 .197.184.496.496 0 0 0 .223.062H24a.492.492 0 0 0 .273-.088l.03-.019a.497.497 0 0 0 .132-.149c0-.002.003-.002.004-.004v-.003l.003-.002 13.535-24.693C38 17.016 38 17 38 17c0-5.445-4.727-9.988-11.006-11m-1.5 0C27 8.5 27.498 14.527 27.5 17.976c1.55-.023 2.87-.06 3.996-.107-.04-5.288-2.8-10.598-6.002-11.869M21 17.981c-1.765-.021-3.252-.06-4.496-.112C16.546 12.231 19.477 6.898 23 6c-1.5 2.5-1.998 7.512-2 11.981" }))));
  }
};

export { UtrechtIconAirborne as utrecht_icon_airborne };
