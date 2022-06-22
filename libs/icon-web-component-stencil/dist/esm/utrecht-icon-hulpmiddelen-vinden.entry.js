import { r as registerInstance, h } from './index-da88101a.js';
import { v as v4 } from './v4-fa4bb814.js';

const UtrechtIconHulpmiddelenVinden = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Hulpmiddelen Vinden"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M31.473 30.041l4.774 2.757c.228.132.487.201.75.201h5v-3H37.4l-4.58-2.645a1.607 1.607 0 0 0-.278-.125 4.525 4.525 0 0 0-3.184.129l-8.013 3.485a2.973 2.973 0 0 0-1.774 3.156h-2.324L11.992 32.2c-2.295-.806-4.857.385-5.71 2.663l-.125.33a2.516 2.516 0 0 0 1.42 3.202l8.87 3.5a1.5 1.5 0 0 0 .55.104l9.445-.001c.876 0 1.737-.152 2.56-.451l4.011-1.457c.165-.061.337-.091.513-.091h8.471v-3h-8.47c-.527 0-1.044.091-1.538.271l-4.012 1.458c-.493.179-1.01.27-1.535.27l-9.159.001-8.138-3.21a1.515 1.515 0 0 1 1.861-.755l5.506 1.884c.156.054.32.081.485.081h5.78c.432.151.89.252 1.38.252.613 0 1.257-.119 1.897-.359l5-2-1.113-2.786-4.97 1.989c-.48.178-1.017.206-1.303.062l-1.127-.563 7.996-3.478c.297-.125.626-.147.936-.075zM15 30.154l2.02.846L21 29.229V25.5h-6v4.654zM28.482 12a3 3 0 1 0 .037-6 3 3 0 0 0-.037 6zm-10.464.017a2.999 2.999 0 1 0-.034-6 2.999 2.999 0 0 0 .034 6zM22.5 24h-9v-8c0-1.657 1.343-2.5 3-2.5h15c1.657 0 3 .843 3 2.5v8h-2.038L25.5 27.238V16.465c-.115.013-.228.035-.347.035H22.5V24z" }))));
  }
};

export { UtrechtIconHulpmiddelenVinden as utrecht_icon_hulpmiddelen_vinden };