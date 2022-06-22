'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-9258e066.js');
const v4 = require('./v4-8e8d6fbc.js');

const UtrechtIconVerkiezingen = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4.v4();
    return (index.h("utrecht-icon-container", null, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? index.h("title", { id: id }, this.iconTitle) : index.h("title", { id: id }, "Verkiezingen"), index.h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M25.484 31.82c-.17 4.821-4.122 8.68-8.984 8.68a9 9 0 0 1-9-9c0-4.863 3.859-8.814 8.679-8.984a6.08 6.08 0 0 1 .902-1.165l.352-.35H6v21h21V30.564l-.352.353a6.043 6.043 0 0 1-1.164.902zm7.153-17.547l-1.061-1.06-9.967 9.95 1.07 1.07 9.958-9.96zm1.06 1.062l-9.958 9.958 1.07 1.07 9.95-9.967-1.061-1.06zM22.4 28.195l-.781-.78-.011.01-1.061-1.06.012-.012-.781-.78-.766 2.276 1.11 1.112 2.278-.767zM31.578 8.97L39 16.394 25.648 29.77a4.506 4.506 0 0 1-1.735 1.081l-.005.002-7.368 2.481a1.498 1.498 0 0 1-1.54-.363 1.501 1.501 0 0 1-.362-1.539l2.48-7.368.002-.005a4.525 4.525 0 0 1 1.08-1.735L31.579 8.971zm9.545 1.06L37.94 6.85c-1.132-1.132-3.11-1.133-4.243 0l-1.06 1.061 7.424 7.425 1.06-1.06a3.003 3.003 0 0 0 0-4.244zM14.446 36.037a.754.754 0 0 1-.372.178l.592 1.885a.752.752 0 0 1-.715.975.75.75 0 0 1-.632-.346l-1.464-2.285.115.396a.749.749 0 1 1-1.44.42l-1.575-5.4a.751.751 0 0 1 .409-.893.747.747 0 0 1 .942.28l1.546 2.412a.75.75 0 0 1 1.273-.255l1.388 1.574a.75.75 0 0 1-.067 1.06z" }))));
  }
};

exports.utrecht_icon_verkiezingen = UtrechtIconVerkiezingen;
