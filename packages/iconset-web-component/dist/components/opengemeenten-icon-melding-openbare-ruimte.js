import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './opengemeenten-icon-container2.js';

const OpengemeentenIconMeldingOpenbareRuimte$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("opengemeenten-icon-container", null, h("svg", { fill: "CurrentColor", viewBox: "0 0 48 48", xmlns: "http://www.w3.org/2000/svg" }, h("path", { "fill-rule": "evenodd", d: "M42 40.5V42h-7v-3h3.568c-.546-.961-1.779-2-4.559-2v-3c.528 0 1.012.039 1.477.095.093-.935-.205-1.919-.82-2.534a2.874 2.874 0 0 0-3.443-.5l-.7.385-.71-.365a24.641 24.641 0 0 0-1.184-.575c-1.597-.678-2.646-.683-4.255.001-.039.016-.073.043-.112.06L25.834 32h-.567l-.018-.002-.018.002H25v.02c-2.505.111-4.5 1.83-4.5 3.954 0 .008.003.017.003.026H20.5v.796l-.636.159C19.588 37.033 17 37.881 17 42h-3c0-4.344 2.276-6.625 4.072-7.545.074-.53.228-1.067.422-1.617L10 25.716l2.5-1-.5-2 2-1.5 7.92 7.217a8.48 8.48 0 0 1 1.282-.688c2.363-1.004 4.245-1 6.603 0 .2.085.474.217.726.34a5.931 5.931 0 0 1 6.257 1.354c1.39 1.39 1.964 3.507 1.595 5.481C41.144 36.295 42 38.901 42 40.5zm-13.44 0H31V42h-9.5v-1.5h4.938l2.31-2.309 1.06 1.061L28.56 40.5zm-16.358-5.034L12.5 42H6l.5-9.5 1.5-2 1.5 1 1-2L12 31l.128 2.845 1.93-.906.636 1.358-2.492 1.169zM33.777 16.28A.977.977 0 0 1 34.5 16c.296 0 .537.094.722.28a.982.982 0 0 1 .278.72.982.982 0 0 1-.278.72c-.185.186-.426.28-.722.28a.977.977 0 0 1-.722-.28.982.982 0 0 1-.278-.72c0-.293.093-.532.278-.72zM33.5 15h2V9h-2v6zm1 6c4.143 0 7.5-3.357 7.5-7.5S38.642 6 34.5 6a7.499 7.499 0 0 0-7.5 7.5c0 4.143 3.357 7.5 7.5 7.5z" }))));
  }
}, [1, "opengemeenten-icon-melding-openbare-ruimte"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["opengemeenten-icon-melding-openbare-ruimte", "opengemeenten-icon-container"];
  components.forEach(tagName => { switch (tagName) {
    case "opengemeenten-icon-melding-openbare-ruimte":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OpengemeentenIconMeldingOpenbareRuimte$1);
      }
      break;
    case "opengemeenten-icon-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const OpengemeentenIconMeldingOpenbareRuimte = OpengemeentenIconMeldingOpenbareRuimte$1;
const defineCustomElement = defineCustomElement$1;

export { OpengemeentenIconMeldingOpenbareRuimte, defineCustomElement };
