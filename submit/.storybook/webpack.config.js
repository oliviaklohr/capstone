// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const regexs = require('../config/fileExtensionRegexs');
const getStyleLoaders = require('../config/getStyleLoaders');

const cssLoaderWithoutModulesRule = {
  test: regexs.cssRegex,
  exclude: regexs.cssModuleRegex,
  use: getStyleLoaders({
    importLoaders: 1,
  }),
};

// using the extension .module.css
const cssLoaderWithModulesRule = {
  test: regexs.cssModuleRegex,
  use: getStyleLoaders({
    importLoaders: 1,
    modules: true,
    getLocalIdent: getCSSModuleLocalIdent,
  }),
};

const scssLoaderWithoutModulesRule = {
  test: regexs.sassRegex,
  exclude: regexs.sassModuleRegex,
  use: getStyleLoaders({ importLoaders: 2 }, 'sass-loader'),
};

// using the extension .module.scss or .module.sass
const scssLoaderWithModulesRule = {
  test: regexs.sassModuleRegex,
  use: getStyleLoaders(
    {
      importLoaders: 2,
      modules: true,
      getLocalIdent: getCSSModuleLocalIdent,
    },
    'sass-loader'
  ),
};

// "file" loader makes sure those assets get served by WebpackDevServer.
// When you `import` an asset, you get its (virtual) filename.
// In production, they would get copied to the `build` folder.
// This loader doesn't use a "test" so it will catch all modules
// that fall through the other loaders.
const fileLoaderRule = {
  // Exclude `js` files to keep "css" loader working as it injects
  // its runtime that would otherwise be processed through "file" loader.
  // Also exclude `html` and `json` extensions so they get processed
  // by webpacks internal loaders.
  include: /\.(svg)$/,
  loader: require.resolve('file-loader'),
  options: {
    name: 'static/media/[name].[hash:8].[ext]',
  },
};

const cssLoaderRules = [
  cssLoaderWithModulesRule,
  cssLoaderWithoutModulesRule,
];

const scssLoaderRules = [
  scssLoaderWithModulesRule,
  scssLoaderWithoutModulesRule,
];

const loaderRules = [
  ...cssLoaderRules,
  ...scssLoaderRules,
  fileLoaderRule
];


// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need

  loaderRules.forEach((rule) => {
    storybookBaseConfig.module.rules.push(rule);
  });

  // Return the altered config
  return storybookBaseConfig;
};
