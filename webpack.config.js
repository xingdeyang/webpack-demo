const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist')
  },
  module: {
      rules: [{
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }, {
        test: /\.vue$/,
        loader: 'vue-loader'
      }, {
        test: /\.(png|jp?g|gif)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1024
          }
        }]
      }, {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: [{
          loader: 'file-loader'
        }]
      }]
  },
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    compress: true,
    port: 9000
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: './index.html'
      }),
      new VueLoaderPlugin()
  ]
};