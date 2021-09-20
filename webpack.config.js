'use strict';

let path = require('path');

const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: './src/scripts/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/js'
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src/index.html", to: "../" },
      ],
    }),
  ],

  watch: true,

  devtool: "source-map",

  module: {}
};
