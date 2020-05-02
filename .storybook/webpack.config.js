module.exports = function ({ config }) {
  // config.module.rules.push({
  //   test: /\.stories\.jsx?$/,
  //   loaders: [require.resolve('@storybook/source-loader')],
  //   enforce: 'pre',
  // });

  config.module.rules.push({
    test: /\.s[ac]ss$/i,
    loaders: ["style-loader", "css-loader", "sass-loader"],
  });

  return config;
};
