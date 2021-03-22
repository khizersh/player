const path = require("path");
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
  externals: {
    Hls: "Hls"
  },

  devtool: "source-map",
  entry: path.resolve(__dirname, "./src/index.js"),
  // plugins: [new MinifyPlugin({ removeConsole: true })],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              encoding: "utf8",
              mimetype: "image/svg+xml",
              generator: (content, mimetype, encoding, resourcePath) => {
                if (/\.svg$/i.test(resourcePath)) {
                  return `${content.toString()}`;
                }
              }
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js"]
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./dist")
  }
};
