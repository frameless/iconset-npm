import { applyPolyfills, defineCustomElements } from '@frameless/icon-web-component-stencil/loader';
import { Plugin } from 'vue';

export const UtrechtIconWebComponent: Plugin = {
  async install() {
    applyPolyfills().then(() => {
      defineCustomElements();
    });
  },
};
