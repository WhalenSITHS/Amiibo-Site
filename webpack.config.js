const path = require("path");
module.exports = {
  entry: "./src/bundles/bundle.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "public/js")
  },
  devServer: {
    contentBase: "./dist"
  },
  watchOptions: {
    ignored: ["node_modules"]
  },
  watch: true
};
