var webpack = require('webpack');

module.exports = {
  entry: './app.js',
  output: {
    root: '.',
    path: 'public',
    filename: 'app.js'
  },

  module: {
    loaders: [
      {test: /knockout.build.output.knockout-latest\.js/, loader: 'imports?require=>false'}
    ]
  },

  resolve: {
    modulesDirectories: ['node_modules']
  }
};
