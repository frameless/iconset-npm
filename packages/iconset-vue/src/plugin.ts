import { applyPolyfills, defineCustomElements } from '@opengemeenten/iconset-web-component/loader';
import { Plugin } from 'vue';

export const UtrechtIconWebComponent: Plugin = {
  async install() {
    applyPolyfills().then(() => {
      defineCustomElements();
    });
  },
};
