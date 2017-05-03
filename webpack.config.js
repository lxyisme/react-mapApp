// webpack.config.js
var path = require("path");
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    bundle:['./src/index.js'],
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: "/build/",
    filename: '[name].js'
  },
  // 新添加的module属性
  module: {
    loaders: [
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'jsx-loader!babel-loader' },
      { test: /\.js$/, exclude:/node_modules/, loader: 'babel-loader'},
      {test: /\.(jpg|png)$/, loader: "url?limit=8192"},
      {test: /\.css$/, loader: "style-loader!css-loader"}, // 把多个css压缩到一个css中。
    ]
  },
  babel: {
    presets: ["es2015", "react", "stage-2"]
  },
  devServer: { inline: true },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new ExtractTextPlugin("[name].css"),
    new webpack.HotModuleReplacementPlugin()
  ]
};