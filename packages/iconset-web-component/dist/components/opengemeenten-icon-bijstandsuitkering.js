import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconBijstandsuitkering$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { "fill-rule": "evenodd", d: "M33 32.519h6V31h-6v1.519zm3 3h-3c-1.654 0-3-1.346-3-3V31c0-1.654 1.346-3 3-3h3v-3c0-.542-.458-1-1-1H14.5c-2.206 0-4-1.794-4-4v-1.492c-.827 0-1.5.674-1.5 1.5v18.017c0 .537.438.975.975.975h25.032a.994.994 0 0 0 .993-.993v-2.488zM13.5 20c0 .551.449 1 1 1h6.032c.024-.164.039-.33.039-.5a3.57 3.57 0 0 0-.065-.649c-.012-.062-.028-.122-.043-.184a3.718 3.718 0 0 0-.138-.446c-.023-.058-.043-.116-.068-.172a3.615 3.615 0 0 0-.296-.544A3.57 3.57 0 0 0 17 16.929c-1.229 0-2.306.63-2.948 1.578h-.014c-.016.023-.025.052-.041.076a3.457 3.457 0 0 0-.2.37c-.034.069-.073.135-.102.207a3.477 3.477 0 0 0-.195.634V20zm7.929-7.5A3.575 3.575 0 0 0 25 16.071a3.575 3.575 0 0 0 3.571-3.571A3.575 3.575 0 0 0 25 8.929a3.575 3.575 0 0 0-3.571 3.571zm.149 6.004A4.947 4.947 0 0 1 21.973 21H32v-1.502a.994.994 0 0 0-1-.998l-9.422.004zM39 28h3v7.519h-3v2.488A3.997 3.997 0 0 1 35.007 42H9.975A3.98 3.98 0 0 1 6 38.025V20.008c0-2.48 2.02-4.508 4.5-4.508h10.525a4.954 4.954 0 0 1-1.025-3c0-2.757 2.243-5 5-5s5 2.243 5 5c0 1.13-.391 2.162-1.025 3H31a3.985 3.985 0 0 1 3.975 3.985L35 21c2.206 0 4 1.794 4 4v3zm-14.924 7.494c-1.513 0-2.779-.785-3.288-2.296h3.288l.246-1.209h-3.913s-.049-.364-.049-.545c0-.247.033-.512.033-.512h4.127l.262-1.133h-4.093c.526-1.436 1.743-2.317 3.304-2.317.609 0 1.168.1 1.168.1l.509-1.905s-.756-.177-1.628-.177c-2.712 0-4.915 1.806-5.622 4.299h-1.227v1.133h1.014s-.033.364-.033.545c0 .214.033.512.033.512h-1.014v1.209h1.227c.674 2.644 2.811 4.302 5.622 4.302 1.135 0 1.99-.318 1.99-.318l-.378-1.938s-.723.25-1.578.25zM42 9v3h-3v3h-3v-3h-3V9h3V6h3v3h3z" }))));
  }
}, [1, "opengemeenten-icon-bijstandsuitkering"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-bijstandsuitkering", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-bijstandsuitkering":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconBijstandsuitkering$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconBijstandsuitkering = OpengemeentenIconBijstandsuitkering$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconBijstandsuitkering, defineCustomElement };
