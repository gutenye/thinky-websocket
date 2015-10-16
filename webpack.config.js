var path = require("path")
module.exports = {
  entry: "thinky-websocket",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "thinky-websocket.js",
    library: "Thinky",
    libraryTarget: "umd"
  },

  node: {
    tls: "empty"
  }
}
