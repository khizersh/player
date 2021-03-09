const path = require("path");

module.exports = {
  externals: {
    Hls: "Hls",
  },
  devtool: "source-map",
  entry: path.resolve(__dirname, "./src/index.js"),
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index.js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
  },
};
