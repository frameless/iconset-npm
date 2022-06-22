import { r as registerInstance, h } from './index-da88101a.js';
import { v as v4 } from './v4-fa4bb814.js';

const UtrechtIconPrijskaartje = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Prijskaartje"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M37.67 7.181c-.191-.385-.6-.886-1.447-1.09-2.061-.493-5.656 1.073-8.678 3.014l-2.533-2.29a2.995 2.995 0 0 0-4.025 0l-9.493 8.59a1.496 1.496 0 0 0-.494 1.11v25.5h24v-25.5a1.5 1.5 0 0 0-.494-1.112l-1.201-1.087c-.951.441-1.994.853-3.115 1.227L32 17.182v21.834H14V17.182l9-8.144 3.279 2.967a31.964 31.964 0 0 0 3.34-1.023l-.914-.827c2.919-1.819 5.84-2.922 7.168-2.605.347.083.426.241.456.301.08.161.052.378-.082.647-.703 1.4-4.255 3.888-11.208 5.33a2.246 2.246 0 0 0-4.29.938 2.246 2.246 0 1 0 4.42.564c6.262-1.28 11.183-3.7 12.418-6.159.447-.889.292-1.573.084-1.99zm-21.56 22.6h1.59a6.506 6.506 0 0 1 0-1.487h-1.59v-1.798h1.942c.99-2.89 3.675-4.48 6.442-4.48 1.446 0 2.602.31 3.53.95l-.95 1.92c-.68-.495-1.568-.723-2.58-.723-1.59 0-3.097.744-3.861 2.333h5.678l-.867 1.797h-5.286a5.608 5.608 0 0 0-.041.723c0 .371.02.62.04.764h4.667l-.846 1.817h-3.325c.765 1.508 2.21 2.23 3.82 2.23 1.157 0 2.169-.33 2.87-.99l1.157 1.775c-.971.826-2.374 1.404-4.026 1.404-2.788 0-5.41-1.569-6.402-4.419H16.11V29.78z" }))));
  }
};

export { UtrechtIconPrijskaartje as utrecht_icon_prijskaartje };