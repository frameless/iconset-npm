/* eslint-disable import/order */
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import vue from 'rollup-plugin-vue';

// rollup.config.js
/**
 * @type {import('rollup').RollupOptions}
 */

const packageJson = require('./package.json');

const outputGlobals = {
  vue: 'vue',
  'icon-web-component-stencil/loader': 'icon-web-component-stencil/loader',
};

export default [
  // ESM build to be used with webpack/rollup.
  {
    input: 'src/index.tsx',
    output: {
      format: 'esm',
      file: packageJson.module,
      sourcemap: true,
      globals: outputGlobals,
    },
    external: ['vue', 'icon-web-component-stencil/loader'],
    plugins: [vue(), typescript(), json()],
  },
  // SSR build.
  {
    input: 'src/index.tsx',
    output: {
      format: 'cjs',
      file: packageJson.main,
      sourcemap: true,
      globals: outputGlobals,
    },
    external: ['vue', 'icon-web-component-stencil/loader'],
    plugins: [vue({ template: { optimizeSSR: true } }), typescript(), json()],
  },
  // Browser build.
  {
    input: 'src/index.tsx',
    output: {
      format: 'iife',
      file: packageJson.browser,
      globals: outputGlobals,
      plugins: [terser()],
    },
    external: ['vue', 'icon-web-component-stencil/loader'],
    plugins: [vue(), typescript(), json()],
  },
];
