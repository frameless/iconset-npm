import { r as registerInstance, h } from './index-da88101a.js';
import { v as v4 } from './v4-fa4bb814.js';

const UtrechtIconOnderscheidingen = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const id = this.iconTitleId || v4();
    return (h("utrecht-icon-container", null, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 48 48", "aria-labelledby": id }, this.iconTitle ? h("title", { id: id }, this.iconTitle) : h("title", { id: id }, "Onderscheidingen"), h("path", { "fill-rule": "evenodd", fill: "currentColor", d: "M34 9h-5v14.353c.392.228.767.481 1.122.758L34 19.457V9zm-3 23c0-3.859-3.141-7-7-7s-7 3.141-7 7 3.141 7 7 7 7-3.141 7-7zM14 19.236l3.896 4.861c.351-.272.719-.52 1.104-.744V9h-5v10.236zm13.5 3.409V9h-7v13.645A9.926 9.926 0 0 1 24 22c1.232 0 2.409.235 3.5.645zm9.5-2.102l-4.796 5.755A9.936 9.936 0 0 1 34 32c0 5.514-4.486 10-10 10s-10-4.486-10-10c0-2.125.672-4.094 1.806-5.715L11 20.29V6h26v14.543zm-9.049 11.349l-1.543 1.223.636 2.204-1.116.846L24 34.97l-1.928 1.195-1.116-.846.636-2.204-1.543-1.223.466-1.338h1.861l.954-1.892h1.34l.954 1.892h1.861l.466 1.338z" }))));
  }
};

export { UtrechtIconOnderscheidingen as utrecht_icon_onderscheidingen };