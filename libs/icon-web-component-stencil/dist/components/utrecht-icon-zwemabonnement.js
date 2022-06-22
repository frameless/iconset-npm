import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './utrecht-icon-container2.js';

const UtrechtIconZwemabonnement$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("utrecht-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { "fill-rule": "evenodd", d: "M17 15.5h5V14h-5v1.5zm-4.5-1A1.5 1.5 0 0 0 11 16v.5h5V16a1.5 1.5 0 0 0-1.5-1.5h-2zM15 12a1.493 1.493 0 0 0-1.491-1.5A1.48 1.48 0 0 0 12 12a1.492 1.492 0 0 0 1.491 1.5A1.508 1.508 0 0 0 15 12zm2 .5h6V11h-6v1.5zM9 18h16V9H9v9zM6 7.5A1.5 1.5 0 0 1 7.5 6h18.992a1.5 1.5 0 0 1 1.5 1.499l.007 11.998a1.5 1.5 0 0 1-1.502 1.501l-18.999-.021A1.5 1.5 0 0 1 6 19.477V7.5zM36.5 37c-2.303 0-4.108 1.109-4.299 1.231-.013.007-1.253.769-2.701.769-1.447 0-2.687-.762-2.693-.765C26.609 38.109 24.804 37 22.5 37c-2.303 0-4.108 1.109-4.299 1.231-.013.007-1.253.769-2.701.769-1.447 0-2.687-.762-2.693-.765C12.609 38.109 10.804 37 8.5 37a8.07 8.07 0 0 0-2.5.418v3.24C6.406 40.446 7.389 40 8.5 40c1.448 0 2.688.762 2.694.765.198.126 2.003 1.235 4.306 1.235 2.304 0 4.109-1.109 4.3-1.231.013-.007 1.253-.769 2.7-.769 1.448 0 2.688.762 2.694.765.198.126 2.003 1.235 4.306 1.235 2.304 0 4.109-1.109 4.3-1.231.013-.007 1.253-.769 2.7-.769 1.448 0 2.688.762 2.694.765.152.096 1.259.77 2.806 1.079v-3.09c-.709-.223-1.189-.517-1.193-.519C40.609 38.109 38.804 37 36.5 37zM19.683 24.5l-6.313 4.591 1.764 2.426 4.688-3.41 3.131 1.928-9.042 6.378c.235.127.42.236.509.293.118.065.653.294 1.08.294.428 0 .962-.229 1.155-.34.372-.238 2.756-1.66 5.845-1.66 3.09 0 5.474 1.422 5.92 1.706.118.065.653.294 1.08.294.428 0 .962-.229 1.155-.34.158-.101.693-.416 1.475-.744l-3.673-5.51c-.315-.481-.671-1.025-1.49-1.424L19.683 24.5zM34.5 27a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z" }))));
  }
}, [1, "utrecht-icon-zwemabonnement"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["utrecht-icon-zwemabonnement", "utrecht-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "utrecht-icon-zwemabonnement":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, UtrechtIconZwemabonnement$1);
      }
      break;
    case "utrecht-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const UtrechtIconZwemabonnement = UtrechtIconZwemabonnement$1;
const defineCustomElement = defineCustomElement$1;

export { UtrechtIconZwemabonnement, defineCustomElement };
