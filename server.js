const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const app = express();
const webpackConfig = require("./webpack.config.js");
const compiler = webpack(webpackConfig);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath
  })
);

app.use(require("webpack-hot-middleware")(compiler));

app.use(express.static("pages"));

app.listen(8080, function() {
  console.log("\n'/pages' being served at http://localhost:8080\n");
});
