const autoprefixer = require('autoprefixer')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader'
]

const config = {
  entry: {
    app: ['./src/index']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.css/,
        // loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
        loaders: ["style", "css?modules"]
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './dist'),
    publicPath: '/dist'
  },
  resolve: {
    extensions: ['', '.js'],
    root: [path.join(__dirname, './src')]
  }
}

module.exports = config
