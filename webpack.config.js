const path = require('path')

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
