var webpack = require('webpack');

module.exports = {
  entry: './app.js',
  output: {
    root: '.',
    path: 'public',
    filename: 'app.js'
  },

  resolve: {
    modulesDirectories: ['node_modules']
  }
};
