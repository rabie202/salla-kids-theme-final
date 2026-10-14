const path = require('path');
const ThemeWatcher = require('@salla.sa/twilight-watcher');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: './src/assets/js/main.js',
    styles: './src/assets/css/style.css'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new ThemeWatcher()
  ],
  watchOptions: {
    ignored: /node_modules/
  }
};
