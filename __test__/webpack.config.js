var path = require("path")

/*
module.exports = {
  entry: "../lib/thinky.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "thinky.js",
    library: "Thinky",
    libraryTarget: "umd"
  },
  devServer: {
    port: 3001
  }
}
*/


module.exports = {
  entry: "./app.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "thinky.js",
    library: "Thinky",
    libraryTarget: "umd"
  },
  devServer: {
    port: 3001
  }
}
