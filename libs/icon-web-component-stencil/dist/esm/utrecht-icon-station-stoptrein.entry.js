import { r as registerInstance, h } from './index-da88101a.js';
import { v as v4 } from './v4-fa4bb814.js';

const UtrechtIconStationStoptrein = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Station Stoptrein"), h("path", { fill: "currentColor", d: "M42 16.5c0-3.3-2.7-6-6-6V9h-9v1.5c-3.3 0-6 2.7-6 6V36h21V16.5zM31.5 27c-1.2 0-2.2-1-2.2-2.2 0-1.2 1-2.2 2.2-2.2 1.2 0 2.2 1 2.2 2.2.1 1.2-1 2.2-2.2 2.2zm-4.4 10.5L26 39h11l-1-1.5h3l3 4.5h-3l-1-1.5H25L24 42h-3l3.1-4.5h3zM18 34.4386v1.5H6v-1.5h12zM10.5 18.1c1.7 0 3 1.3 3 3V27H12v6H7.5v-7.5H6v-5l3-2 .15879-.0746c.38965-.17227.90371-.3254 1.34121-.3254zM36 13.5c1.7 0 3 1.4 3 3v3H24v-3c0-1.7 1.4-3 3-3h9zM10 12c1.38071 0 2.5 1.11929 2.5 2.5S11.38071 17 10 17s-2.5-1.11929-2.5-2.5S8.61929 12 10 12z" }))));
  }
};

export { UtrechtIconStationStoptrein as utrecht_icon_station_stoptrein };
