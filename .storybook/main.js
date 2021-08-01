const path = require('path');

module.exports = {
  stories: [
    '../src/**/*.stor@(ies|y).mdx',
    '../src/**/*.stor@(ies|y).@(js|jsx|ts|tsx)',
  ],
  parameters: {
    layout: 'centered',
  },
  addons: [
    {
      name: '@storybook/addon-docs/preset',
      options: {
        sourceLoaderOptions: {
          parser: 'typescript',
        },
        configureJSX: true,
      },
    },
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          test: [/\.stor(ies|y)\.(ts|tsx)$/],
          include: [path.resolve(__dirname, '../src')], // You can specify directories
        },
        loaderOptions: {
          parser: 'typescript',
        },
      },
    },
  ],

}
;
