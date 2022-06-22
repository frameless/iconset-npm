import { r as registerInstance, h } from './index-da88101a.js';
import { v as v4 } from './v4-fa4bb814.js';

const UtrechtIconLeerlingenvervoer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Leerlingenvervoer"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M9.873 24.67a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m.5 1.12c-.829 0-1.579.336-2.122.88L6 28.17v5h1.373v7.5h4.3v-5.88h1.7v-6a3 3 0 0 0-3-3m26.648 7.432a1.856 1.856 0 0 1-1.855-1.854c0-1.023.833-1.855 1.855-1.855 1.021 0 1.853.832 1.853 1.855a1.856 1.856 0 0 1-1.854 1.854zm-11.989 2.484h5.806V33.84h-5.806v1.866zm-6.18-2.484a1.856 1.856 0 0 1-1.854-1.854c0-1.023.832-1.855 1.854-1.855 1.023 0 1.855.832 1.855 1.855a1.857 1.857 0 0 1-1.855 1.854zm18.464-17.647l-.056 9.682H18.614l-.058-9.682h18.76zm-15.258-2.532h11.757v-2.047H22.059v2.047zm18.839 3.305h-.616l.026-4.528-.07-.225A3.703 3.703 0 0 0 36.73 9H19.143a3.703 3.703 0 0 0-3.507 2.595l-.07.225.025 4.528h-.615c-.61 0-1.103.494-1.103 1.103v3.932c0 .517.359.965.864 1.076l.892.2.018 2.969h.006c-.329 1.218-.5 4.184-.502 5.098l-.006 5.45h-.002v3.227c0 .7.568 1.267 1.268 1.267h2.41c.7 0 1.267-.567 1.267-1.267v-1.237h-1.854V36.93h19.404v1.236h-1.853v1.237c0 .7.567 1.267 1.267 1.267h2.409c.7 0 1.267-.567 1.267-1.267v-3.226l-.008-5.451c0-.914-.172-3.88-.502-5.098h.008l.017-2.97.892-.2c.506-.11.864-.558.864-1.075V17.45c0-.61-.494-1.103-1.102-1.103z" }))));
  }
};

export { UtrechtIconLeerlingenvervoer as utrecht_icon_leerlingenvervoer };