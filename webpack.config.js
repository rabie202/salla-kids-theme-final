const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ThemeWatcher = require('@salla.sa/twilight/watcher.js');

const asset = file => path.resolve('src/assets', file || '');
const publicDir = file => path.resolve('public', file || '');

module.exports = {
  entry: {
    app: [asset('css/style.css'), asset('css/responsive.css'), asset('js/main.js')]
  },
  output: {
    path: publicDir(),
    clean: false,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, { loader: 'css-loader', options: { url: false } }]
      }
    ]
  },
  plugins: [
    new ThemeWatcher(),
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    new CopyPlugin({ patterns: [{ from: asset('images'), to: publicDir('images'), noErrorOnMissing: true }] })
  ],
  optimization: {
    minimizer: ['...', new CssMinimizerPlugin()]
  }
};
