const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader"
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  entry: {
    'helpers': '.index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    libraryTarget: 'var',
    library: 'helpers',
  },
  plugins: [
  ]
}