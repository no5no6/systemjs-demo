const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, build),
    libraryTarget: 'system' //
  },
  devtool: 'source-map',
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname, build),
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin(
      template: './src/index.html',
      inject: false   //
    )
  ]
}