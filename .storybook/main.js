const projectConfig = require('../webpack.config');

module.exports = {
  webpackFinal: (config) => {
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test('.svg') && rule.test.test('.jpg')
    );
    fileLoaderRule.exclude = /\.svg|jpg$/;
    config.module.rules.push({
      test: /\.svg|jpg$/,
      enforce: 'pre',
      loader: require.resolve('@svgr/webpack'),
    });
    return {
      ...config,
      resolve: { ...config.resolve, alias: { ...projectConfig.resolve.alias } },
    };
  },
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-scss',
    'storybook-addon-pseudo-states',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  staticDirs: ['../src/assets/icons', '../src/assets/images'],
};
