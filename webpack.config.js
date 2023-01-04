const path = require(`path`);

module.exports = {
  mode: 'development',
  entry: `./src/index.ts`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: `babel-loader`,
      },
      {
        test: /\.(ts|tsx)$/,
        loader: `ts-loader`,
      },
    ],
  },
  resolve: {
    extensions: [`.ts`, `.tsx`, `.js`, `json`],
  },
  devtool: `source-map`,
};
