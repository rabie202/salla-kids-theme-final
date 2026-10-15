const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const asset = file => path.resolve('src/assets', file || '');
const publicDir = file => path.resolve('public', file || '');
module.exports = {
  entry: {
    app: [asset('styles/app.scss'), asset('js/app.js')],
  },
  output: { path: publicDir(), filename: '[name].js', clean: false },
  module: { rules: [
    { test: /\.scss$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] },
  ]},
  plugins: [new MiniCssExtractPlugin({ filename: '[name].css' })],
};
