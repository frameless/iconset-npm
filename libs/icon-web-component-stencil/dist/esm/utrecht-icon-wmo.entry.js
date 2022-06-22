import { r as registerInstance, h } from './index-da88101a.js';
import { v as v4 } from './v4-fa4bb814.js';

const UtrechtIconWmo = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Wmo"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M20.998 25.976h6v-5h-6v5zM14 19.52l-.002 11.758 3 1.026L17 16.949l6.997-5.997 7 6v8.524h3v-5.953l3.023 2.592 1.953-2.278-4.976-4.265v-4.596h-3V13l-7-6L9.022 19.837l1.952 2.278L14 19.52zm16.538 10.572L22.54 33.57l1.128.563c.286.144.82.116 1.302-.062l4.97-1.99 1.113 2.787-5 2a5.416 5.416 0 0 1-1.898.359 4.19 4.19 0 0 1-1.38-.252h-5.778c-.165 0-.33-.027-.486-.081l-5.506-1.884a1.516 1.516 0 0 0-1.861.755l8.138 3.21 9.159-.001c.525 0 1.042-.091 1.535-.271l4.012-1.457a4.48 4.48 0 0 1 1.537-.271h8.472v3h-8.472c-.176 0-.348.03-.513.09l-4.01 1.457c-.824.3-1.685.452-2.561.452h-9.444c-.19 0-.375-.035-.551-.103l-8.871-3.5a2.518 2.518 0 0 1-1.42-3.202l.125-.33c.854-2.278 3.416-3.47 5.71-2.663l5.256 1.799h2.324a2.969 2.969 0 0 1 1.774-3.156l8.013-3.485a4.517 4.517 0 0 1 3.185-.13c.096.034.188.075.276.126l4.58 2.645h4.599v3h-5c-.264 0-.523-.07-.75-.201l-4.775-2.757a1.516 1.516 0 0 0-.935.075z" }))));
  }
};

export { UtrechtIconWmo as utrecht_icon_wmo };