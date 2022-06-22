'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9258e066.js');
const v4 = require('./v4-8e8d6fbc.js');

const UtrechtIconVeerboot = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4.v4();
    return (index.h("utrecht-icon-container", null, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? index.h("title", { id: id }, this.iconTitle) : index.h("title", { id: id }, "Veerboot"), index.h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M13.758 36.794c.399.166.76.347 1.108.521.727.365 1.301.653 1.955.693.054.003.107.004.159.004.744 0 1.413-.33 2.259-.749.171-.084.345-.17.521-.254a9.975 9.975 0 0 1 4.263-.986c.664 0 1.327.072 1.969.213.966.213 1.78.614 2.498.966.434.214.844.416 1.261.568a3.55 3.55 0 0 0 1.206.216c.652 0 1.334-.188 2.029-.56a11.226 11.226 0 0 1 4.351-1.3L39 29.5H9l1.648 6.564c1.056.072 2.1.309 3.11.73zM19 18.5h4.25V17H19v1.5zm5.75 0H29V17h-4.25v1.5zM13.3 22H11v-3h6.5v-2H16v-1.5h10.5v-1h1v1H32V17h-1.5v2h6.479L37 22h-2.3l.753 6H32.43l-.753-6H16.323l-.753 6h-3.023l.753-6zm15.729 2.912l-.335-1.044-2.332-.046c-.001.005-.057.054-.059.058l-.375 1.032h3.101zm.823.065l-.086.019.119.267c.076.163.115.339.115.517v1.72h-1v-.632h-3v.632h-1v-1l.002-.723c0-.124.026-.245.063-.364.003-.007 0-.015.003-.022l.145-.4-.064-.014a.191.191 0 0 1-.149-.186v-.101a.19.19 0 0 1 .191-.19h.201l.305-.841a.7.7 0 0 1 .663-.481h2.291a.694.694 0 0 1 .657.496l.266.826h.236a.19.19 0 0 1 .19.19v.101a.19.19 0 0 1-.148.186zm-7.823-.065l-.335-1.044-2.332-.046c-.001.005-.057.054-.059.058l-.375 1.032h3.101zm.823.065l-.086.019.119.267c.076.163.115.339.115.517v1.72h-1v-.632h-3v.632h-1v-1l.002-.723c0-.124.026-.245.063-.364.003-.007 0-.015.003-.022l.145-.4-.064-.014a.191.191 0 0 1-.149-.186v-.101a.19.19 0 0 1 .191-.19h.201l.305-.841a.7.7 0 0 1 .663-.481h2.291a.694.694 0 0 1 .657.496l.266.826h.236a.19.19 0 0 1 .19.19v.101a.19.19 0 0 1-.148.186zM24.492 14h5v-1h-5v1zM42 38.585v3.27c-.688-.302-1.347-.655-2.069-.94-1.558-.614-3.134-.438-4.597.347-2.643 1.418-5.542 1.685-8.257.236-1.136-.606-2.277-1.113-3.608-.952-1.245.15-2.17.836-3.287 1.302-1.592.663-3.328.844-5.01.442-1.163-.278-2.086-.903-3.166-1.348-2.376-.979-4.031.185-6.006.958v-3.308c.589-.3 1.181-.573 1.823-.756 1.789-.51 3.645-.371 5.359.343 1.2.5 2.191 1.244 3.55 1.326 1.408.085 2.469-.567 3.673-1.142 1.642-.783 3.483-1.053 5.265-.662 1.317.29 2.335 1.03 3.569 1.479 1.53.554 3.042.324 4.455-.432 2.614-1.398 5.678-1.671 8.306-.163z" }))));
  }
};

exports.utrecht_icon_veerboot = UtrechtIconVeerboot;
