const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: { main: './src/js/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/app.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    overlay: true
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }, {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }, {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          }, {
            loader: 'postcss-loader',
            options: { sourceMap: true, config: { path: './postcss.config.js' } }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      }, {
        test: /\.css$/,
        use: [
          {
            loader: 'postcss-loader',
            options: { sourceMap: true, config: { path: './postcss.config.js' } }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      minify: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin(
      { filename: 'css/style.css' }
    ),    
    new CopyWebpackPlugin([
      {
        from: './src/img', to: './img'
      }]),
    new webpack.SourceMapDevToolPlugin({})
  ]
};