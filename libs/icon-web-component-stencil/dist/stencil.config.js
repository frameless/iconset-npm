import { reactOutputTarget as react } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';
export const config = {
  namespace: 'icons',
  outputTargets: [
    react({
      componentCorePackage: '@frameless/icon-web-component-stencil',
      proxiesFile: '../icon-web-component-react/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    vueOutputTarget({
      componentCorePackage: '@frameless/icon-web-component-stencil',
      proxiesFile: '../icon-web-component-vue/src/components.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
