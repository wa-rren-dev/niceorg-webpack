const express = require("express");
const path = require("path");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const app = express();
const webpackConfig = require("./webpack.config.js");
const compiler = webpack(webpackConfig);

var PORT = process.env.PORT || 3000;
app.set("port", PORT);

// Allow cross origin requests for font files
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath
  })
);

app.use(require("webpack-hot-middleware")(compiler));

app.use(express.static("pages"));

app.use(function(req, res, next) {
  res.status(404).sendFile(path.join(__dirname, "./pages/404.html"));
});

app.listen(app.get("port"), function() {
  console.log("Express server listening on port " + app.get("port"));
});

module.exports = app;
