const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './entry.js',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.elm'],
    modulesDirectories: ['node_modules']
  },
  plugins: [],
  module: {
    loaders: [
      {
        test: /\.elm$/,
        loader: 'elm-webpack',
        exclude: [/elm-stuff/, /node_modules/]
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ],
    noParse: /\.elm$/
  }
};
