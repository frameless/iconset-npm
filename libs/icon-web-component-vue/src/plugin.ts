import { applyPolyfills, defineCustomElements } from 'icon-web-component-stencil/loader';
import { Plugin } from 'vue';

export const UtrechtIconWebComponent: Plugin = {
  async install() {
    applyPolyfills().then(() => {
      defineCustomElements();
    });
  },
};
