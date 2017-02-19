module.exports = {
  entry: __dirname + '/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    filename: "observer.js",
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
};
