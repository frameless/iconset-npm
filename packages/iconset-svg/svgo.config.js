module.exports = {
  multipass: true,
  js2svg: {
    indent: 2,
    pretty: true,
  },
  plugins: [
    'preset-default',
    'removeDimensions',
    'removeTitle',
    'convertStyleToAttrs',
    {
      name: 'removeAttrs',
      params: {
        attrs: 'path:(fill|stroke)',
      },
    },
    {
      name: 'sortAttrs',
      params: {
        xmlnsOrder: 'alphabetical',
      },
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [
          {
            fill: 'CurrentColor',
          },
        ],
      },
    },
  ],
};
