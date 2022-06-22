import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconWerkzaamheden$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { "fill-rule": "evenodd", d: "M33.296 34.244a.73.73 0 0 0 .01-.734l-2.4-4.335a.752.752 0 0 0-1.291-.037l-1.083 1.719-1.44.585a.749.749 0 0 0-.403.391l-.761 1.72a.746.746 0 0 0 .056.709.75.75 0 0 0 .628.336l6.037.004a.74.74 0 0 0 .647-.358zm-13.332-7.986 1.559-2.722-1.356.125-1.175 2.037.972.56zm2.7 1.555 1.704.982-.262-3.557-1.442 2.575zm4.7 2.709-.554.225c-.344.14-.621.402-.784.735l-3.742-2.156.873 1.307a.749.749 0 0 1 .127.428l-.055 3.553-1.5-.023.05-3.32-1.591-2.384-3.186 5.563-1.302-.746 3.519-6.145-2.268-1.306.572-.99a.651.651 0 0 1 .045-.097l1.494-2.59a.747.747 0 0 1 .58-.372l2.385-.222a.75.75 0 0 1 .433.092l2.687 1.49a.75.75 0 0 1 .383.6l.409 5.536 1.426.822zm11.583 5.946-.01-.019-14.663-26.277A.339.339 0 0 0 23.97 10a.34.34 0 0 0-.303.17L9.059 36.457l-.006.011a.34.34 0 0 0 0 .356.339.339 0 0 0 .306.178H38.64a.338.338 0 0 0 .306-.178.34.34 0 0 0 0-.356zm2.598 1.856a3.32 3.32 0 0 1-2.904 1.677H9.359a3.322 3.322 0 0 1-2.904-1.677 3.326 3.326 0 0 1-.008-3.344L21.06 8.688l.006-.011A3.32 3.32 0 0 1 23.97 7c1.213 0 2.299.627 2.905 1.678l.01.019 14.667 26.282a3.324 3.324 0 0 1-.007 3.345zM24.91 21.353a1.5 1.5 0 1 1 3 .01 1.5 1.5 0 0 1-3-.01z" }))));
  }
}, [1, "opengemeenten-icon-werkzaamheden"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-werkzaamheden", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-werkzaamheden":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconWerkzaamheden$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconWerkzaamheden = OpengemeentenIconWerkzaamheden$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconWerkzaamheden, defineCustomElement };
