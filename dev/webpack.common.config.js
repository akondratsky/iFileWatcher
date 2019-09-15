const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    renderer: path.resolve(__dirname, '../src/renderer/app.js'),
    main: path.resolve(__dirname, '../src/main/index.js'),
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, '../src/renderer/components'),
      Pages: path.resolve(__dirname, '../src/renderer/pages'),
      Constants: path.resolve(__dirname, '../src/renderer/constants'),
    },
  },
  node: {
    __filename: true,
    __dirname: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [{ loader: 'file-loader?name=img/[name]__[hash:base64:5].[ext]' }],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [{ loader: 'file-loader?name=font/[name]__[hash:base64:5].[ext]' }],
      },
    ],
  },
  target: 'electron-renderer',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'dev/index.html',
      title: 'MyApp',
      inject: false,
    }),
  ],
};
