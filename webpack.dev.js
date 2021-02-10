module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader?classPrefix",
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  entry: ["./src/demo"],
  output: {
    path: `${__dirname}/dist`,
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: "./dist",
  },
  devtool: "cheap-module-eval-source-map",
};
