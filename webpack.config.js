const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    css: ["./webpack.css.js", "webpack-hot-middleware/client?reload=true"],
    javascript: [
      "./webpack.javascript.js",
      "webpack-hot-middleware/client?reload=true"
    ]
  },
  output: {
    filename: "[name].bundle.js", // will output css.bundle.js and javascript.bundle.js
    publicPath: "/", // serve into the root of the server (e.g. http://localhost:8080/css.bundle.js, http://localhost:8080/js.bundle.js)
    path: path.resolve(__dirname, "dist") // this is for building to production
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new CleanWebpackPlugin()],
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: ["file-loader"]
      }
    ]
  }
};
